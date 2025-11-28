---
title: Data Importer
description: Comprehensive guide to using Zymmr's Data Importer functionality
head:
  - - meta
    - name: keywords
      content: data importer, csv import, work items, time logs, comments, zymmr
outline: deep
---

# Data Importer

## Overview

The Data Importer is a powerful tool that allows you to import project-specific data into your Zymmr instance. This functionality streamlines the process of migrating from other project management tools or importing bulk data from CSV files.

::: tip Available Now
The Data Importer functionality is now available for all Zymmr users. This self-service tool enables you to import data without requiring assistance from our support team.
:::

## Accessing the Data Importer

To access the Data Importer functionality:

1. You must have **Global Admin** privileges
2. Click on the **Settings** gear icon (⚙️) in the top-right navigation bar next to your profile avatar
3. In the sidebar that appears, select **Data Importer**

## The Import Dashboard: Your Import History

The main Data Importer screen serves as a dashboard, providing a complete history of all past import operations. It helps you track, review, and troubleshoot your import history.

-   **+ New Import Button**: The primary button, located in the top right, to start a fresh data import.

The dashboard table includes the following information:

| Column                     | Description                                                                                             |
| :------------------------- | :------------------------------------------------------------------------------------------------------ |
| **DATE**                   | The timestamp indicating when the import was performed. Click this to view the Import Details page.       |
| **IMPORTED PROJECT**       | The Zymmr project into which the data was imported.                                                     |
| **TYPE**                   | Specifies whether the import contained `Work Items` `Time Log` or `Comments` data.                                 |
| **FILE**                   | The name of the original CSV file that was uploaded.                                                    |
| **IMPORTED WORK ITEM COUNT**| The number of records from the file that were successfully imported into Zymmr.                         |
| **TOTAL WORK ITEM COUNT**  | The total number of records found in the uploaded CSV file, helping you spot any import discrepancies.  |

## The Import Details:

You can access the details of any past import by navigating to the **Import Dashboard** and clicking the **DATE** for the desired entry.

- **Import Context Header**: The header at the top of the page provides the context for the import, showing the Project, the data Type (e.g., Work Item), and the name of the File that was used. On the right side of this header is the Column Mappings Button, which allows you to re-open the mapping modal to review or adjust the settings for this specific import.

- **Import Summary**: A box below the header provides vital statistics, such as Found X records and Y columns and confirms if any warnings were found during the validation process.

- **Data Preview Table**: This table displays the actual data from your CSV file as it was read by Zymmr. It allows you to visually verify that the correct data was processed and troubleshoot any issues by reviewing the source data.

## Supported Import Types

The Data Importer currently supports importing:

<table>
<thead>
<tr>
<th>Import Type</th>
<th>Description</th>
<th>Template</th>
</tr>
</thead>
<tbody>
<tr>
<td>Work Items</td>
<td>Tasks, bugs, epics, and other work item types</td>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg><a href="https://docs.google.com/spreadsheets/d/1RB4OLkHLJ7z0waUaZgO0YxMH0B2UzdBZJKfTqBfly8M/edit?usp=sharing">Work Item Import Template</a></td>
</tr>
<tr>
<td>Time Logs</td>
<td>Time tracking entries associated with work items</td>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg><a href="https://docs.google.com/spreadsheets/d/1FA38HYBSjJoQniaSuVClcV0Mm1bDDqbdTH4YV6M91H8/edit?usp=sharing">Time Log Import Template</a></td>
</tr>
<tr>
<td>Comments</td>
<td>Discussion threads and feedback on work items</td>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg><a href="https://docs.google.com/spreadsheets/d/1YDpyAo3ghgees-FaaFwWZxmKs68Fe-dXifSaegiA_mI/edit?usp=sharing">Comment Import Template</a></td>
</tr>
</tbody>
</table>

::: tip Import Templates Available
We've created comprehensive import templates with detailed field documentation, validation rules, and sample data. These templates include step-by-step guides to help you prepare your data correctly and avoid common import errors.
:::

## Import Process

### Step 1: Start New Import
Start the import process by clicking on the **New Import** button present on top right section of data importer page.

### Step 2: Select Project

Begin by selecting the project you want to import the data into. This ensures that all imported data is associated with the correct project in your Zymmr instance.

### Step 3: Choose Import Type

Select what type of data you want to import:
- Work Items
- Time Logs
- Comments

### Step 4: Upload CSV File

Click on the "Attach" button under the "Import File" label and select the CSV file you want to import.

Once your file is selected:
- The importer will upload the data into your instance under the "files" section for future reference
- You'll see details about your uploaded file, including the total number of records found and the number of columns in the file

### Step 5: Map Columns

::: info Note
The following steps assume you've selected **Work Items** as your import type in step 2. The mapping interface will show different fields based on your selected import type.
:::

Click on the "Map Columns" button to open the column mapping interface:

- On the left side, you'll see the columns from your uploaded file (view only)
- On the right side, you'll see the available work item fields in Zymmr
- Map each column from your file to the appropriate work item field
- Required fields must be mapped to proceed with the import

#### Important Mapping Considerations

| Field | Behavior if Not Mapped |
| ----- | ---------------------- |
| Creation Date | Current date will be used |
| Owner (Created By) | Current global user will be set as owner |
| Status | Must be mapped to "Workflow State" field |

### Step 6: Validate Data

Click the "Validate" button to check your data for any issues:

<div class="custom-block warning">
  <p class="custom-block-title">Validation Process</p>
  <p>The validation process helps identify potential issues before importing your data. Addressing these issues will ensure a smooth import experience.</p>
</div>

The importer will validate the data and display any validation warnings in a table with the following information:

| Column | Description |
| ------ | ----------- |
| **Type** | The type of validation warning (e.g., `Required Check Failed`, `FieldType Validation Failed`, `Email Not Found in Linked User Table`) |
| **File Column** | The column in your file causing the warning |
| **Mapped Column** | The corresponding work item field |
| **File Row** | The specific row in your file with the issue |
| **Warning** | A detailed message explaining the issue with suggestions to fix it |
| **Default** | The default value that will be used if the validation issue is ignored |

You can choose to:
- Resolve the warnings by correcting your column mappings
- Update the data format in your file
- Ignore the warnings and proceed with the import

### Step 7: Start Import

Click the "Start Import" button to begin the import process:

<div class="custom-block tip">
  <p class="custom-block-title">Import Progress</p>
  <p>The import process will show real-time progress and estimated completion time.</p>
</div>

- A progress indicator will show the number of records imported so far
- An estimated time remaining will be displayed
- Do not close or refresh the page until the import process is complete
- Once complete, you can close the modal by clicking the "Close" button

### Step 8: Verify Imported Data

After the import is complete, verify that your data has been imported correctly by checking the work items in your project.

## Preparing Your Import File

### Using Import Templates

We strongly recommend using our pre-built import templates to ensure successful data imports:

**<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>Work Item Import Template**
- **Link:** [Work Item Import Template](https://docs.google.com/spreadsheets/d/1RB4OLkHLJ7z0waUaZgO0YxMH0B2UzdBZJKfTqBfly8M/edit?usp=sharing)
- **Contains:** Complete field documentation, validation rules, sample data, and troubleshooting guide

**<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>Time Log Import Template**  
- **Link:** [Time Log Import Template](https://docs.google.com/spreadsheets/d/1FA38HYBSjJoQniaSuVClcV0Mm1bDDqbdTH4YV6M91H8/edit?usp=sharing)
- **Contains:** Duration formats, user validation, work item linking, and realistic sample entries

**<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>Comment Import Template**  
- **Link:** [Comment Import Template](https://docs.google.com/spreadsheets/d/1YDpyAo3ghgees-FaaFwWZxmKs68Fe-dXifSaegiA_mI/edit?usp=sharing)
- **Contains:** Date format, user validation, work item linking, and realistic sample entries

::: tip How to Use Templates
1. **Make a copy** of the template to your Google Drive
2. **Review the "Import Guide & Format"** tab for complete documentation
3. **Use the "Sample Data"** tab as reference for your data structure
4. **Fill your data** in the designated sheet following the format guidelines
5. **Export as CSV** when ready to import
:::

### Manual File Preparation Guidelines

If creating your own CSV file, ensure it follows these guidelines:

### User Fields
Fields such as Owner, Primary Assignee, Secondary Assignee, and Reporter must contain the email address of the user in the corresponding column.

<div class="custom-block warning">
  <p class="custom-block-title">Important</p>
  <p>Email addresses must match existing users in your Zymmr instance.</p>
</div>

### Date Formats

| Field Type | Format | Example |
| ---------- | ------ | ------- |
| Date fields | YYYY-MM-DD | 2023-12-31 |
| Datetime fields | YYYY-MM-DD HH:MM:SS | 2023-12-31 14:30:00 |

### Custom Fields
You can map custom fields from your file to custom fields in Zymmr.

## Best Practices

::: tip For Successful Imports
- **Use our import templates** - Start with our pre-built templates to avoid common formatting issues
- **Review template documentation** - Each template includes comprehensive guides and validation rules
- **Test with sample data first** - Use the provided sample data to understand the correct format
- Prepare your CSV file with clean, consistent data
- Ensure all required fields are included
- Verify user email addresses exist in the system
- Use correct date formats
- Back up your data before importing
:::

## Troubleshooting

If you encounter any issues during the import process, check for validation warnings and ensure your data follows the format requirements. Common issues include:

| Issue | Solution |
| ----- | -------- |
| Email addresses not found | Verify users exist in your Zymmr instance |
| Incorrect date formats | Format dates as YYYY-MM-DD or YYYY-MM-DD HH:MM:SS |
| Missing required fields | Ensure all required fields are mapped |
| Invalid field values | Check validation warnings and correct data |

::: warning Need Help with Format Issues?
If you're experiencing data format or validation errors, consult our import templates:
- **Work Items:** <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>[Work Item Import Template](https://docs.google.com/spreadsheets/d/1RB4OLkHLJ7z0waUaZgO0YxMH0B2UzdBZJKfTqBfly8M/edit?usp=sharing)
- **Time Logs:** <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>[Time Log Import Template](https://docs.google.com/spreadsheets/d/1FA38HYBSjJoQniaSuVClcV0Mm1bDDqbdTH4YV6M91H8/edit?usp=sharing)
- **Comments:** <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg>[Comment Import Template](https://docs.google.com/spreadsheets/d/1YDpyAo3ghgees-FaaFwWZxmKs68Fe-dXifSaegiA_mI/edit?usp=sharing) 

These templates include detailed troubleshooting guides with specific solutions for validation errors.
:::
