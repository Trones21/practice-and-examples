import { TestBed } from '@angular/core/testing';

import { ChecklistService } from './checklist.service';

describe('ChecklistServiceService', () => {
  let service: ChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
