import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TimerComponent } from "./timer/timer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mastering-rxjs';

}