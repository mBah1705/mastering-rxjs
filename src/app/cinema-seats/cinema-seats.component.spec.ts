import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemaSeatsComponent } from './cinema-seats.component';

describe('CinemaSeatsComponent', () => {
  let component: CinemaSeatsComponent;
  let fixture: ComponentFixture<CinemaSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaSeatsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CinemaSeatsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
