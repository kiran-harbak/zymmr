---
title: Microsoft 365 SSO Setup
description: Configure Microsoft 365 / Microsoft Entra as a Single Sign-On provider for Zymmr so users can sign in with their Microsoft work or school account.
head:
  - - meta
    - name: keywords
      content: microsoft 365 sso, entra, azure ad, office 365, oauth, oidc, app registration, zymmr sso setup
outline: deep
---

# Microsoft 365 SSO Setup

This guide explains how to let users sign in to Zymmr with their Microsoft 365 work/school
account. After setup, the login page shows a **Continue with Office 365** button.

::: info What happens at login
Zymmr does not store the user's Microsoft password. Microsoft authenticates the user and
sends Zymmr identity claims, then Zymmr creates or links the local user by email.
:::

::: tip Microsoft 365 OAuth vs Active Directory
This page covers **Microsoft 365 / Entra OAuth** (cloud sign-in button). If you instead
want to validate passwords against an on-premises **Active Directory** server over LDAP,
see [Active Directory](./active-directory).
:::

## Before you start

You need:

1. Administrator access in Zymmr.
2. Access to your **Microsoft Entra** tenant, with permission to create an App
   registration (or help from a tenant admin).
3. Your public Zymmr URL (for example `https://your-zymmr-domain.com`).
4. A decision on which email domains may auto-provision users (see [SSO Settings](./settings)).

## Redirect URI

Microsoft requires an exact redirect URI. For Zymmr's Office 365 provider it is:

```text
https://your-zymmr-domain.com/api/method/frappe.integrations.oauth2_logins.login_via_office365
```

Replace `your-zymmr-domain.com` with your real Zymmr URL and use **HTTPS** in production.

## Step 1 - Create the app registration

In the [Microsoft Entra admin center](https://entra.microsoft.com/), open
**Identity -> Applications -> App registrations -> New registration**.

| Field | Value |
|-------|-------|
| Name | `Zymmr` or `Zymmr - <Company Name>` |
| Supported account types | `Accounts in this organizational directory only` |

::: warning
Do not choose a multi-tenant account type unless you specifically need it. Single-tenant
is the right choice for a self-hosted deployment serving one organization.
:::

## Step 2 - Add the web redirect URI

Open the app registration and go to **Authentication -> Platform configurations ->
Add a platform -> Web**. Add the redirect URI:

```text
https://your-zymmr-domain.com/api/method/frappe.integrations.oauth2_logins.login_via_office365
```

## Step 3 - Create a client secret

Go to **Certificates & secrets -> Client secrets -> New client secret**. Add a clear
description and copy the **Value** immediately after creation.

::: warning Use the Value, not the Secret ID
Microsoft shows the secret **Value** only once. Copy it now. Paste the **Value** into
Zymmr - not the Secret ID.
:::

## Step 4 - Configure Office 365 in Zymmr

In Zymmr, open **Admin -> SSO -> Providers** (`/administrator/sso/providers`) and click
**Add Provider**.

| Field | Value |
|-------|-------|
| Preset | `Microsoft / Office 365` |
| Client ID | Application (client) ID from Entra |
| Client Secret | Client secret **Value** from Entra |
| Enable on login page | Checked |

Click **Save**.

Expected result:

1. The provider appears in the SSO Providers list with status **Enabled**.
2. The Zymmr login page shows the Office 365 sign-in button.

## Step 5 - Restrict allowed domains (recommended)

Before inviting users, set which email domains may auto-provision via SSO. See
[SSO Settings](./settings). For example, add `your-company.com`.

## Step 6 - Test login

1. Open the Zymmr login page in a private/incognito window.
2. Click the Office 365 button.
3. Sign in with a Microsoft work/school user from your tenant.
4. Confirm you land in Zymmr.

A first-time user's Zymmr account is created automatically and linked to their Microsoft
account. Logging in again reuses the same Zymmr user (no duplicates).

## Troubleshooting

See the consolidated [Troubleshooting](./troubleshooting) page. Microsoft-specific items:

- **Redirect URI mismatch** - compare the URI in Microsoft's error page with the value in
  the app registration, exactly.
- **Token exchange fails after consent** - confirm Zymmr has the client secret **Value**,
  not the Secret ID.
- **User cannot access the app** - confirm the app is in the correct tenant, the user
  exists there, and the supported account type is correct.
