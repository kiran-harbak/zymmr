---
title: Wiki Pages
description: A guide to creating, editing, organizing, publishing, and collaborating on Wiki pages in Zymmr.
head:
  - - meta
    - name: keywords
      content: wiki pages, rich text editor, page tree, templates, tags, attachments, comments, version history, zymmr
outline: deep
---

# Wiki Pages

:::: info Overview
Wiki pages are documents inside a [Wiki space](./spaces.md). Use pages to capture project decisions, release notes, how-to guides, meeting notes, test documentation, policies, and other information your team needs to keep organized.
::::

## Core Concepts

| Term | Description |
| :--- | :---------- |
| **Page** | A document inside a space. Pages can be organized in a tree with parent and child pages. |
| **Draft** | A page that is saved but not yet published. Draft pages are visible in the page tree with a draft indicator. |
| **Published** | A page that is ready for regular viewing and appears in in-space search results. |
| **Template** | A reusable starting point for new wiki pages, managed by administrators. |

## Creating Pages

### Create a Top-Level Page

1. Open the target wiki space.
2. Click **New page** at the bottom of the sidebar.
3. Enter a page title.
4. Choose **Blank page** or select a template, if templates are available.
5. Click **Create** or press **Enter**.

New pages start as **Draft** pages. After creation, Zymmr opens the page and adds it to the page tree.

### Create a Child Page

1. Hover over a page in the sidebar.
2. Click the context menu button.
3. Select **New child page**.
4. Enter the title and create the page.

The new page is nested under the selected parent.

## Reading and Editing Pages

In view mode, a wiki page shows the page title, last edited metadata, content, tags, attachments, and comments. If a page has no content, Zymmr displays a message prompting you to click **Edit**.

### Edit a Page

1. Click **Edit** in the top right of the page view.
2. Update the title or body content.
3. Use **Save Draft** to keep the page as a draft, or **Publish** to make it published.

If you make changes and click **Cancel**, Zymmr asks whether you want to discard the unsaved changes.

### Rich Text Editing

The editor supports common formatting and content blocks:

- Text formatting such as bold, italic, underline, and headings.
- Bullet lists, ordered lists, blockquotes, dividers, code blocks, and tables.
- Slash commands: type `/` to open the insert block menu.
- Callouts for info, warning, danger, and tip content.
- User mentions: type `@` and search for a user.
- Work item embeds: insert a work item card from the slash command flow.

:::: tip Work Item References
Use work item embeds when a wiki page needs to reference active project work. The embedded card links back to the work item so readers can open it from the page.
::::

## Organizing Pages

Use the page tree context menu to manage existing pages:

| Action | Description |
| :----- | :---------- |
| **New child page** | Creates a nested page under the selected page. |
| **Copy page** | Creates a draft copy of the selected page as a sibling. |
| **Move page** | Moves the page to the top level or under another parent page. |
| **Delete page** | Removes the page after confirmation. Pages with child pages must be reorganized before they can be deleted. |

You can also drag pages in the sidebar to reorder pages at the same level. Page order is retained after refresh.

## Search Within a Space

Use the in-space search field to find published pages in the current space. Search results can match page titles or page body content. Clicking a result opens that page and clears the search field.

Draft pages are not included in page search results.


## Version History and Export

Open the page actions menu to access additional page options.

| Option | Description |
| :----- | :---------- |
| **Version history** | Opens the page history view, where you can preview previous versions and restore a version if needed. Each save creates a new history entry. |
| **Export PDF** | Opens the browser print dialog for a print-friendly version of the page content. |

Use **Back to page** from version history to return to the live page.

## Wiki Templates

Templates are reusable starting points for new wiki pages. If templates are available, they appear in the **New Page** dialog. Select a template to pre-fill the new page with its saved content.

Administrators can manage templates from **Administrator** -> **Wiki** -> **Templates**. Templates can include a title, category, description, and rich text body content. For setup details, see [Wiki Templates Administration](../administration/wiki-templates.md).

## Typical Workflows

### Document a Project Decision

1. Open the project-linked wiki space.
2. Create a new page or child page under the relevant topic.
3. Add context, decisions, tables, mentions, and work item embeds as needed.
4. Add tags such as `decision`, `architecture`, or `release`.
5. Publish the page and share the URL with the team.

### Update Existing Documentation

1. Open the wiki page.
2. Click **Edit**.
3. Make the required changes.
4. Click **Publish** to update the published page.
5. Use **Version history** later if you need to review or restore an earlier version.
