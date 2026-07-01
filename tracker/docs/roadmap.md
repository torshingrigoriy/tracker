# Tracker Roadmap

## Development Principles

- Build a finished product, not an endless experiment.
- Keep each milestone small enough to complete.
- Prefer working vertical slices over large unfinished architecture.
- Use Angular best practices, but do not over-engineer before a real need appears.
- Every milestone should leave the app in a runnable state.
- Treat tests as part of learning, not as an afterthought.

## Milestone 0: Product And Architecture Setup

Goal: define enough direction to avoid drifting.

Tasks:

- Create product brief.
- Create roadmap.
- Create initial architecture document.
- Define MVP boundaries.
- Decide initial frontend folder structure.
- Decide first data models.

Done when:

- Product direction is documented.
- MVP/non-MVP boundaries are clear.
- Next implementation tasks are small and concrete.

## Milestone 1: Frontend Structure Refactor

Goal: turn current prototype into a maintainable Angular feature structure.

Tasks:

- Move task-related types into model files.
- Create `TasksService` for task state and future CRUD operations.
- Create `TaskCalendarService` for date/view transformation logic.
- Create `TasksPageComponent`.
- Create `TasksToolbarComponent`.
- Create `TasksDayColumnComponent`.
- Keep `App` as a shell.
- Preserve current behavior while refactoring.

Done when:

- App still renders current task views.
- `app.ts` no longer contains task demo data or calendar transformation logic.
- Signals are still used for state and `computed` for derived state.

## Milestone 2: Inbox MVP

Goal: implement the core brain-dump workflow.

Tasks:

- Add route/page for Inbox.
- Add quick task input.
- Create task on Enter.
- Show inbox task list.
- Allow tasks without scheduled date.
- Add toggle to hide/show scheduled tasks.
- Add basic empty state.
- Move creation logic into `TasksService`.

Done when:

- User can quickly create multiple unscheduled tasks.
- Tasks appear immediately in Inbox.
- Existing Planner can still display scheduled tasks.

## Milestone 3: Task Details

Goal: allow editing a task beyond quick title creation.

Tasks:

- Define task detail fields for MVP.
- Create task details modal or route.
- Add Reactive Form.
- Edit title.
- Edit description.
- Edit scheduled date.
- Edit optional scheduled time.
- Edit priority.
- Edit estimate minutes.
- Save changes through `TasksService`.

Done when:

- User can create a rough task and later refine it.
- Task details are reflected in Planner.

## Milestone 4: Planner MVP

Goal: make the planning view useful.

Tasks:

- Improve day view.
- Improve 3-day view.
- Improve week view.
- Add better task card UI.
- Show time when task has time.
- Show priority.
- Show estimate.
- Add create task for specific day.
- Add basic filters placeholder or simple filter by priority/status.

Done when:

- User can plan and review tasks comfortably across day/3-day/week.

## Milestone 5: Month View

Goal: create a real calendar-like month layout.

Tasks:

- Define month view model.
- Generate month grid including leading/trailing empty days.
- Render 7-column calendar.
- Show task summaries per day.
- Handle overflow in day cells.
- Navigate between months.
- Keep day/3-day/week behavior separate from month-specific layout.

Done when:

- Month view looks and behaves like a basic calendar overview.

## Milestone 6: Focus Tracking MVP

Goal: add simple focus tracking to tasks.

Tasks:

- Define `FocusSession` model.
- Add start/stop focus timer for a task.
- Store focus sessions in frontend state.
- Show total focused time per task.
- Add simple focus UI.
- Decide later whether Pomodoro is separate mode.

Done when:

- User can track time spent on a task.
- The tracked time persists during the current frontend session.

## Milestone 7: Backend MVP

Goal: add real persistence and authentication foundation.

Proposed stack:

- NestJS
- PostgreSQL
- Prisma

Tasks:

- Create backend app.
- Configure PostgreSQL.
- Add Prisma schema.
- Add users table/model.
- Add tasks table/model.
- Add workspaces table/model.
- Add categories table/model.
- Add focus sessions table/model.
- Implement basic auth.
- Implement task CRUD API.
- Connect frontend to API.

Done when:

- User can log in.
- Tasks persist in PostgreSQL.
- Frontend uses backend instead of hardcoded task data.

## Milestone 8: Deployment And CI/CD

Goal: make it accessible and portfolio-ready.

Tasks:

- Add GitHub Actions build/test workflow.
- Add production frontend build.
- Add backend build.
- Add Dockerfile(s) if useful.
- Choose hosting.
- Deploy frontend.
- Deploy backend.
- Deploy database.
- Configure environment variables.

Done when:

- App is available from a public URL.
- Changes can be built/tested automatically.

## Milestone 9: Offline Exploration

Goal: learn and implement minimal offline capability.

Tasks:

- Add PWA install support.
- Cache app shell.
- Store tasks locally in IndexedDB.
- Detect online/offline state.
- Queue local changes while offline.
- Sync simple changes when online.
- Document limitations and conflict strategy.

Done when:

- App can open offline.
- User can view cached tasks offline.
- User can make simple local changes and sync later.

## Milestone 10: Version 1.0 Collaboration

Goal: add shared workspace basics.

Tasks:

- Workspace members.
- Invitations.
- Assignees.
- Basic permissions.
- Workspace task filtering.

Done when:

- A workspace can have multiple users and tasks can be assigned.

