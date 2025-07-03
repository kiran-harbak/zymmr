---
title: Setup Work Item Type Schemes
description: A guide for administrators on how to create and manage Work Item Type Schemes to standardize processes across multiple projects in Zymmr.
head:
  - - meta
    - name: keywords
      content: work item type scheme, issue type scheme, administration, standardize projects, zymmr
outline: deep
---

# Setup Work Item Type Schemes

::: info Overview
As an administrator in Zymmr, you can manage work items efficiently by creating **Work Item Type Schemes**. A scheme is a reusable template that groups a specific set of work item types together. By applying a single scheme to multiple projects, you can streamline processes and ensure consistency across your organization.
:::

## How to Set Up a Work Item Type Scheme

Here is a step-by-step guide to creating and configuring a new scheme.

### 1. Create a New Scheme
1.  Navigate to **Administration** ⚙️ > **Work Item Type Schemes**.
2.  Click the **Create Scheme** button.
3.  Give your scheme a descriptive name (e.g., "Software Development Scheme" or "Marketing Campaign Scheme") and save it.

### 2. Add Work Item Types to the Scheme
Once the scheme is created, you need to add the work item types that will be part of it.
1.  From the scheme's configuration page, drag the desired types from the **Available Work Items** list on the right.
2.  Drop them into the **Work Item Types for this Scheme** list on the left.
    -   *For a software project, you might add `Epic`, `Story`, `Bug`, and `Task`.*

::: tip Need a New Work Item Type?
If a work item type you need doesn't exist, you can create it first. See our guide on Work Item Types for more details.
:::

### 3. Set the Default Work Item Type
Choose a default work item type from the dropdown menu. This will be the type that is pre-selected when a user creates a new work item in any project associated with this scheme. For software projects, `Task` or `Story` is often a good default.

### 4. Apply the Scheme to Projects
After your scheme is configured, you must associate it with the relevant projects.
1.  Navigate to your project list, find your project, and click the **Project settings** link 🔗.
2.  From the project settings sidebar, select **Details**.
3.  Click the **Edit** button to modify the project details.
4.  In the **Work Item Type Scheme** field, select a work item type scheme from the dropdown menu.
5.  Confirm the association. These projects will now use the standardized set of work item types you defined.

::: tip The Power of Standardization
By implementing work item type schemes, your teams can easily select the appropriate work item type for their tasks. This ensures consistency across projects, making it significantly easier to manage, report on, and maintain your projects within Zymmr.
:::
