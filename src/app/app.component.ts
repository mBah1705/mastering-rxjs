import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TimerComponent } from "./timer/timer.component";
import { CarsAndTrucksComponent } from './cars-and-trucks/cars-and-trucks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, TimerComponent, CarsAndTrucksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mastering-rxjs';

}