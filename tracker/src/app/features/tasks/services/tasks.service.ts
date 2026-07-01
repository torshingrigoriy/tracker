import {Injectable, signal} from '@angular/core';
import {Task} from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Create design',
      description: 'Prepare first dashboard layout',
      statusId: 2,
      categoryId: 1,
      date: '2026-06-06T09:30:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Create wireframe', completed: true},
        {id: 2, title: 'Choose base colors', completed: false},
      ],
    },
    {
      id: 11,
      title: 'Create design 11',
      description: 'Prepare first dashboard layout',
      statusId: 2,
      categoryId: 1,
      date: '2026-06-06T11:00:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Create wireframe', completed: true},
        {id: 2, title: 'Choose base colors', completed: false},
      ],
    },
    {
      id: 2,
      title: 'Build app shell',
      description: 'Create header, sidebar and main content area',
      statusId: 2,
      categoryId: 2,
      date: '2026-06-07T11:00:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Create layout component', completed: true},
        {id: 2, title: 'Add navigation links', completed: false},
      ],
    },
    {
      id: 3,
      title: 'Create task card',
      description: 'Display task title, status, date and checklist progress',
      statusId: 1,
      categoryId: 2,
      date: '2026-06-08T14:15:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Create component markup', completed: false},
        {id: 2, title: 'Add basic styles', completed: false},
      ],
    },
    {
      id: 4,
      title: 'Review Angular signals',
      description: 'Practice signal, computed and update methods',
      statusId: 3,
      categoryId: 3,
      date: '2026-06-09T16:45:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Read signal basics', completed: true},
        {id: 2, title: 'Create counter example', completed: false},
      ],
    },
    {
      id: 43,
      title: 'Review AngularW ww signals',
      description: 'Practice signal, computed and update methods',
      statusId: 3,
      categoryId: 3,
      date: '2026-06-30T16:45:00',
      executorId: 1,
      checklist: [
        {id: 1, title: 'Read signal basics', completed: true},
        {id: 2, title: 'Create counter example', completed: false},
      ],
    },
  ]);
  readonly tasksList = this.tasks.asReadonly();
}
