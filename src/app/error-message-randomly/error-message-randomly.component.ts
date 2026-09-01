import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { catchError, finalize, ignoreElements, map, mapTo, of, repeat, retry, share, startWith, Subject, switchMap, switchMapTo, tap, timer } from 'rxjs';
import { LoginService } from './login.service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-error-message-randomly',
  styleUrl: './error-message-randomly.component.css',
  templateUrl: './error-message-randomly.component.html',
})
export class ErrorMessageRandomlyComponent {
  private readonly loginService = inject(LoginService)
  readonly submit$ = new Subject<void>()
  readonly request$ = this.submit$.pipe(
    switchMapTo(this.loginService.pipe(startWith(""))),
    share()
  )

  readonly user$ = this.request$.pipe(retry())

  readonly errors$ = this.request$.pipe(
    ignoreElements(),
    catchError(e => of(e)),
    repeat(),
    switchMap(e => timer(5000).pipe(startWith(e)))
  )
  
  readonly disabled$ = this.request$.pipe(
    mapTo(true),
    catchError(() => of(false)),
    repeat()
  );
  // readonly user = computed(() => this.loginService.response())
  // readonly error = computed(() => this.loginService.error())
  // readonly submitDisabled = signal(false)

  // ngOnInit() {
  //     this.submit$.pipe(
  //       tap(() => console.log('submitting!')),
  //       share(),
  //       retry(),
  //       tap(() => this.loginService.loginSubject$.next(Math.random())),
  //       ignoreElements(),
  //       catchError(e => of(e)),
  //       repeat(),
  //       switchMap(e => timer(5000).pipe(startWith(e))),
  //       tap(() => this.submitDisabled.set(true)),
  //     ).subscribe(() => this.submitDisabled.set(false))
  // }
}
