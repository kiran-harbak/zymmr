---
title: Setup Workflow States
description: A guide for administrators on creating and managing the individual states that serve as the building blocks for all workflows.
head:
  - - meta
    - name: keywords
      content: workflow states, status, process steps, administration, zymmr
outline: deep
---

# Setup Workflow States

::: info Overview
The Workflow States feature, located in **Global Settings** ⚙️, is where you create and manage the individual steps or stages that make up your project lifecycles. Think of these states as the fundamental, reusable building blocks for your processes—stages like `Open`, `In Progress`, `In Review`, and `Done`. Before you can build an end-to-end process in the main **Workflows** feature, you must first define all the possible states here.
:::

## 1. Understanding Workflow States and Categories

It's crucial to understand the two parts of a workflow state:

| Concept         | Description                                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------------------------------ |
| **Workflow State**| The specific name of a step in a process (e.g., "Ready for Dev," "Under Review," "Deployed").                 |
| **Category**    | The high-level grouping for your states, which is essential for reporting and board visualizations.            |

A state must belong to one of a few standard categories (e.g., `Open`, `In Progress`, `Done`). By categorizing each state, you tell Zymmr how to treat work items in that state for analytics and on boards.

## 2. The Workflow States Dashboard

This screen provides a central list of every single workflow state that exists in your system, available for use across different workflows.

-   **Search Bar**: Allows you to quickly find a specific state by name.
-   **+ Create Workflow State Button**: The primary action to add a new state to the system.

The dashboard table includes the following columns:

| Column           | Description                                                        |
| :--------------- | :----------------------------------------------------------------- |
| **WORKFLOW TITLE** | The name of the created workflow state.                            |
| **ACTIONS**      | Icons to **Edit** (pencil) or **Delete** (trash can) a state.        |

## 3. How to Create a New Workflow State

1.  From the Workflow States dashboard, click the **+ Create Workflow State** button.
2.  The "Create workflowState" modal will appear.
3.  Fill in the required information:

| Field             | Description                                                                                          |
| :---------------- | :--------------------------------------------------------------------------------------------------- |
| **Workflow State** `*`| Enter the specific name for your new state (e.g., "Pending Client Approval," "Technical Review"). |
| **Category** `*`    | Select the high-level group this state belongs to from the dropdown menu (e.g., `Open`, `In Progress`). |

Click the **Save** button. The new state is now created and can be selected when building a process in the main **Workflows** section.

## 4. How to Manage Existing Workflow States

You can easily edit or delete states from the main dashboard.

### Editing a Workflow State
1.  Find the state you wish to modify in the list.
2.  Click the **Edit** (pencil) icon in its row.
3.  The "Edit Workflow State" modal will appear, pre-filled with the state's current details.
4.  Make your desired changes to  its **Category**.
5.  Click **Save** to apply the changes.

### Deleting a Workflow State
1.  Find the state you wish to delete.
2.  Click the **Delete** (trash can) icon in its row.
3.  A confirmation prompt will appear. Confirm the action to permanently delete the state.

::: tip The Building Blocks of Your Process
Remember, the states you create here are the essential components you will use to construct your end-to-end processes in the **Workflows** feature. A well-defined set of states is the foundation of a clear and effective workflow.
:::

::: warning Before You Delete
The states that are in use will throw error, to delete remove the state from all the workflows.
:::