---
title: Setup Work Item Events
description: A guide for administrators on triggering data capture forms based on specific field changes within a work item.
head:
  - - meta
    - name: keywords
      content: work item events, field trigger, data capture, automation, form trigger, administration, zymmr
outline: deep
---

# Work Item Events

::: info Overview
The Work Item Events feature, found in **Global Settings** ⚙️, provides a sophisticated mechanism to ensure crucial data is captured at specific moments in your project lifecycle. Unlike general forms linked to workflow transitions, Work Item Events are designed to trigger a data entry modal whenever a **specific, pre-defined work item field is changed** within a designated project. This is invaluable for enforcing data completeness and improving audit trails.
:::

## 1. The Work Item Events Dashboard

This screen displays a list of all the Work Item Events that have been configured. Each event represents a rule that triggers a form when a specific field is modified in a specific project.

-   **+ Add Work Item Event Button**: The primary action to create a new Work Item Event.

The dashboard table includes the following information:

| Column       | Description                                                                                       |
| :----------- | :------------------------------------------------------------------------------------------------ |
| **EVENT**    | The name of the event, typically indicating the project and the triggering field.                 |
| **FIELD NAME** | The specific work item field that, when changed, will trigger this event.                         |
| **FIELD TYPE** | Indicates if the triggering field is a `System` or `Custom` field.                                |
| **PROJECT**  | The specific project for which this event is active.                                              |
| **MODIFIED / CREATED** | Timestamps indicating when the event configuration was last modified and created.        |
| **ACTION**   | An icon to **Delete** (trash can) the event.                                                      |

## 2. How to Add a New Work Item Event

1.  From the Work Item Events dashboard, click the **+ Add Work Item Event** button.
2.  The "New Work Item Event" modal window will appear.
3.  Define the trigger for your event:

| Field         | Description                                                                                       |
| :------------ | :------------------------------------------------------------------------------------------------ |
| **Project** `*` | Select the specific project where this event should be active.                                    |
| **Field Name** `*`| Select the work item field (e.g., `Primary Assignee`, `Start Date`) that will trigger this event when changed. |

Click the **Add** button. The new event will now appear in your list, ready for configuration.

## 3. How to Configure a Work Item Event

After creating an event, you must specify which fields to prompt for when the event triggers.

1.  From the dashboard, click on the **EVENT** name to open its configuration screen.
2.  You will see two tabs: `Details` (a read-only summary) and `Required Fields`.
3.  Navigate to the **Required Fields** tab to define the pop-up modal's content.

To add a field to the modal:
1.  **Select a Field Type**: In the first dropdown, choose `System` or `Custom`.
2.  **Select a Field Name**: In the second dropdown, choose the specific field to display.
3.  **Add the Field**: Click the **Add Field** button.
4.  Repeat to add as many required fields as necessary.
5.  Use the **trash can** icon to remove any unwanted fields from the list.
6.  Click the main **Save** button to apply your configuration.

## 4. How Work Item Events Work in Practice

Let's illustrate how a configured event impacts the user experience.

**Scenario**: You've configured an event for **Project**: "Everest-Sprint6" and **Field Name**: "Primary Assignee". You've also set the **Required Fields** to include "Start Date", "End Date", and "Estimate Effort".

-   **User Action**: A user opens a work item within the "Everest-Sprint6" project and changes the "Primary Assignee".
-   **Event Trigger**: As soon as the user makes this change, the configured modal automatically pops up.
-   **Required Input**: The user will be prompted to fill in the "Start Date", "End Date", and "Estimate Effort" fields before the change to the Primary Assignee can be finalized.

This ensures that whenever a key piece of information like an assignee is changed, the associated planning details are immediately captured.

## 5. Managing Existing Work Item Events

-   **Editing an Event**: To change the required fields of an event, click on its **EVENT** name from the dashboard. Navigate to the **Required Fields** tab to add or remove fields, then click **Save**.
    -   *Note*: You cannot change the trigger (Project or Field Name) of an existing event. You must delete and recreate it for that.
-   **Deleting an Event**: Click the **Delete** (trash can) icon next to the event name on the dashboard and confirm the action.

::: warning Workflow Impact
Be aware that deleting an event means the associated data capture will no longer occur when the triggering field is changed. Ensure this aligns with your data governance and process requirements before deleting.
:::
