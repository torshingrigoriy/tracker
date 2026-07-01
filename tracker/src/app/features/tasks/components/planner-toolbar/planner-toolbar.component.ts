import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatToolbar} from '@angular/material/toolbar';
import {TaskViewMode, TaskViewModeOption} from '../../models/task-view.model';

@Component({
  selector: 'app-planner-toolbar',
  imports: [
    DatePipe,
    MatButton,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatToolbar
  ],
  templateUrl: './planner-toolbar.component.html',
  styleUrl: './planner-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerToolbarComponent {
  readonly viewDate = input.required<Date>();
  readonly selectedViewModeId = input.required<TaskViewMode>();
  readonly viewModes = input.required<TaskViewModeOption[]>();

  readonly viewModeChange = output<TaskViewMode>();
  readonly viewDateChange = output<'forward' | 'backward'>();
}
