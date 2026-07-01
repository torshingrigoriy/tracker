import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerDayColumnComponent } from './planner-day-column.component';

describe('PlannerDayColumnComponent', () => {
  let component: PlannerDayColumnComponent;
  let fixture: ComponentFixture<PlannerDayColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerDayColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerDayColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
