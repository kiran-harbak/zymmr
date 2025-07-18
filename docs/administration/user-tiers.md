---
title: Setup User Tiers
description: A guide for administrators on creating user tiers to standardize and simplify resource costing across projects.
head:
  - - meta
    - name: keywords
      content: user tier, project costing, resource cost, standardization, administration, zymmr
outline: deep
---

# User Tiers

::: info Overview
The User Tier feature, located in **Global Settings** ⚙️, is a powerful tool for standardizing how resource costs are calculated across your projects. By creating tiers based on roles or seniority (e.g., `Junior Developer`, `Senior Analyst`), you can assign a default cost to each tier. This streamlines financial planning by automatically applying a baseline cost for every team member, while still allowing for project-specific overrides.
:::

## 1. The User Tier Dashboard

The main User Tier screen provides a list of all the cost tiers you have configured for your organization.

-   **Search Bar**: Allows you to quickly find a specific tier.
-   **+ Create User Tier Button**: The primary action to add a new tier to the system.

The dashboard table displays the following information:

| Column       | Description                                                                              |
| :----------- | :--------------------------------------------------------------------------------------- |
| **TITLE**    | The name of the user tier (e.g., `A`, `B`, `Senior`).                                    |
| **COST (USD)** | The default numerical cost associated with that tier (e.g., an hourly rate).           |
| **ACTIONS**  | Icons to **Edit** (pencil) or **Delete** (trash can) the tier.                           |

## 2. How to Create a New User Tier

1.  From the User Tier dashboard, click the **+ Create User Tier** button.
2.  The "Add User Tier" modal will appear.
3.  Fill in the required information:

| Field           | Description                                                                                    |
| :-------------- | :--------------------------------------------------------------------------------------------- |
| **User Tier** `*` | Enter a name for the tier (e.g., `Developer`, `Designer`, `Lead`).                           |
| **Cost** `*`      | Enter the default numerical cost for this tier. This will be the baseline rate for calculations. |

Click the **Add** button to save the new tier. It will now appear in the list and be available to be assigned to users.

## 3. How to Manage Existing User Tiers

You can easily edit or delete tiers from the list to keep your system aligned with your organization's needs.

### Editing a User Tier
To change the name or cost of an existing tier:
1.  Find the tier you wish to modify in the list.
2.  Click the **Edit** (pencil) icon in its row.
3.  The "Edit User Tier" modal will appear, pre-filled with the current information.
4.  Make your desired changes to the **User Tier** name or its **Cost**.
5.  Click **Save** to apply the updates.

### Deleting a User Tier
To permanently remove a tier that is no longer in use:
1.  Find the tier you wish to remove.
2.  Click the **Delete** (trash can) icon in its row.
3.  A confirmation prompt will appear to prevent accidental deletion. Confirm the action to proceed.

::: warning Before You Delete
Be cautious when deleting a User Tier. If the tier is currently assigned to any users, it is best practice to re-assign them to a different tier first.
:::

## 4. How User Tiers Integrate with Project Costing

This is where the power of the User Tier feature comes into play. It creates a simple, three-step workflow for managing resource costs.

### Step 1: Create User Tiers (This Feature)
You define the standard tiers and their default costs here in the global settings, as described above.

### Step 2: Assign Tiers to Users
Navigate to the main **User Management** screen. When you edit a user's profile, you will have the option to assign them to one of the User Tiers you've created.

### Step 3: Automate and Override Project Costing
-   **Automatic Default Cost**: When a user with an assigned tier is added to a project, Zymmr automatically uses the cost from their tier as their default resource cost for that project's financial calculations.
-   **Project-Level Override**: The true flexibility comes from the ability to override this default. If, for a specific project, a user has a different rate, you can go into that project's **Costing** section and manually change their cost *for that project only*. The system will then use the overridden value, leaving the user's default tier cost unchanged for all other projects.

::: tip The Power of Standardization and Flexibility
This system provides both **standardization** for easy initial project setup and the **flexibility** to handle exceptions, making your project costing both efficient and accurate.
:::
