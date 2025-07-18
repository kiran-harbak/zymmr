---
title: Setup Workflows
description: A comprehensive guide for administrators on creating and managing custom workflows to define the lifecycle of your work items.
head:
  - - meta
    - name: keywords
      content: workflow, process management, states, transitions, automation, administration, zymmr
outline: deep
---

# Setup Workflows

::: info Overview
The Workflows feature, located in **Global Settings** ⚙️, is the heart of your process management in Zymmr. A workflow defines the specific set of steps, or **states**, that a work item can move through from creation to completion. By creating custom workflows, you can enforce consistent processes and ensure every task, bug, or story follows a predefined path.
:::

## 1. Understanding the Core Concepts

Before building a workflow, it's important to understand its three main components:

| Concept       | Description                                                                                         |
| :------------ | :-------------------------------------------------------------------------------------------------- |
| **States**    | The distinct stages in a work item's lifecycle (e.g., `Open`, `In Progress`, `QA`, `Done`).          |
| **Transitions**| The allowable paths between two states. A transition represents a user's action to move a work item. |
| **Actions**   | The specific operation or "button" a user clicks to trigger a transition (e.g., "Start Progress").    |

The fundamental structure of a workflow is a series of **State** → **Action** → **Next State** definitions.

## 2. The Main Workflows Dashboard

This screen provides a list of all the workflows available in your Zymmr instance. From here, you can:
-   See a list of all custom and system workflows.
-   Identify **System Workflows** via the `System` tag. These are built-in defaults that may have limited modification options.
-   Click **+ Add Workflow** to create a new workflow from scratch.
-   Click on any workflow title to view and edit its details.
-   Use the **Delete** (trash can) icon to remove a custom workflow.

## 3. How to Create a New Workflow

1.  Click the **+ Add Workflow** button from the main dashboard.
2.  On the "Add New Workflow" screen, first enter a clear and descriptive **Workflow Title**.
3.  Next, build the workflow's structure:
    -   **Add States**: Begin by clicking the **Add State** button at the bottom of the screen to define all the stages your workflow will need.
    -   **Add Transitions**: For each state, click **Add Row** to define a path. In the new row, select the **Start State**, the **Transition Action**, and the **Next State**.
4.  Continue adding states and transition rows until all desired paths are defined.
5.  Click **Save** to create the workflow.

## 4. How to Configure an Existing Workflow

Clicking on a workflow from the dashboard takes you to its details screen, where you can customize its behavior.

### Understanding the Details View

| Column                       | Description                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| **STATE**                    | The starting state for a group of transitions.                                               |
| **TRANSITIONS (ACTION + NEXT STATE)** | Shows the available actions from the starting state and the resulting state for each. |
| **IS START**                 | A checkbox to designate the default starting state for any new work item. A workflow must have *exactly one* start state. |
| **IS DONE**                  | A checkbox to mark one or more states as "completion" states (e.g., `Done`, `Closed`). This is important for reporting. |
| **ACTIONS**                  | Icons to manage states and transitions.                                                      |

### Modifying the Workflow
-   **Add a New State**: Click the **Add State** button at the bottom of the page.
-   **Add a Transition**: Find the state you want a new path from and click the **`+`** icon in its "ACTIONS" column.
-   **Delete a State or Transition**: Use the **trash can** icon next to any state or transition row to remove it.

### Advanced Transition Rules (The `...` Menu)
For each transition, click the **`...`** (more options) menu to add powerful rules and automation:

-   **Add Rule**: Define conditions that must be met for this transition to be available. For example, a rule that only users with the "Team Lead" role can perform the "Approve" action.
-   **Edit**: Modify the action name or the next state for the transition.
-   **Link Form**: A key feature for process gates. You can require users to fill out a specific **Form** when they execute a transition. For example, when moving an item from `QA` to `Done`, you could link a "QA Sign-off" form to capture testing details.
-   **Remove**: Deletes that specific transition path.

::: tip Best Practices
-   **Map It Out First**: Before building in Zymmr, sketch your workflow on a whiteboard to visualize all states and transitions.
-   **Start Simple**: Create a basic workflow first. You can always add more states, rules, and complexity later.
-   **Use Clear Names**: Name your states and actions with clear, intuitive language that your users will understand (e.g., use "Send for Review" instead of an internal code).
:::

::: warning Editing Live Workflows
Be very cautious when editing a workflow that is already in use by a project. Changing or deleting states that currently contain work items can cause those items to become "orphaned" or stuck. It's best to migrate work items out of a state before deleting it.
:::