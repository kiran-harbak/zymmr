---
title: Resource Management
description: A guide to allocating team members, visualizing workloads, and managing resource capacity in Zymmr.
head:
  - - meta
    - name: keywords
      content: resource management, allocation, capacity planning, workload, zymmr
outline: deep
---

# Resource Management

::: info Overview
The Resource Management dashboard provides a high-level, calendar-based view of your team's allocations. It allows you to see user workloads, including project assignments, absences, and non-working days, making it an essential tool for effective capacity planning and preventing team burnout.
:::

## The Resource Management Dashboard

The main dashboard is an interactive grid designed for at-a-glance visibility and quick adjustments.


### Dashboard Controls
At the top of the page, you will find several controls to navigate and customize your view:

- **Month Navigator**: Use the `<` and `>` arrows to switch between different months.
- **[Today] Button**: Instantly jump the view back to the current date.
- **Allocate Resource Button**: Opens a modal to assign a user to a project for a specific period.
- **Filters Button**: Apply filters to narrow down the view by user, project, or date.
- **View Mode Toggle**: Switch between viewing allocations as **hours** or as a **percentage** of a user's daily capacity.

## Allocating a New Resource

1.  From the dashboard, click the **Allocate Resource** button in the top right.
2.  The "Allocate New Resource" modal will appear.
3.  Fill out the form with the allocation details.
4.  Click **Add** to save the allocation.

### The Allocate New Resource Form

| Field                         | Description                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Project** `*`               | Select the project to which you are allocating the user.                                                       |
| **User** `*`                  | Select the team member you are allocating.                                                                     |
| **Start Date** `*`            | The first day of the allocation period.                                                                        |
| **End Date** `*`              | The last day of the allocation period.                                                                         |
| **Allocate Non-Working Days** | Check this box if the allocation should also apply to scheduled non-working days (e.g., weekends).             |
| **Capacity**                  | The percentage of the user's daily capacity to allocate to this project (defaults to `100%`).                  |

## Viewing and Managing Allocations

The main grid displays users as rows and days of the month as columns. Each cell shows a user's total allocation for that day.

### Editing or Deleting an Allocation
You can manage existing allocations directly from the grid:
1.  Click on any cell that shows an allocation for a user.
2.  An **"Allocation List"** modal will open, showing all the specific project allocations contributing to that day's total.
3.  In this modal, you can:
    - **Edit** an allocation by clicking the pencil icon.
    - **Delete** an allocation by clicking the trash can icon.

::: tip Best Practices
- **High-Level First**: Start by allocating resources for longer periods (e.g., entire project duration) and then refine specific weeks or months as needed.
- **Regularly Review**: Make it a weekly habit to review the resource plan to adjust for new tasks, absences, or changes in project priority.
- **Use the Percentage View**: The percentage view is excellent for quickly spotting overallocation (any value over 100%).
:::

::: warning Limitations
- **Half-Day Leaves**: Please note that half-day leaves are currently not factored into the capacity calculations on this view.
:::
