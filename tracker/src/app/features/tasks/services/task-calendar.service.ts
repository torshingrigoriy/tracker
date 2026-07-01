import {Injectable} from '@angular/core';
import {DayWithTasks, TaskViewMode} from '../models/task-view.model';
import {addDays, format, getDaysInMonth, parseISO, startOfMonth} from 'date-fns';
import {Task} from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskCalendarService {
  public groupTasksByDay = (tasks: Task[]) => {
    return tasks.reduce<Record<string, Task[]>>((result, task) => {
      const date = format(parseISO(task.date), 'yyyy-MM-dd');
      result[date] ??= [];
      result[date].push(task);
      return result;
    }, {});
  }

  public buildTasksForView(
    emptyView: string[],
    tasksByDay: Record<string, Task[]>,
  ): DayWithTasks[] {
    return emptyView.reduce<DayWithTasks[]>((acc, date) => {
      const dayWithTasks = {
        dayTitle: date,
        tasks: tasksByDay[date] || [],
      };

      acc.push(dayWithTasks);
      return acc;
    }, []);
  }

  public getViewDateKeys(date: Date, mode: TaskViewMode): string[] {
    const justDates: string[] = [];

    switch (mode) {
      case 'week':
        for (let i = 0; i < 7; i++) {
          justDates.push(format(addDays(date, i), 'yyyy-MM-dd'));
        }
        break;
      case 'day':
        for (let i = 0; i < 1; i++) {
          justDates.push(format(addDays(date, i), 'yyyy-MM-dd'));
        }
        break;
      case 'three-days':
        for (let i = 0; i < 3; i++) {
          justDates.push(format(addDays(date, i), 'yyyy-MM-dd'));
        }
        break;
      case 'month':
        const startDayOfMonth = startOfMonth(date);
        const daysInMonth = getDaysInMonth(date);
        for (let i = 0; i < daysInMonth; i++) {
          justDates.push(format(addDays(startDayOfMonth, i), 'yyyy-MM-dd'));
        }
        break;
    }
    return justDates;
  }
}
