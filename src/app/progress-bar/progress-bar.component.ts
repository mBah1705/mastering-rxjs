import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { LoadingService } from './loading.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-progress-bar',
  styleUrl: './progress-bar.component.css',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  private readonly loadingService = inject(LoadingService);
  private readonly destroyRef = inject(DestroyRef);

  readonly inProgress = signal(false);
  protected readonly progress = signal<string | number>(0);
  protected readonly done = computed(() => typeof this.progress() === 'string' ? this.progress() : '');
  onButtonClick() {
    this.inProgress.set(true);
    this.progress.set(0);
    this.loadingService.load().pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: (value) => {
        this.progress.set(value);
    },
      error: (error) => {
        console.error('Error occurred:', error);
        this.progress.set(0);
        this.inProgress.set(false);
      },
      complete: () => {
        this.inProgress.set(false);
      },
    });
  }
}
