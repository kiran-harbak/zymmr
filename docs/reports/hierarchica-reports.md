---
title: Hierarchical Reports
description: A flexible, customizable report showing work items with parent-child hierarchies, configurable columns, and aggregated metrics tailored to your needs.
head:
  - - meta
    - name: keywords
      content: hierarchical report, sprint report, work item hierarchy, backlog audit, time tracking, custom fields, configurable columns, zymmr
outline: deep
---

# Hierarchical Reports

::: info Overview
The Hierarchical Reports module provides a powerful and flexible view of your work items with customizable columns and hierarchical relationships. You can configure which fields to display—including system fields, custom fields, and computed metrics—making it perfect for sprint reviews, quality tracking, progress monitoring, and custom reporting needs.
:::

## Accessing the Hierarchical Reports
1. Click **Reports** in the main navigation panel.
2. Select **Hierarchical** from the list of available reports.

## Navigation & Controls

The report is controlled by a set of powerful tools located at the top of the page.

1.  **Project Selector**
    Located at the top-right, this dropdown lets you choose the project for which you want to view the report. Once selected, the report automatically loads all related sprints and their associated work items.

2.  **Sprint Selector**
    This dropdown dynamically updates to list only the sprints associated with the selected project. Use it to filter the table and focus on a single sprint. If no sprint is selected, the report displays all sprints.

3.  **Configure Button** ⚙️
    Opens the column configuration modal where you can customize which fields appear in your report. Your configuration is saved and will be remembered for future sessions.

4.  **Export Button**
    Clicking this button opens a modal allowing you to export the currently visible report data in either **Excel (.xlsx)** or **CSV (.csv)** format.

## Customizing Your Report

### Configure Columns

Click the **Configure** button (⚙️) to open the column configuration modal. This powerful feature lets you tailor the report to your specific needs.

**Configuration Options:**

1. **Select Fields**
   - Browse available fields organized by category:
     - **System Fields**: Standard work item fields (Type, Priority, Workflow State, Dates, Assignee, etc.)
     - **Computed Fields**: Calculated metrics (Story Points, Time Logs, Progress %, Bug Counts)
     - **Custom Fields**: Any custom fields configured for your Work Items
   
2. **Reorder Columns**
   - Drag and drop selected fields to arrange them in your preferred order
   - The `Key` and `Title` columns are always displayed first

3. **Save Your Configuration**
   - Click **Save** to store your column preferences
   - Your configuration is remembered across sessions
   - All users in your organization will see the same report layout

4. **Restore Default View**
   - Click **Restore Default** to return to the original grouped view (by project and sprint)
   - This removes your custom configuration

::: tip Configuration Tips
- Start with a minimal set of columns for cleaner reports
- Add computed fields (like ∑ Story Points) to see aggregated totals in hierarchies
- Include custom fields specific to your workflow (e.g., Project Phase, Grades, Batch)
:::

## Report Display Modes

The Hierarchical Report operates in two modes based on your configuration:

### Default Mode (Grouped View)
When no custom configuration is saved, the report displays:
- Work items grouped by **Project** and **Sprint**
- Standard columns: Type, Key, Title, Parent Key, Story Points, Logged Time
- Group headers showing project and sprint names
- **Unassigned** group for work items not assigned to any sprint

### Configured Mode (Flat View)
After saving a custom configuration, the report displays:
- Flat hierarchical tree showing parent-child relationships
- Only the columns you selected
- No project/sprint group headers (project and sprint act as filters only)
- Focus on work item hierarchy and your chosen metrics

## Available Fields

### System Fields
Standard fields from your work items:
- **Type**: Work item type (Story, Task, Bug, etc.)
- **Priority**: Item priority level
- **Workflow State**: Current status in your workflow
- **Start Date** / **End Date**: Planned dates
- **Actual Start Date** / **Completion Date**: Actual dates
- **Assignee**: Who is working on this item
- And any other standard Work Item field

### Computed Fields
Dynamically calculated metrics:

| Field | Description |
| :---- | :---------- |
| **Story Points** | Points assigned to this item only |
| **∑ Story Points** | Total points including all child items |
| **Logged Time** | Time logged on this item (formatted: "5h", "2.5d") |
| **∑ Logged Time** | Total time including all child items |
| **Logged Time (Secs)** | Raw time in seconds |
| **Progress by Status** | Individual item progress (0-100%) |
| **∑ Progress by Status** | Average progress of item and children |
| **Bug Count** | Number of bugs in this item's hierarchy |
| **Fixed Bugs** | Number of completed bugs in hierarchy |

### Custom Fields
Any custom fields you've added to Work Items will automatically appear in the field selector and can be included in your report.

## Interactive Features

-   **Clickable Work Item Keys**: Clicking any `Key` opens a side panel with complete details for that item, including description, status, time logs, attachments, and linked tasks.
-   **Parent-Child Nesting**: The visual indentation of the `Title` column clearly shows task hierarchy. Parent items display aggregated metrics from all their children.
-   **Hierarchical Calculations**: Computed fields with ∑ symbol automatically roll up totals to parent rows, giving accurate summaries for entire epics or stories.
-   **Flexible Filtering**: Use Project and Sprint filters to narrow down your dataset while maintaining your custom column configuration.

## Common Use Cases

### Sprint Planning & Tracking
Configure columns for:
- Type, Story Points, ∑ Story Points, Progress by Status, ∑ Progress by Status
- Perfect for sprint reviews and tracking completion

### Quality Tracking
Configure columns for:
- Type, Bug Count, Fixed Bugs, Workflow State, Progress by Status
- Monitor bug injection and resolution rates

### Time & Effort Analysis
Configure columns for:
- Type, Story Points, Logged Time, ∑ Logged Time, Assignee
- Compare estimated vs. actual effort

### Custom Workflow Tracking
Configure columns for:
- Type, [Your Custom Fields], Workflow State, Dates, Progress by Status
- Track your organization-specific metrics (Project Phase, Grades, Batch, etc.)

### Stakeholder Reporting
Configure columns for:
- Type, ∑ Story Points, ∑ Logged Time, Completion Date, Progress by Status
- Export clean, focused reports for clients or management

::: tip Performance Note
The report performs well with up to 5,000 work items. For very large hierarchies, consider filtering by sprint or project to improve load times.
:::

## Export Options

Once you've configured your ideal view, export it in your preferred format:
- **Excel (.xlsx)**: Full formatting, formulas preserved, ideal for further analysis
- **CSV (.csv)**: Plain text format, compatible with any spreadsheet or database tool

Exported reports include all visible columns in your current configuration.
