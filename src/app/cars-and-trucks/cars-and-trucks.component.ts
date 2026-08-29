import { Component, DestroyRef, inject } from '@angular/core';
import { CarsAndTrucsService } from './cars-and-trucs.service';
import { debounceTime, delay, filter, first, interval, map, merge, mergeMap, race, switchMap, take, zip } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-cars-and-trucks',
  styleUrl: './cars-and-trucks.component.css',
  templateUrl: './cars-and-trucks.component.html',
})
export class CarsAndTrucksComponent {
  private readonly carsAndTrucsService = inject(CarsAndTrucsService);
  private readonly destroyRef = inject(DestroyRef);

  cars$ = this.carsAndTrucsService.cars$;
  trucks$ = this.carsAndTrucsService.trucks$;

  ngOnInit() {
    this.carsAndTrucsService.emitData();
    // EXERCISES
    // TIP: whenever you start at the next exercise it's recommended to refresh to result browser
    // this is to prevent memory leaks

    // #1 ---
    // step 1: only get cars that have the 'color' black or red
    // step 2: only get the 'color' of the car
    // step 3: only emit a new value when the value is different from the previous one

    // step 1: --c1--c2--c3--c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
      // cars$.pipe(filter(car => car.color === 'black' || car.color === 'red')).subscribe(
      //   {next: car => console.log(car)}
      // )
    // step 2: --c1--c2------c4
      // cars$.pipe(map(car => car.color), distinctUntilChanged()).subscribe(color => console.log(color))

    // #2 ---
    // step 1: skip the first 3 cars from the stream
      // cars$.pipe(skip(3)).subscribe(
      //   {next: car => console.log(car)}
      // )
    // step 2: take only the first 5 cars from the stream, ignore all the others
      // this.cars$.pipe(take(5), takeUntilDestroyed(this.destroyRef)).subscribe({ next: (car) => console.log(car) });

    // #3 ---
    // step 1: only get the cars with the 'color' blue
      // this.cars$.pipe(
      //   filter(car => car.color === 'blue'),
      //   takeUntilDestroyed(this.destroyRef)
      // ).subscribe({ next: (car) => console.log(car) });

    // step 2: console log the cars inside the stream
      // this.cars$.subscribe({ next: (car) => console.log(car) });
    
    // step 3: delay the emit of the values by 500ms
      // this.cars$.pipe(delay(500)).subscribe({ next: (car) => console.log(car) });

      
    // #4 ---
    // step 1: only get the 'make' of the car
      // this.cars$.pipe(map(car => car.make)).subscribe({ next: (make) => console.log(make) });

    // step 2: only emit a new value when there hasn't been any activity on the stream for at least 500ms
      // this.cars$.pipe(debounceTime(500)).subscribe({ next: (car) => console.log(car) });

    // #5 ---
    // step 1: combine all cars with all trucks (don't use the 'merge' operator)
      // this.cars$.pipe(mergeMap(car => this.trucks$.pipe(map(truck => ({ car, truck })), takeUntilDestroyed(this.destroyRef))), takeUntilDestroyed(this.destroyRef)).subscribe({ next: (result) => console.log(result) });

    // #6 ---
    // step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)
      // merge(this.cars$, this.trucks$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (result) => console.log(result) });

    // #7 ---
    // step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)
    // step 2: make sure that the trucks output before the cars
      // merge(this.trucks$, this.cars$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (result) => console.log(result) });
    
    // #8 ---
    // step 1: only get the cars by make Ford and Volvo
      // this.cars$.pipe(filter(car => car.make === 'Ford' || car.make === 'Volvo'), takeUntilDestroyed(this.destroyRef)).subscribe({ next: (car) => console.log(car) });
    // step 2: merge the trucks into the cars stream and make sure only the trucks of the same brand as the cars will be in the stream output (HINT: take a look at mergeMap and switchMap, only the trucks should be returned)
      // this.cars$.pipe(
      //   switchMap(car => this.trucks$.pipe(
      //     filter(truck => truck.make === car.make),
      //     takeUntilDestroyed(this.destroyRef)
      //   )),
      //   takeUntilDestroyed(this.destroyRef)
      // ).subscribe({ next: (result) => console.log(result) });
    
    // #9 ---
    // step 1: only emit the results of whoever emits first, if cars$ emits first then the trucks$ should be ignored completely
      race(this.cars$, this.trucks$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (result) => console.log(result) });

    // #10 ---
    // step 1: the first value of cars$ should be combined with the first value of trucks$
    // cars$ = [1,2,3,4,5]; trucks$ = ['a', 'b', 'c']; result = [ [1,'a'], [2,'b'], [3,'c'] ]
      // zip(this.cars$, this.trucks$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (result) => console.log(result) });

    // #11 ---
    // step 1: log something every 2000ms (the value can be a static value)
      // interval(2000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: () => console.log('tick') });
  }
}
