---
title: Task Ordering and Lexorank
description: Learn how Zymmr uses the Lexorank algorithm to maintain a consistent and reliable order for backlog tasks.
head:
  - - meta
    - name: keywords
      content: lexorank, backlog order, task priority, ranking, zymmr
outline: deep
---

# Ordering Backlog Tasks and Lexorank

::: info Overview
In Zymmr, you can organize and prioritize backlog tasks by simply moving them up or down. To ensure the order you set remains persistent and reliable, Zymmr employs the **Lexorank** algorithm, a powerful system that maintains task order consistently, even as new items are added or reordered.
:::

## Ordering Backlog Tasks

The user action for ordering tasks is simple and intuitive:
-   In the **Project Backlog** view, click and hold a work item.
-   **Drag** it up or down to its new position in the list.
-   **Drop** it to set the new priority order.

This visual ordering allows project managers to ensure the most important work is always at the top of the backlog.

## How Lexorank Works

Lexorank is the underlying technology that manages the ranking of your tasks behind the scenes.

-   **Lexorank Basics**: It uses a string-based ranking system. Each task is assigned a unique rank (e.g., "0|habcde..."). These ranks are ordered lexicographically, like words in a dictionary, to determine their position.

-   **Maintaining Order**: When you move a task, Lexorank doesn't re-rank the entire list. Instead, it cleverly calculates a new rank for the moved item that falls precisely between its new neighbors. This ensures there is always space to accommodate changes.

-   **Efficient Adjustments**: The algorithm is designed to be highly efficient, minimizing the number of rank changes required. This ensures the system remains fast and responsive, even with very large backlogs.

-   **Guaranteed Consistency**: Lexorank guarantees that the visual order you create is preserved at all times. This consistency allows teams to trust the backlog as the single source of truth for task priority.

## Example Use Case

### Scenario
You are managing a project backlog with tasks of varying priorities. You need to ensure high-priority tasks are at the top and that this order remains stable as new tasks are added and priorities shift.

### Steps
1.  **Order Tasks**: You drag and drop several tasks to arrange them by priority, placing the most critical items at the top.
2.  **Lexorank Works**: Behind the scenes, Lexorank assigns new string-based ranks to these items to reflect their new positions.
3.  **Add a New Task**: A new, urgent task is created. You drag it directly to the top of the backlog. Lexorank calculates a new rank for this item that is "smaller" than the previous top item, placing it first without disrupting the relative order of the other tasks.
4.  **Reorder Again**: A medium-priority task is moved up two positions. Lexorank updates the ranks of only the affected tasks, efficiently preserving the overall order you've established.

::: tip Focus on What Matters
With Lexorank, you can trust that the order you set is the order your team will see. This eliminates confusion and ensures everyone is focused on the correct priorities, making your backlog management more reliable and efficient.
:::