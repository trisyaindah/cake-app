import { TestBed } from '@angular/core/testing';

import { Cake } from './cake';

describe('Cake', () => {
  let service: Cake;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cake);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
