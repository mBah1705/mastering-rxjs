import { Service } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Service()
export class CountdownService {
    count = (countdown: number) => new Observable<number>((subscriber) => {
        let reversedCountdown = countdown;
        interval(1000).pipe(
            take(countdown + 1),
            map(() => reversedCountdown--)
        ).subscribe(subscriber)
    })
}
