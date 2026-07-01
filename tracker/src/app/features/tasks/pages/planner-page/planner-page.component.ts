import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatListItemTitle, MatListOption, MatSelectionList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {TasksService} from '../../services/tasks.service';
import {TaskCalendarService} from '../../services/task-calendar.service';
import {TaskViewMode, TaskViewModeOption} from '../../models/task-view.model';
import {addDays, subDays} from 'date-fns';

@Component({
  selector: 'app-planner-page',
  imports: [
    DatePipe,
    MatButton,
    MatButtonToggleModule,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatListItemTitle,
    MatListOption,
    MatSelectionList,
    MatToolbar
  ],
  templateUrl: './planner-page.component.html',
  styleUrl: './planner-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerPageComponent {
  private readonly tasksService = inject(TasksService);
  private readonly taskCalendarService = inject(TaskCalendarService);

  protected readonly rawTasks = this.tasksService.tasksList;

  protected readonly viewDate = signal<Date>(new Date());

  protected readonly viewModes: TaskViewModeOption[] = [
    {id: 'day', label: 'Day', daysCount: 1},
    {id: 'three-days', label: '3 days', daysCount: 3},
    {id: 'week', label: 'Week', daysCount: 7},
    {id: 'month', label: 'Month', daysCount: null}
  ];

  protected selectedViewModeId = signal<TaskViewMode>(this.viewModes[0].id);

  protected tasksByDay = computed(() => this.taskCalendarService.groupTasksByDay(this.rawTasks()));

  protected tasksForView = computed(() => {
    const dateKeys = this.taskCalendarService.getViewDateKeys(this.viewDate(), this.selectedViewModeId());
    return this.taskCalendarService.buildTasksForView(dateKeys, this.tasksByDay());
  });

  protected onViewModeChange(mode: TaskViewMode) {
    this.selectedViewModeId.set(mode);
  }

  protected changeDate(direction: 'backward' | 'forward') {
    this.viewDate.update((date) => {
      return direction === 'forward'
        ? addDays(date, 1)
        : subDays(date, 1);
    });
  }

  test() {

  }
}
