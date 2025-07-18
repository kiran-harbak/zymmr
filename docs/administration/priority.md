---
title: Setup Priorities
description: A guide for administrators on creating and managing priority levels to define work item urgency.
head:
  - - meta
    - name: keywords
      content: priority, urgency, task priority, administration, zymmr
outline: deep
---

# Priorities

::: info Overview
The Priority feature, located in **Global Settings** ⚙️, allows you to create and manage the levels of urgency that can be assigned to work items. Defining clear priorities is essential for helping your team focus on the most critical tasks first. Each priority level is assigned a unique color, providing an immediate visual cue across boards, backlogs, and reports.
:::

## 1. The Priority Dashboard

The main Priority screen provides a centralized list of all the priority levels available in your Zymmr instance.

-   **Search Bar**: Allows you to quickly find a specific priority by name.
-   **+ Create Priority Button**: The primary action to add a new priority level to the system.

The dashboard table displays the following information:

| Column    | Description                                                        |
| :-------- | :----------------------------------------------------------------- |
| **TITLE** | The name of the priority level (e.g., `Highest`, `Medium`).        |
| **COLOR** | A color swatch providing an immediate visual reference.             |
| **ACTIONS**| Icons to **Edit** (pencil) or **Delete** (trash can) the priority.   |

## 2. How to Create a New Priority Level

1.  From the Priority dashboard, click the **+ Create Priority** button in the top-right corner.
2.  The "Create Priority" modal window will appear.
3.  Fill in the required information:

| Field         | Description                                                                                                   |
| :------------ | :------------------------------------------------------------------------------------------------------------ |
| **Priority** `*`| Enter a clear and descriptive name for the priority level (e.g., "Critical," "Blocker," "Minor").             |
| **Color** `*`   | Click the color swatch to open the color picker. Choose a color that intuitively represents the priority level. |

Click the **Save** button. Your new priority level will now appear in the list and will be available for selection on all work items.

## 3. How to Manage Existing Priority Levels

You can easily edit or delete priority levels to keep your system aligned with your team's processes.

### Editing a Priority Level
1.  Find the priority you wish to modify in the list.
2.  Click the **Edit** (pencil) icon in its row.
3.  The "Edit Priority" modal will appear, pre-filled with the current details.
4.  Make your desired changes to the **Priority** name or select a new **Color**.
5.  Click **Save** to apply the changes.

### Deleting a Priority Level
1.  Find the priority you wish to delete.
2.  Click the **Delete** (trash can) icon in its row.
3.  A confirmation prompt will appear. Confirm the action to permanently remove the priority.

::: tip Best Practices
-   **Use Intuitive Colors**: A standard traffic light system (Red for Highest, Yellow for Medium, Green for Low) is often effective and universally understood.
-   **Limit Your Options**: Avoid creating too many priority levels. A simple set of 3-5 priorities is usually easier for teams to manage and understand than a long, nuanced list.
:::

::: warning Before You Delete
Be cautious when deleting a priority level that is currently in use. It is best practice to first filter for all work items using that priority and re-assign them to a different, appropriate priority before deleting the old one.
:::