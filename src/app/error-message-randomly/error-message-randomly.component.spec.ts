import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageRandomlyComponent } from './error-message-randomly.component';

describe('ErrorMessageRandomlyComponent', () => {
  let component: ErrorMessageRandomlyComponent;
  let fixture: ComponentFixture<ErrorMessageRandomlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageRandomlyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageRandomlyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
