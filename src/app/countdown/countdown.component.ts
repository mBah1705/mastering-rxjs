import { Component, inject } from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { CountdownService } from './countdown.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [AsyncPipe],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
})
export class CountdownComponent {
  private readonly countdown = 10;
  private readonly countdownService = inject(CountdownService)
  protected readonly submit$ = new Subject<void>();
  
  protected readonly countdown$ = this.submit$.pipe(
    switchMap(() => this.countdownService.count(this.countdown))
  )
}
