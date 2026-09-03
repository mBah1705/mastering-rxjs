import { Component, computed, inject, signal } from '@angular/core';
import { LoginService } from './login.service';
import { EMPTY, ignoreElements, Subject, tap, timer } from 'rxjs';
import { catchError, map, repeat, retry, switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-error-message-with-signals',
  styleUrl: './error-message-with-signals.component.css',
  templateUrl: './error-message-with-signals.component.html',
})
export class ErrorMessageWithSignalsComponent {
  private loginService = inject(LoginService)
  readonly submit$ = new Subject<void>();

  protected readonly error = signal<Error | null>(null)
  protected readonly disabled = signal(false)

  protected readonly user = toSignal(
    this.submit$.pipe(
      tap(() => this.disabled.set(true)),
      switchMap(() => this.loginService.login().pipe(
        map(value => {
          this.error.set(null)
          this.disabled.set(false)
          return value
        })
      )),
      catchError((error: Error) => {
        timer(5000).pipe(
          tap(() => this.error.set(null)),
        ).subscribe()
        this.error.set(error)
        this.disabled.set(false)
        return EMPTY
      }),
      repeat()
  ))
}
