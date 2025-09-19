---
title: Data Migration Guide
description: Overview of data migration options for Zymmr
head:
  - - meta
    - name: keywords
      content: data migration, import, export, zymmr
---

# Data Migration

## Overview

Zymmr provides comprehensive data migration capabilities through our **Data Importer** functionality. We support migration from various project management tools and data formats.

### Supported Data Sources

- Jira
- CSV/Excel files

## Migration Options

Zymmr offers two approaches to data migration:

### 1. Self-Service Data Importer

Our [Data Importer](/setup/data-importer) tool allows you to:

- Import work items, time logs, and comments
- Map CSV columns to Zymmr fields
- Validate data before import
- Track import progress

::: tip Recommended for
- Standard project structures
- CSV data exports from other systems
- Smaller to medium-sized migrations
:::

**📊 Ready-to-Use Import Templates:**

<table>
<thead>
<tr>
<th>Data Type</th>
<th>Template</th>
<th>What's Included</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Work Items</strong></td>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg><a href="https://docs.google.com/spreadsheets/d/1RB4OLkHLJ7z0waUaZgO0YxMH0B2UzdBZJKfTqBfly8M/edit?usp=sharing">Work Item Import Template</a></td>
<td>Field requirements, validation rules, sample data, troubleshooting guide</td>
</tr>
<tr>
<td><strong>Time Logs</strong></td>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:8px;"><path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path></svg><a href="https://docs.google.com/spreadsheets/d/1FA38HYBSjJoQniaSuVClcV0Mm1bDDqbdTH4YV6M91H8/edit?usp=sharing">Time Log Import Template</a></td>
<td>Duration formats, user validation, work item linking, realistic examples</td>
</tr>
</tbody>
</table>

::: tip Quick Start with Templates
1. **Copy the template** to your Google Drive
2. **Follow the documentation** in the "Import Guide & Format" tab
3. **Use sample data** as reference for your format
4. **Export as CSV** when ready to migrate
:::

[Learn more about the Data Importer →](/setup/data-importer)

### 2. Assisted Migration

::: warning For Complex Migrations
For large or complex migrations, we recommend working with our team to ensure a smooth transition.
:::

Our team will help you with:

1. Data Assessment

   - Analyze your existing data
   - Plan migration strategy
   - Identify potential challenges

2. Migration Planning

   - Field mapping
   - Data validation rules
   - Migration timeline

3. Execution Support
   - Guided migration process
   - Data validation
   - Quality assurance

## Next Steps

To begin your data migration:

1. For standard migrations, use our [Data Importer](/setup/data-importer)
2. For complex migrations, [contact our team](/contact-us)
3. Share your migration requirements
4. Get a personalized migration plan

## Need Help?

Have questions about data migration? Our team is ready to help!

- Visit our [Contact Us](/contact-us) page for more options
