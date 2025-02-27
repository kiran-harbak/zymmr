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

## Supported Import Types

The Data Importer currently supports importing:

| Import Type | Description |
| ----------- | ----------- |
| Work Items  | Tasks, bugs, epics, and other work item types |
| Time Logs   | Time tracking entries associated with work items |
| Comments    | Discussion threads and feedback on work items |

## Import Process

### Step 1: Select Project

Begin by selecting the project you want to import the data into. This ensures that all imported data is associated with the correct project in your Zymmr instance.

### Step 2: Choose Import Type

Select what type of data you want to import:
- Work Items
- Time Logs
- Comments

### Step 3: Upload CSV File

Click on the "Attach" button under the "Import File" label and select the CSV file you want to import.

Once your file is selected:
- The importer will upload the data into your instance under the "files" section for future reference
- You'll see details about your uploaded file, including the total number of records found and the number of columns in the file

### Step 4: Map Columns

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

### Step 5: Validate Data

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

### Step 6: Start Import

Click the "Start Import" button to begin the import process:

<div class="custom-block tip">
  <p class="custom-block-title">Import Progress</p>
  <p>The import process will show real-time progress and estimated completion time.</p>
</div>

- A progress indicator will show the number of records imported so far
- An estimated time remaining will be displayed
- Do not close or refresh the page until the import process is complete
- Once complete, you can close the modal by clicking the "Close" button

### Step 7: Verify Imported Data

After the import is complete, verify that your data has been imported correctly by checking the work items in your project.

## Preparing Your Import File

For successful data import, ensure your CSV file follows these guidelines:

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

For additional assistance, please contact our support team through the [Contact Us](/contact-us) page. 