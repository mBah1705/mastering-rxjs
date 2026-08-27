import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, finalize, interval, Observable, of, switchMap, takeWhile } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-timer',
  styleUrl: './timer.component.css',
  templateUrl: './timer.component.html',
})
export class TimerComponent {
  private readonly destroyRef = inject(DestroyRef);

  remainingTime = signal(10);
  timerStarted = signal(false);

  interval$: Observable<number> | null = null;
  running = signal(true)

  pauseResumeText = computed(() => this.running() ? 'Pause' : 'Resume');
  
  startTimer() {
    this.remainingTime.set(10);
    if (this.timerStarted()) {
      return;
    }
    this.timerStarted.set(true);

    this.interval$ = interval(1000).pipe(
      finalize(() => {
        this.timerStarted.set(false);
      }),
      takeUntilDestroyed(this.destroyRef),
      takeWhile(() => this.remainingTime() > 0),
      switchMap(value => this.running() ? of(value) : EMPTY),
    )

    this.interval$.subscribe(() => {
      this.remainingTime.set(this.remainingTime() - 1);
    });
  }
  
  pauseResumeTimer() {
    this.running.set(!this.running());
  }
}
