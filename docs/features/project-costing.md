---
title: Project Costing
description: A comprehensive guide to managing project budgets, defining resource rates, and tracking both labor and operational expenses in Zymmr.
head:
  - - meta
    - name: keywords
      content: project costing, budget, resource rate, expenses, financial tracking, billable hours, zymmr
outline: deep
---

# Project Costing

::: info Overview
The Project Costing feature allows you to manage and track the financial health of your projects with precision. By combining fixed budgets, hourly resource rates, and direct expenses, Zymmr provides a real-time view of your "Total Consumed" versus "Budget Remaining."
:::

## 1. Accessing Project Costing

1.  From your project list, select the project for which you want to manage costs.
2.  Navigate to **Project Settings** by clicking the settings icon on the right.
3.  From the settings menu, choose the **Costing** item.
4.  This will open the Costing module, which is divided into four main tabs: **Dashboard**, **Budget**, **Resource**, **Resource Expense**, and **Expenses**.

## 2. The Costing Dashboard

The Dashboard provides a high-level financial snapshot of your project.

### Key Metrics & Visuals
-   **Financial Cards**: Instantly view your **Total Budget**, **Total Consumed** (Resource costs + Expenses), and **Budget Remaining**.
-   **Budget Breakdown**: A donut chart visualizing the percentage of the budget used vs. remaining.
-   **Expenses Timeline**: A grid view showing cost accumulation over time.

### Dashboard Controls
You can customize the data view using the controls at the top:

-   **Billable Time Only**: Check this box to calculate costs based *only* on time logs marked as "Billable." Uncheck it to see the cost of all time spent.
-   **Show Uncosted Time**: Check this box to highlight time logs where a resource rate has not yet been set (helpful for finding gaps in your data).
-   **Expense Timeline Controle**: Move forwards and backwards in timeline. Jump to **Today** and Switch the grid view between **Day**, **Week**, or **Month** to analyze costs at different granularities.

## 3. Setting the Project Budget

Use the **Budget** tab to define the financial ceiling for your project.

1.  Enter the **Budget Amount** (e.g., `100000`).
2.  Select the **Currency** (e.g., `USD`) from the dropdown. All resource costs and expenses will use this currency.
3.  Click **Update Budget** to save.

## 4. Managing Resource Rates

The **Resource** tab is where you define how much each team member costs the project per hour.

### Adding a Resource Rate
1.  Click the **+ Add Resource** button.
2.  In the modal, select a **Resource** (team member) from the dropdown.
3.  Enter their **Hourly Rate**.
4.  Click **Save**.

### Managing Rates
-   **Edit**: Click the pencil icon to change a user's hourly rate.
-   **Delete**: Click the trash can icon to remove a rate configuration.

## 5. Tracking Resource Expenses

The **Resource Expense** tab displays the calculated labor costs based on actual work done.

-   **Automatic Calculation**: Zymmr calculates these figures automatically: `Hours Logged × Defined Hourly Rate`.
-   **Timeline View**: View labor costs spread across days, weeks, or months.
-   **Hover Details**: Hover over any specific date cell (except the total row) to see the exact calculation details for that day.

::: info Read-Only View
This tab is for reporting purposes. To change these figures, you must either update the user's **Hourly Rate** (in the *Resource* tab) or adjust their **Time Logs** (in the project work items).
:::

## 6. Managing Project Expenses

The **Expenses** tab is the master view for all project costs. It lists **Resource Costs** (aggregated from the previous tab) alongside other direct expenses (e.g., Software Licenses, Travel, Electricity).

### Adding a New Expense
1.  Click the **+ Create Expense** button.
2.  In the modal, provide the details:
    -   **Title**: A name for the expense (e.g., "Server Hosting").
    -   **Expense Type**: Select a category (Note: These types are configured by administrators in the *Expense Type* admin page).
    -   **Amount**: The cost of the item.
    -   **Date**: When the expense was incurred.
3.  Click **Save**.

### Editing or Deleting Expenses via Timeline
You can manage expenses directly from the timeline grid:
1.  Locate the specific expense row and date column.
2.  **Click on the date cell** containing the expense amount.
3.  A modal will appear listing the expenses for that day.
4.  Use the **Edit** (pencil) or **Delete** (trash can) icons within the modal to modify or remove the expense.