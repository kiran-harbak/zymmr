---
title: Project Releases
description: Managing releases and versions in Zymmr projects
outline: deep
---

# Project Releases

## Overview

A release in Zymmr represents a specific version or deliverable of your project. Releases help teams:

- Track different versions of deliverables
- Manage project delivery schedules
- Document version changes
- Organize work items by delivery phase
- Monitor delivery progress

## Creating Releases

To create a new release in your project:

### Step 1: Access Project Settings

1. Navigate to the Projects listing page
2. Select your target project
3. Click the external link icon <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="navigation-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg> next to the project name

### Step 2: Navigate to Releases

1. Find the **Releases** section in the sidebar
2. Click to expand the section

### Step 3: Create Release

Click the **Create Release** button and fill in:

| Field        | Description                            | Required |
| ------------ | -------------------------------------- | -------- |
| Release Name | A descriptive name for the release     | Yes      |
| Start Date   | When work on this release begins       | No       |
| Release Date | Planned delivery date                  | No       |
| Description  | Detailed information about the release | No       |

Click **Save** to create your release.

## Managing Existing Releases

### Viewing Releases

All releases are listed in the Releases section, showing:

- Release name
- Status (Unreleased/Released)
- Start and release dates
- Actions (Release, Archive, Edit, Delete)

### Release Status

A release can have one of two statuses:

- **Unreleased**: Default status for new releases
- **Released**: Indicates the release has been delivered

### Release Actions

Each release has several actions available:

- **Release**: Mark as delivered
- **Archive**: Store for historical reference
- **Edit**: Update release details
- **Delete**: Remove the release

#### To Edit a Release:

1. Find the release using the search function
2. Click the **Edit** icon
3. Modify the required fields
4. Click **Save** to apply changes

#### To Delete a Release:

1. Locate the release using search
2. Click the **Delete** icon
3. Confirm the deletion in the prompt

::: warning Important Notes

- Releases with associated work items cannot be deleted
- An error message will appear if deletion is attempted on a release with work items
- Consider archiving instead of deleting to maintain project history
  :::

### Search Functionality

You can quickly find specific releases by using the search bar at the top of the Releases section to search by release name.

### Release Management Best Practices

1. Use clear, version-based naming conventions
2. Keep release descriptions detailed and up-to-date
3. Archive completed releases instead of deleting them
4. Associate all relevant work items before marking as released
5. Maintain consistent start and release dates

::: tip Pro Tip
Regular archiving of old releases helps keep your active release list clean while maintaining a complete project history.
:::
