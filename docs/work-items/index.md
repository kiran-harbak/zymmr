---
title: Work Items in Zymmr
description: A comprehensive guide to understanding and using Work Items in Zymmr
outline: deep
head:
  - - meta
    - name: keywords
      content: work items, tasks, issues, zymmr, project management
---

# Work Items in Zymmr

## Overview

A Work Item in Zymmr represents a fundamental unit of work within the project management system. It serves as the core component for:

- Project planning and tracking
- Task management and assignment
- Progress monitoring
- Team collaboration
- Reporting and analytics

## Core Components

![Work Item Overview](/images/work-items/work-item-overview.jpeg)

### Basic Information

| #   | Component     | Description                                       | Usage                     |
| --- | ------------- | ------------------------------------------------- | ------------------------- |
| 1   | Title         | Concise description of the work                   | Identifies the work item  |
| 2   | Description   | Detailed scope and requirements                   | Explains the work needed  |
| 3   | Work Item Key | Unique identifier (e.g., <small>`AXI-3` </small>) | References the work item  |
| 4   | Project Name  | Associated project (e.g., <small>`AXIS` </small>) | Groups related work items |

### Status and Priority

| #   | Component      | Description                                                                | Examples                                                                    |
| --- | -------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 5   | Work Item Type | A categorization or classification of a work item or task within a project | <small>`Task`</small>, <small>`Bug`</small>, <small>`Story`</small>         |
| 6   | Priority       | The relative importance or urgency of a work item or task                  | <small>`High`</small>, <small>`Medium`</small>, <small>`Low`</small>        |
| 7   | Status         | The current state or progress of a work item or task                       | <small>`To Do`</small>, <small>`In Progress`</small>, <small>`Done`</small> |

### People and Assignments

| #   | Component          | Descriptions                     | Purpose           |
| --- | ------------------ | -------------------------------- | ----------------- |
| 8   | Primary Assignee   | Main person responsible          | Main responsible  |
| 9   | Secondary Assignee | Supporting team member           | Supporting member |
| 10  | Reporter           | Person who created the work item | Creator           |
| 18  | Watchers           | Team members following progress  | Followers         |

### Time Tracking

| #   | Component       | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | Story Points    | A unit of measurement used in Agile methodologies to estimate relative effort and complexity of work items. Rather than representing specific time units, story points allow teams to compare tasks based on their relative size - a 2-point story requires twice the effort of a 1-point story. Teams typically use a sequence like 1, 2, 3, 5, 8 to assign points, with larger numbers indicating proportionally more complex work. |
| 12  | Estimate Effort | The projected time needed to complete a work item, typically expressed in hours or days. This initial estimate helps with sprint planning and resource allocation. Teams can update estimates as they gain more information about the work item.                                                                                                                                                                                      |
| 13  | Logged Time     | The actual time recorded by team members for work performed on a work item, including development, testing, code review and other activities. Helps track real effort expended versus estimates. (view only)                                                                                                                                                                                                                          |
| 14  | Remaining Time  | The time still needed to complete the work item, calculated by subtracting logged time from the initial estimate. Updates automatically as time is logged to help track progress. (view only)                                                                                                                                                                                                                                         |
| 15  | Auto Estimate   | An AI-powered feature that suggests estimate effort based on historical project data. The system analyzes similar past work items, considering factors like complexity, type, and team velocity to provide data-driven initial estimates. Teams can accept or adjust these suggestions as needed.                                                                                                                                     |

### Dates and Planning

| #   | Component         | Description                                                                                                                                                                                       |
| --- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | Start Date        | The planned or actual date when work begins on an item. Used for scheduling and timeline tracking.                                                                                                |
| 17  | End Date          | The target completion date for the work item. Helps teams plan deliverables and track deadlines.                                                                                                  |
| -   | Actual Start Date | The date when work status changes from initial state (e.g., <small>`New`</small> -> <small>`In Progress`</small>) marking the real commencement of work. Helps track actual vs planned timelines. |
| -   | Completion Date   | The date when work status changes to final state (e.g., <small>`Complete`</small> or <small>`Done`</small>), indicating all required work has been finished. Used for actual delivery tracking.   |

::: tip 📅 Timeline Tracking

- **Start Date** and **End Date** are used for planning purposes
- **Actual Start Date** and **Completion Date** reflect real work progress
- The difference between planned and actual dates helps in future estimations
  :::

### Organization and Structure

| #   | Component        | Description                                                                                                                       |
| --- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 19  | Tags             | Custom labels that help categorize and filter work items. Useful for grouping related items across different projects or modules. |
| 20  | Parent WorkItem  | Establishes hierarchical relationships between work items. Helps organize complex features into manageable sub-tasks.             |
| 21  | Affects Versions | Indicates which versions or releases of a product are impacted by a specific issue, bug, feature request, or task.                |
| 22  | Fix Version      | Specifies in which version or release an issue has been or will be resolved. Helps track when specific issues will be addressed.  |
| 23  | Modules          | Logical groupings of work items within a project. Helps organize work by functional area or component.                            |
| 24  | Milestones       | Significant checkpoints or deliverables in the project timeline. Used to track major achievements and progress.                   |

### Collaboration Tools

| #   | Component     | Description                                                                                                             |
| --- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 25  | Comments      | Threaded discussions about the work item. Enables team communication and decision documentation.                        |
| 26  | Attachments   | Files, images, and documents related to the work item. Provides additional context and documentation.                   |
| 27  | Related Tasks | Links between work items showing dependencies or relationships. Helps track connected pieces of work.                   |
| 28  | Activity Log  | Chronological record of all changes and updates to the work item. Maintains complete history for auditing and tracking. |

### Version Control

| #   | Component             | Description                                                                                                                                                              |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 29  | Time Log              | Detailed record of time spent on work items. Tracks actual effort for reporting and future estimation.                                                                   |
| 30  | Sprint                | The time-boxed iteration period (usually 1-4 weeks) during which the team works to complete this work item. Shows sprint details like name, dates and progress tracking. |
| 31  | Dev Tab               | Integration with development tools showing code changes, commits, and pull requests related to the work item.                                                            |
| 32  | Bitbucket Integration | Direct connection to source code management, enabling seamless tracking of code changes and development progress.                                                        |

---

::: info 📚 **Additional Resources**

For a detailed visual guide to Work Items, visit our [comprehensive Work Item documentation](https://sushant-india.notion.site/Understanding-WorkItem-in-Zymmr-4374f2b63fe74b19a2e7f7025ddc6768) on Notion.

:::

::: tip 💡 **Best Practices**

- Use clear, descriptive titles
- Keep descriptions updated
- Link related items
- Track time regularly
- Update status promptly
  :::

::: warning ⚠️ **Important Notes**

- Work item keys are permanent
- Some fields are mandatory
- History is automatically tracked
- Permissions may limit access
  :::

## Related Guides

- [Create Work Item](./create.md)
- [Update Work Item](./update.md)
- [Search Work Items](./search.md)
- [Delete Work Item](./delete.md)
- [Export Work Items](./export.md)
