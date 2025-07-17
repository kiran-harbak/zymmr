---
title: Export Work Items
description: A guide on how to export work items from Zymmr into CSV or Excel formats for analysis and reporting.
head:
  - - meta
    - name: keywords
      content: export, work items, csv, excel, reporting, data analysis, zymmr
outline: deep
---

# Export Work Items

::: info Overview
The Export feature in Zymmr allows you to download a list of work items directly from the "Search across work items" screen. You can export all items or just a filtered selection into **CSV** or **Excel** formats, giving you the flexibility to create custom reports and perform offline analysis.
:::

## Steps to Use the Export Feature

### 1. Navigate and Apply Filters
1.  Go to the **Search across work items** screen.
2.  If you need to export a specific subset of data, apply one or more conditions using the Filter Functionality.
    - *Example filter: `Workflow State` equals `"Open"` AND `Project` equals `"Test"`.*

### 2. Configure Your Export
In the export configuration panel, set up your desired output.
1.  **Choose Items to Export**: Select whether to export **all items** in the current view or only the **filtered items**.
2.  **Select Export Format**: Choose either **CSV** or **Excel**.
3.  **Choose Time Entry Format**: Select if time values (like `Logged Time`) should be exported in **minutes** or **seconds**.
4.  **Select Fields to Export**: You have several options to quickly select columns:
    - **Select All**: Includes all available fields in the export.
    - **Select Mandatory**: Includes only the essential fields, such as `Project` and `Key`.
    - **Unselect All**: Clears all field selections, allowing you to pick them individually.
    - Manually check the boxes for the specific fields you need.

### 3. Generate and Download the File
1.  Once your configuration is set, click the **Export** button.
2.  The file will be generated and downloaded to your computer's default downloads directory. The filename will follow the format `Workitems-Export-[YYYY-Mon-DD] [XXXXXX].`

## Example Use Case

### Scenario
You need to create an Excel report of all "In Progress" tasks for the "Development" project. The report must include the fields: `Task Name`, `Status`, `Assignee`, and `Due Date`.

### Steps
1.  **Apply Filter**: Set the filter to `Project` equals `"Development"` AND `Status` equals `"In Progress"`.
2.  **Choose Items**: Select the option to export **filtered items**.
3.  **Select Format**: Choose **Excel**.
4.  **Time Format**: Choose **Minutes**.
5.  **Select Fields**: Unselect all, then manually check `Task Name`, `Status`, `Assignee`, and `Due Date`.
6.  **Export**: Click **Export** to download the file.

## Example Exported Data Format

The exported file will contain the columns you selected, with data structured as follows:

| Project      | project_title | Type | type_title | Logged Time | Remaining Time | Estimate Effort |
| ------------ | ------------- | ---- | ---------- | ----------- | -------------- | --------------- |
| `feeec76784` | Zymmr Support | Bug  | Bug        | `NaN`       | `NaN`          | `NaN`           |
| `feeec76784` | Zymmr Support | Bug  | Bug        | `NaN`       | `NaN`          | `NaN`           |
| `feeec76784` | Zymmr Support | Bug  | Bug        | `NaN`       | `NaN`          | `NaN`           |

::: tip Power Your Reporting
Use the export feature to create custom reports for stakeholders, import data into other business intelligence tools, or perform in-depth analysis in a spreadsheet application.
:::
