import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-cinema-seats',
  styleUrl: './cinema-seats.component.css',
  templateUrl: './cinema-seats.component.html',
})
export class CinemaSeatsComponent {
  protected readonly seats = Array.from({ length: 10 }, (_, index) => index + 1);
  protected readonly selectedSeats = signal<number[]>([]);

  protected readonly isBuying = signal(false);

  protected toggleSeatSelection(seat: number) {
    const currentSelectedSeats = this.selectedSeats();
    if (currentSelectedSeats.includes(seat)) {
      this.selectedSeats.set(currentSelectedSeats.filter(s => s !== seat));
    } else {
      this.selectedSeats.set([...currentSelectedSeats, seat].sort());
    }
  }

}
