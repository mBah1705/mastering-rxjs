import { Service, signal } from '@angular/core';
import { catchError, delay, map, Observable, of, Subject, tap } from 'rxjs';

@Service()
export class LoginService extends Observable<string> {
  constructor() {
    super(subscriber =>
      of(Math.random())
        .pipe(
          tap(() => console.log("Login request")),
          delay(1000),
          map(response => {
            console.log(response)
            if (response < 0.5) {
              throw new Error("Login failed!");
            }

            return "David Bowie";
          })
        )
        .subscribe(subscriber)
    );
  }
}
