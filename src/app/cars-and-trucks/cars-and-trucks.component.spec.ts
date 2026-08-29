import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsAndTrucksComponent } from './cars-and-trucks.component';

describe('CarsAndTrucksComponent', () => {
  let component: CarsAndTrucksComponent;
  let fixture: ComponentFixture<CarsAndTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsAndTrucksComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarsAndTrucksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
