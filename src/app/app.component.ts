import { Component, ChangeDetectionStrategy, computed, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { EMPTY, finalize, interval, Observable, of, switchMap, takeWhile } from 'rxjs';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mastering-rxjs';
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