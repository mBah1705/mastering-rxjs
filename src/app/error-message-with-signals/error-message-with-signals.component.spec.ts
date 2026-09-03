import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageWithSignalsComponent } from './error-message-with-signals.component';

describe('ErrorMessageWithSignalsComponent', () => {
  let component: ErrorMessageWithSignalsComponent;
  let fixture: ComponentFixture<ErrorMessageWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageWithSignalsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageWithSignalsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
