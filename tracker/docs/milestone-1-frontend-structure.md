# Milestone 1: Frontend Structure Refactor

## Goal

Move the current Angular prototype from a single large `App` component into a maintainable feature structure while preserving existing behavior.

This milestone is intentionally about structure, not new product features.

## Current Problem

`app.ts` currently owns too many responsibilities:

- task models
- demo task data
- selected planner view state
- current date state
- task grouping logic
- view date generation logic
- task view building logic
- UI event handlers

This was acceptable for exploration. It should now be split before adding Inbox, task creation, backend integration, or month view complexity.

## Target Structure

```text
src/app/
  app.ts
  app.html
  app.scss
  features/
    tasks/
      models/
        task.model.ts
        task-view.model.ts
      services/
        tasks.service.ts
        task-calendar.service.ts
      pages/
        planner-page/
          planner-page.ts
          planner-page.html
          planner-page.scss
      components/
        planner-toolbar/
          planner-toolbar.ts
          planner-toolbar.html
          planner-toolbar.scss
        task-day-column/
          task-day-column.ts
          task-day-column.html
          task-day-column.scss
```

## Rules For This Milestone

- Do not add task creation yet.
- Do not add Inbox yet.
- Do not redesign the UI deeply.
- Do not add backend code.
- Preserve existing behavior.
- Keep signals for state.
- Use `computed` for derived data.
- Avoid `any`.
- Prefer small commits/tasks.

## Task 1: Move Models

Move interfaces and types out of `app.ts`.

Create:

```text
src/app/features/tasks/models/task.model.ts
src/app/features/tasks/models/task-view.model.ts
```

Move to `task.model.ts`:

- `Task`
- `ChecklistItem`
- `Status`

Move to `task-view.model.ts`:

- `TaskViewMode`
- `TaskViewModeOption`
- `DayWithTasks`

Update imports in `app.ts`.

Acceptance criteria:

- App still compiles.
- No model/type declarations remain in `app.ts`.
- Existing UI behavior does not change.

## Task 2: Create TasksService

Create:

```text
src/app/features/tasks/services/tasks.service.ts
```

Move demo task data from `app.ts` into the service.

Initial service responsibility:

- own task signal
- expose readonly task signal

Suggested shape:

```ts
private readonly tasks = signal<Task[]>([...]);
readonly tasksList = this.tasks.asReadonly();
```

Update `App` or future `PlannerPage` to read tasks from the service.

Acceptance criteria:

- Demo tasks are no longer declared in `app.ts`.
- Task data is read from `TasksService`.
- UI still renders the same task columns.

## Task 3: Create TaskCalendarService

Create:

```text
src/app/features/tasks/services/task-calendar.service.ts
```

Move pure calendar/view logic out of `app.ts`:

- grouping tasks by day
- generating date keys for current view
- building `DayWithTasks[]`

Service should not own UI state.

Good service methods:

```ts
groupTasksByDay(tasks: Task[]): Record<string, Task[]>
getViewDateKeys(date: Date, mode: TaskViewMode): string[]
buildTasksForView(dateKeys: string[], tasksByDay: Record<string, Task[]>): DayWithTasks[]
```

Acceptance criteria:

- `app.ts` no longer contains reduce/grouping calendar logic.
- Calendar service methods are typed.
- No `any`.
- UI behavior stays the same.

## Task 4: Create PlannerPageComponent

Create:

```text
src/app/features/tasks/pages/planner-page/
```

Move planner state and planner template from `App` to `PlannerPageComponent`:

- `viewDate`
- `selectedViewModeId`
- `viewModes`
- `tasksByDay`
- `tasksForView`
- `changeDate`
- `onViewModeChange`

Keep `App` as a shell that renders the planner page.

Acceptance criteria:

- `App` is small.
- Planner behavior lives in `PlannerPageComponent`.
- Existing page still renders.

## Task 5: Create PlannerToolbarComponent

Create:

```text
src/app/features/tasks/components/planner-toolbar/
```

Move toolbar UI into this component:

- date display
- previous/next buttons
- view mode toggle

Use `input()` and `output()`.

Inputs:

- `viewDate`
- `viewModes`
- `selectedViewMode`

Outputs:

- date direction change
- view mode change

Acceptance criteria:

- Toolbar component has no task data logic.
- Parent owns state.
- Toolbar only displays and emits user actions.

## Task 6: Create TaskDayColumnComponent

Create:

```text
src/app/features/tasks/components/task-day-column/
```

Move each day card into this component.

Input:

- `day: DayWithTasks`

Acceptance criteria:

- Planner page loops over `tasksForView()`.
- Each day is rendered by `TaskDayColumnComponent`.
- Component is presentational.

## Done Criteria For Milestone 1

Milestone is complete when:

- `app.ts` is small and shell-like.
- Task models are in model files.
- Task state is in `TasksService`.
- Calendar transformation logic is in `TaskCalendarService`.
- Planner page owns planner state.
- Toolbar and day columns are separate components.
- Current functionality still works.
- `npm run build` passes.

## Suggested Commit Strategy

Use one commit per task:

```text
refactor(tasks): move task models
refactor(tasks): add tasks service
refactor(tasks): add calendar service
refactor(tasks): create planner page
refactor(tasks): extract planner toolbar
refactor(tasks): extract task day column
```

