import { Service } from '@angular/core';
import { delay, map, tap, throwError, timer } from 'rxjs';

@Service()
export class LoginService {
    readonly login = () => {
        return timer(0).pipe(
            map(() => Math.random()),
            tap(() => console.log('Login request')),
            delay(1000),
            map(response => {
                console.log(response)
                
                if (response < 0.5) {
                    throw new Error('Login failed!')             
                }
    
                return 'Mamadou BAH'
            })
        )
    }
}
