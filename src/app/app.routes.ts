import { Routes } from '@angular/router';
import { CarsAndTrucksComponent } from './cars-and-trucks/cars-and-trucks.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todo', pathMatch: 'full' },
    { path: 'cars-and-trucks', loadComponent: () => import('./cars-and-trucks/cars-and-trucks.component').then(m => m.CarsAndTrucksComponent) },
    { path: 'timer', loadComponent: () => import('./timer/timer.component').then(m => m.TimerComponent) },
    { path: 'todo', loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent) },
];
