# Tracker Architecture

## Current Direction

Tracker should be built as a full-stack TypeScript-first product with Angular as the main learning focus.

Recommended stack:

- Angular 20+
- Angular Material
- Angular signals
- Reactive Forms
- date-fns
- NestJS
- PostgreSQL
- Prisma
- GitHub Actions
- PWA/IndexedDB later

## Frontend Architecture

Use standalone Angular components.

Suggested structure:

```text
src/app/
  core/
    layout/
    auth/
  shared/
    ui/
    utils/
  features/
    tasks/
      models/
      services/
      pages/
      components/
```

Initial task feature structure:

```text
features/tasks/
  models/
    task.model.ts
    task-view.model.ts
    focus-session.model.ts
    category.model.ts
  services/
    tasks.service.ts
    task-calendar.service.ts
  pages/
    inbox-page/
    planner-page/
  components/
    tasks-toolbar/
    tasks-day-column/
    task-card/
    task-details-dialog/
    quick-task-input/
```

## Signal State Rules

Use signals for local and feature state.

Source state examples:

```text
tasks
viewDate
selectedViewMode
filters
selectedTaskIds
```

Derived state examples:

```text
tasksByDay
tasksForCurrentView
visibleInboxTasks
totalFocusTime
```

Rules:

- Event handlers should mostly call `set` or `update`.
- Derived values should use `computed`.
- Avoid manually syncing derived state with imperative calls.
- Avoid `any`.
- Keep transformation functions pure when practical.

Good flow:

```text
user event -> update signal -> computed recalculates -> template updates
```

Avoid:

```text
user event -> update signal -> manually call several functions -> manually set derived arrays
```

## Services

### TasksService

Responsibility:

- Own task state.
- Provide readonly task signal.
- Create tasks.
- Update tasks.
- Delete tasks.
- Later sync with backend.

Early frontend-only shape:

```ts
private readonly tasks = signal<Task[]>([]);
readonly tasksList = this.tasks.asReadonly();
```

### TaskCalendarService

Responsibility:

- Group tasks by day.
- Generate date keys for view modes.
- Build day columns.
- Build month grid later.

This service should not own application state. It should mostly expose pure methods.

Example responsibilities:

```text
groupTasksByDay(tasks)
getViewDateKeys(date, mode)
buildTasksForView(dateKeys, tasksByDay)
buildMonthGrid(date, tasksByDay)
```

## Initial Domain Models

These are draft models, not final database schemas.

### Task

```ts
interface Task {
  id: string;
  workspaceId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  scheduledDate: string | null;
  scheduledTime: string | null;
  estimateMinutes: number | null;
  categoryId: string | null;
  createdAt: string;
  updatedAt: string;
}
```

### TaskPriority

```ts
type TaskPriority = 'unnecessary' | 'low' | 'medium' | 'high' | 'critical';
```

The name `unnecessary` should be revisited before implementation.

### Category

```ts
interface Category {
  id: string;
  workspaceId: string;
  name: string;
  icon: string;
  color: string;
}
```

### FocusSession

```ts
interface FocusSession {
  id: string;
  taskId: string;
  startedAt: string;
  endedAt: string | null;
  durationSeconds: number;
  mode: 'stopwatch' | 'pomodoro';
}
```

### Workspace

```ts
interface Workspace {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string;
}
```

## Backend Architecture

Recommended backend:

- NestJS application.
- PostgreSQL database.
- Prisma ORM.

Why:

- NestJS keeps TypeScript across the stack.
- NestJS architecture feels familiar to Angular developers.
- PostgreSQL fits relational data like users, workspaces, tasks, categories, focus sessions, and future assignees.
- Prisma gives typed database access and migrations.

Initial backend modules:

```text
auth
users
workspaces
tasks
categories
focus-sessions
```

## Database Direction

Use PostgreSQL.

Initial entities:

- users
- workspaces
- workspace_members
- tasks
- categories
- focus_sessions

Later:

- attachments
- comments
- recurring_rules
- sync_events
- task_activity_log

## Offline Direction

Offline support should be introduced after the core app and backend are working.

Layers:

1. PWA/service worker so the app shell can open offline.
2. IndexedDB for local task data.
3. Local change queue.
4. Sync process when online.
5. Conflict strategy.

Initial conflict strategy can be simple:

- last write wins
- preserve local changes where possible
- show conflict UI only later

Do not start with full offline-first architecture in MVP. Keep data model compatible with it.

## Security Direction

Minimum security topics:

- Password hashing on backend.
- Secure auth token/session handling.
- Input validation.
- API authorization by workspace membership.
- Rate limiting for auth endpoints.
- CORS configuration.
- Environment variables.
- No secrets committed to Git.

## Testing Direction

Frontend:

- Unit tests for pure calendar transformation logic.
- Component tests for key UI components.
- Form validation tests for task details.

Backend:

- Unit tests for services.
- Integration tests for important API endpoints later.

Testing should start small. First target:

- `TaskCalendarService`
- `TasksService`

## Deployment Direction

Start simple.

Possible early setup:

- Frontend: static hosting.
- Backend: managed app host.
- Database: managed PostgreSQL.
- CI/CD: GitHub Actions.

Docker can be added when it helps local consistency or deployment.

Avoid spending too much early time on infrastructure before the MVP workflows exist.

