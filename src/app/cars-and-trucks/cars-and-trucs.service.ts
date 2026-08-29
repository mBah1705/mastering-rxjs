import { Service } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Truck } from './types/truck.type';
import { Car } from './types/car.type';

@Service()
export class CarsAndTrucsService {
    readonly cars$ = new ReplaySubject<Car>();
    readonly trucks$ = new ReplaySubject<Truck>();

    emitData() {
        // DO NOT REMOVE
        this.cars$.next({ id: 'c1', make: 'BMW', model: 'M5', color: 'red' });
        this.cars$.next({ id: 'c2', make: 'Mercedes', model: 'E', color: 'black' });
        this.cars$.next({ id: 'c3', make: 'Audi', model: 'RS6', color: 'green' });
        this.cars$.next({ id: 'c4', make: 'Citroen', model: 'C4', color: 'black' });

        this.trucks$.next({ id: 't1', make: 'MAN', model: 'big', color: 'red' });
        this.trucks$.next({ id: 't2', make: 'Mercedes', model: 'bigger', color: 'black' });

        this.cars$.next({ id: 'c5', make: 'Peugeot', model: '308', color: 'red' });
        this.cars$.next({
        id: 'c6',
        make: 'Maserati',
        model: 'GranTurismo',
        color: 'black',
        });
        this.cars$.next({ id: 'c7', make: 'Astin Martin', model: 'DB9', color: 'silver' });
        this.cars$.next({ id: 'c8', make: 'Nissan', model: 'Note', color: 'blue' });
        this.cars$.next({ id: 'c9', make: 'Opel', model: 'Corsa', color: 'blue' });
        this.cars$.next({ id: 'c10', make: 'Ford', model: 'GT', color: 'red' });
        this.cars$.next({ id: 'c11', make: 'Volvo', model: 'S90', color: 'silver' });

        this.trucks$.next({ id: 't3', make: 'Scania', model: 'biggest', color: 'green' });
        this.trucks$.next({ id: 't4', make: 'Renault', model: 'small', color: 'black' });
        this.trucks$.next({ id: 't5', make: 'Ford', model: 'smaller', color: 'red' });
        this.trucks$.next({ id: 't6', make: 'DAF', model: 'smallest', color: 'black' });
        this.trucks$.next({ id: 't7', make: 'Volvo', model: 'swedish', color: 'silver' });

        // delayed
        setTimeout(() => {
        this.cars$.next({ id: 'c12', make: 'McLaren', model: 'P1', color: 'blue' });
        this.cars$.next({ id: 'c13', make: 'Koenigsegg', model: 'One:1', color: 'blue' });
        }, 1000);
    }
}
