import {Task} from './task.model';

export type TaskViewMode = 'day' | 'week' | 'month' | 'three-days';

export interface TaskViewModeOption {
  id: TaskViewMode;
  label: string;
  daysCount: number | null;
}

export interface DayWithTasks {
  dayTitle: string,
  tasks: Task[]
}
