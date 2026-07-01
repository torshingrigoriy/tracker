# Tracker Product Brief

## Purpose

Tracker is a personal task planning web app focused on quick task capture, later clarification, and comfortable calendar-based planning.

The main goal of the project is to build a finished, usable product while rebuilding strong practical Angular skills and learning the full product development flow: frontend, backend, database, hosting, security basics, testing, CI/CD, and offline-capable application design.

## Target Users

Primary user:

- The developer building the app, using it as a real personal planning tool.

Secondary users:

- People who want a lighter alternative to overloaded calendar/task apps.
- People who need to quickly unload thoughts into tasks and organize them later.

The product is not intended to compete directly with TickTick, Todoist, Jira, or Google Calendar. It should be useful, polished, and portfolio-grade, but intentionally scoped.

## Core Product Idea

Tracker combines:

- fast inbox capture
- later task refinement
- batch planning
- calendar-style task overview
- focus time tracking
- eventual offline usage and synchronization

The key workflow:

1. User quickly creates raw tasks in the Inbox.
2. Tasks may initially have no date, time, category, estimate, or details.
3. User later selects one or many tasks and assigns date, category, workspace context, priority, or other details.
4. User reviews planned tasks in day, 3-day, week, or month views.
5. User can track focus time on a task with a stopwatch or Pomodoro-like timer.

## Differentiator

The product should make "brain dump first, organize later" feel natural.

Important differentiators:

- Inbox tasks can stay unscheduled without becoming overdue noise.
- Tasks can be planned individually or in batches.
- Calendar views are simpler and less overloaded than Google Calendar.
- Planning modes support different mental models: today, next 3 days, week, month.
- Offline-first direction: the app should eventually remain usable without connection and sync when online again.

## MVP Scope

The MVP should be finished, small, and usable.

Included:

- One personal workspace.
- Inbox page.
- Quick task input: type title, press Enter, create task.
- Task list in inbox.
- Task details modal or page.
- Task can have no scheduled date.
- Task can have scheduled date without time.
- Task can have scheduled date with time.
- Basic priority.
- Basic status.
- Estimate in minutes.
- Planner page.
- Day, 3-day, and week views.
- First simple month view.
- Basic focus timer for a task.
- Frontend state first, then backend persistence.
- Basic tests for important logic/components.

Not included in first MVP:

- Team collaboration.
- Real assignees.
- Attachments.
- Recurring tasks.
- Complex permissions.
- Full offline sync conflict resolution.
- Advanced notifications.
- Polished analytics dashboard.

## Version 1.0 Direction

Version 1.0 should add:

- User accounts.
- Workspaces with members.
- Task assignees.
- Categories with icon and color.
- Backend persistence.
- Deployment.
- Basic offline support.
- Sync from multiple devices.
- CI/CD.
- More complete tests.

## Later Features

Potential future features:

- Recurring tasks.
- Attachments.
- Advanced filters.
- Search.
- Batch editing.
- Pomodoro mode settings.
- Dashboard/statistics.
- Notifications.
- Activity log.
- Import/export.
- Comments.
- Mobile-specific UX polish.

## Task Concepts

A task may have:

- title
- description
- scheduled date
- optional scheduled time
- priority
- status
- estimate
- focus sessions
- category
- workspace
- assignee later
- attachments later
- checklist/subtasks later

Important rule:

- A task without a date is valid and belongs to Inbox/unscheduled flow.

## Priority Draft

Initial priority options:

- unnecessary
- low
- medium
- high
- critical

These names are not final. Before implementation, decide whether `unnecessary` should mean "optional", "someday", "backlog", or be removed.

## Category Draft

A category may have:

- name
- icon
- color

Categories are not the same as workspaces. Workspaces represent personal/team context. Categories are lightweight task grouping/labeling.

## Design Direction

The design should be calm, comfortable, and productive.

Avoid:

- overloaded dashboards
- marketing-style hero layouts
- too much decorative UI
- heavy calendar clutter

Prefer:

- clear task scanning
- fast keyboard-oriented input
- compact controls
- readable task columns
- responsive layout
- mobile-friendly PWA direction

Design can be explored later in Figma, possibly with AI-assisted mockups. The app should still evolve from practical workflows rather than decoration-first design.

## Success Criteria

The project is successful if:

- The app reaches a finished MVP instead of remaining an endless prototype.
- The developer can actually use it for personal planning.
- The codebase demonstrates modern Angular practices.
- The project has frontend, backend, database, deployment, and some tests.
- The project can be shown in a portfolio with a clear product story.

