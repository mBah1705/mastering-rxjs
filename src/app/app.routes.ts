import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'todo', pathMatch: 'full' },
    { path: 'todo', loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent) },
    { path: 'cars-and-trucks', loadComponent: () => import('./cars-and-trucks/cars-and-trucks.component').then(m => m.CarsAndTrucksComponent) },
    { path: 'timer', loadComponent: () => import('./timer/timer.component').then(m => m.TimerComponent) },
    { path : 'focussable-block', loadComponent: () => import('./focussable-block/focussable-block.component').then(m => m.FocussableBlockComponent) },
    { path: 'error', loadComponent: () => import('./error-message-randomly/error-message-randomly.component').then(m => m.ErrorMessageRandomlyComponent)},
    { path: 'error-signals', loadComponent: () => import('./error-message-with-signals/error-message-with-signals.component').then(m => m.ErrorMessageWithSignalsComponent)},
    { path: 'progress', loadComponent: () => import('./progress-bar/progress-bar.component').then(m => m.ProgressBarComponent)},
    { path: 'countdown', loadComponent: () => import('./countdown/countdown.component').then(m => m.CountdownComponent)},

    { path: '**', redirectTo: 'todo' }
];
