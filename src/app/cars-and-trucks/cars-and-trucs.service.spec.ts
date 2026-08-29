import { TestBed } from '@angular/core/testing';
import { CarsAndTrucsService } from './cars-and-trucs.service';

describe('CarsAndTrucsService', () => {
  let service: CarsAndTrucsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsAndTrucsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
