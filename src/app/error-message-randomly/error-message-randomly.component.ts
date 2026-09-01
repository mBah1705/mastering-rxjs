import { Component, inject } from '@angular/core';
import { catchError, finalize, ignoreElements, map, mapTo, of, repeat, retry, share, startWith, Subject, switchMap, tap, timer } from 'rxjs';
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

  readonly response$  = this.loginService.response$
  
  readonly request$ = this.submit$.pipe(
    switchMap(() => this.response$),
    share()
  )
  
  readonly user$ = this.request$.pipe(
    retry()
  )

  readonly errors$ = this.request$.pipe(
    ignoreElements(),
    catchError(e => of(e)),
    switchMap(e => timer(5000).pipe(startWith(e))),
  )

  readonly disabled$ = this.request$.pipe(
    map(() => true),
  );
}
