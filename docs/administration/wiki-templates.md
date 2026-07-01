---
title: Wiki Templates Administration
description: A guide for administrators on creating, editing, and managing reusable Wiki page templates in Zymmr.
head:
  - - meta
    - name: keywords
      content: wiki templates, page templates, rich text editor, category, administration, zymmr
outline: deep
---

# Wiki Templates Administration

::: info Overview
Wiki Templates help administrators standardize common page formats in Zymmr. Create templates for meeting notes, release notes, project decisions, onboarding guides, test plans, or any repeatable documentation pattern your teams use often.
:::

## 1. How to Access Wiki Templates

To open the Wiki Templates administration page:

1. Navigate to **Global Settings**.
2. In the left sidebar, expand **Wiki**.
3. Select **Templates**.

You can also open templates from the **Templates** button on the Wiki Spaces administration page.

## 2. The Wiki Templates Interface

The templates page has two main areas:

- **Template List**: The left panel lists existing templates. Each item shows the template category, title, and short description when available.
- **Template Editor**: The main area shows the selected template. If no template is selected, Zymmr displays an empty state prompting you to select a template or create a new one.

The **New** button in the template list starts a new template. The **Save** and **Delete** actions appear in the editor when a template is open.

## 3. Creating a New Wiki Template

Create a template when users need a consistent starting structure for a type of wiki page.

1. From the **Wiki Templates** page, click **New**.
2. Enter the template details:

| Field | Description |
| :---- | :---------- |
| **Template Title** | The name users will see when choosing a template for a new wiki page. |
| **Category** | A grouping label that helps organize templates, such as `Engineering`, `HR`, `QA`, or `Release`. |
| **Description** | A short explanation of when the template should be used. |
| **Short Description** | A brief summary shown in the template list or selection view. |
| **Body Content** | The reusable page content that will be copied into a new wiki page when the template is selected. |

3. Use the rich text editor to build the template body.
4. Click **Save**.

After saving, the template appears in the left panel and becomes available when users create a wiki page.

## 4. Using the Template Editor

The template editor supports the same writing experience used by wiki pages. Administrators can prepare structured content before users apply the template.

Common formatting options include:

- Bold, italic, and underline text.
- Heading levels for section structure.
- Bullet and numbered lists.
- Links and code blocks.
- Slash commands by typing `/` to insert supported content blocks.
- User mentions: type @ and search for a user.

Use placeholder text inside the body when users need to replace content later, such as `Add decision summary here` or `List release risks here`.

::: tip Template Design
Keep templates practical and easy to complete. A template with clear headings and short prompts is usually more helpful than a fully written example that users must heavily edit.
:::

## 5. Editing an Existing Template

To update an existing template:

1. Select the template from the left panel.
2. Update the title, category, descriptions, or body content.
3. Click **Save**.

Changes apply to future pages created from the template. Existing wiki pages that were already created from the template are not automatically updated.

## 6. Deleting a Template

To delete a template:

1. Select the template from the left panel.
2. Click **Delete**.
3. Confirm the deletion if prompted.

Deleting a template removes it from the template list and prevents users from selecting it for new wiki pages.

::: warning Before You Delete
Deleting a template does not delete wiki pages that were previously created from it. However, users will no longer be able to use that template as a starting point for new pages.
:::

## 7. Related Wiki Administration

Templates support the page creation workflow inside wiki spaces. For managing the spaces where wiki pages live, see [Wiki Spaces Administration](./wiki-spaces.md).
