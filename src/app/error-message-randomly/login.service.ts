import { Service } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Service()
export class LoginService {
    readonly response$  = new Observable<number>(subsriber => {
        subsriber.next(Math.random())
    }).pipe(
            tap(() => console.log("Login request")),
            delay(1000),
            map(response => {
                console.log(response);
                
            if (response < 0.5) {
            throw new Error("Login failed!");
            }

            return "David Bowie";
        })
    )
}
