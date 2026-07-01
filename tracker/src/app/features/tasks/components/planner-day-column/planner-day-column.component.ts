import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {DayWithTasks} from '../../models/task-view.model';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatListItemTitle, MatListOption, MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-planner-day-column',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatListItemTitle,
    MatListOption,
    MatSelectionList
  ],
  templateUrl: './planner-day-column.component.html',
  styleUrl: './planner-day-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerDayColumnComponent {
  readonly day = input.required<DayWithTasks>();

  onTaskClicked() {

  }
}
