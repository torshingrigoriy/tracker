import { TestBed } from '@angular/core/testing';

import { TaskCalendarService } from './task-calendar.service';

describe('TaskCalendarService', () => {
  let service: TaskCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
