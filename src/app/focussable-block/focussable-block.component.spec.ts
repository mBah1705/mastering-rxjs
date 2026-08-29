import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocussableBlockComponent } from './focussable-block.component';

describe('FocussableBlockComponent', () => {
  let component: FocussableBlockComponent;
  let fixture: ComponentFixture<FocussableBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocussableBlockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FocussableBlockComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
