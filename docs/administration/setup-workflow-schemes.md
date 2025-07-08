---
title: Setup Workflow Schemes
description: A guide for administrators on creating and managing workflow schemes to map different workflows to work item types within projects.
head:
  - - meta
    - name: keywords
      content: workflow scheme, workflow, work item type, process management, administration, zymmr
outline: deep
---

# Setup Workflow Schemes

::: info Overview
Workflow Schemes are a powerful administrative feature in **Global Settings** ⚙️ that act as a bridge between your project's **Work Item Types** and its **Workflows**. They allow you to define that `Bugs` should follow a different process than `Tasks` or `Stories`, all within the same project.
:::

## The Workflow Schemes

This page lists all available workflow schemes and provides tools for managing them.

- **Search Field**: Quickly find a specific scheme by its title.
- **Add Workflow Scheme Button**: Located in the top right, this button initiates the creation of a new workflow scheme.

The schemes are listed in a table with the following columns:

| Column         | Description                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------|
| **Scheme Title** | The name of the workflow scheme. Clicking the title navigates to its details page for configuration. |
| **Action**       |  **Clone**  and **Delete**.                                                                          |
| **Work Item Type --> Workflow**| Shows the work item type and workflow mapping.                                         |
| **Default Workflow**| The default workflow set for the scheme                                                           |

### Creating a New Workflow Scheme
1.  From the workflow scheme page, click the **Add Workflow Scheme** button.
2.  You will be immediately redirected to the **Add New Workflow Scheme** details page to begin configuration.
3.  Add appropriate details
4.  Create associations between workflows and work item types.
5.  Click save

### Edite Workflow Scheme
1.  Click on the scheme title you want to edit.
2.  Make the changes.
3.  Click save


### The Workflow Scheme Details Page

This is where you define the core mappings between work item types and their corresponding workflows. This page is used for both creating a new scheme and editing an existing one.

- **Title**: The scheme's title is displayed at the top left and can be edited directly.
- **Default Workflow** (only for new scheme creation): This workflow will be used for any work item type that isn't explicitly mapped to another workflow.
- **Shared by [number] PROJECTS** (only for existing schemes): Located at the top right, this shows how many projects are currently using this scheme. Clicking it reveals a list of those projects.
- **Associate Workflows**: Use global button that allows you to create a new association on add associations using row actions.

### Associating Workflows with Work Item Types
The primary goal here is to tell Zymmr: "When a `Bug` is created, use the `Software Bug Workflow`."

You can create these mappings in two ways:

1.  **Globally**: Click the main **Associate Workflows** button. A modal will appear where you must select both the **Work Item Type** and the **Workflow** from dropdowns.
2.  **Specifically**: In the list of work item types, click the **`+` Associate** button in a specific row. The same modal will appear, but the **Workflow** dropdown will be pre-filled, saving you a step.

::: warning Editing Existing Schemes
When you edit a scheme that already exists (by clicking its title), you will see this same details page, but the **Default Workflow** dropdown will not be present. The default can only be set upon initial creation.
:::

::: tip Best Practices
- **Logical Naming**: Give your schemes descriptive names (e.g., "Standard Software Development" or "Marketing Content Workflow").
- **Always Set a Default**: Choose a simple, general-purpose workflow as your default to catch any unassigned work item types.
- **Clone for Efficiency**: If you need a scheme that is slightly different from an existing one, use the **Clone** feature to save time and ensure consistency.
:::