---
title: Google Workspace SSO Setup
description: Configure Google / Google Workspace as a Single Sign-On provider for Zymmr so users can sign in with Continue with Google.
head:
  - - meta
    - name: keywords
      content: google sso, google workspace, oauth, oidc, continue with google, zymmr sso setup
outline: deep
---

# Google Workspace SSO Setup

This guide explains how to let users sign in to Zymmr with their Google or Google
Workspace account. After setup, the login page shows a **Continue with Google** button.

::: info What happens at login
Zymmr does not store the user's Google password. Google authenticates the user and sends
Zymmr the user's email and basic profile, then Zymmr creates or links the local user by
email.
:::

## Before you start

You need:

1. Administrator access in Zymmr.
2. Access to the [Google Cloud Console](https://console.cloud.google.com/) for the Google
   account / Workspace that will own the OAuth app.
3. Your public Zymmr URL (for example `https://your-zymmr-domain.com`).
4. A decision on which email domains may auto-provision users (see [SSO Settings](./settings)).

## Redirect URI

Google requires an exact redirect URI. For Zymmr's Google provider it is:

```text
https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_google
```

Replace `your-zymmr-domain.com` with your real Zymmr URL and use **HTTPS** in production.

## Step 1 - Create or select a Google Cloud project

1. Open the Google Cloud Console.
2. Create a new project, or select the project used for this Zymmr deployment.
3. Use a clear name, for example `Zymmr SSO - <Company Name>`.

::: tip
Keep one OAuth project per environment. Production and staging should not share OAuth
credentials.
:::

## Step 2 - Configure the consent screen

In the Google Cloud Console, open **Google Auth platform** and configure **Branding**:

| Field | Recommended value |
|-------|-------------------|
| App name | `Zymmr` or `Zymmr - <Company Name>` |
| User support email | Your admin / support email |
| App logo | Your Zymmr logo, if policy allows |
| Application home page | Your public Zymmr URL |
| Developer contact email | Your admin / support email |

::: warning App name is visible to users
The app name appears on Google's consent screen ("Sign in to ..."). Use your real
product/company name.
:::

Configure **Audience**:

| Audience | Use when |
|----------|----------|
| Internal | Only users inside your Google Workspace organization should sign in. This is the normal enterprise choice. |
| External | Users outside your Workspace organization must sign in, or the project is not under a Google Cloud Organization. |

If the app is **External** and in **Testing** mode, add every tester under
**Audience -> Test users**.

Configure **Data Access / Scopes** with only the minimum profile scopes Zymmr needs:

```text
https://www.googleapis.com/auth/userinfo.email
https://www.googleapis.com/auth/userinfo.profile
```

Do not add Gmail, Drive, Calendar, or admin scopes. Zymmr only needs to identify the
user by email and basic profile.

## Step 3 - Create the OAuth client

Go to **Google Auth platform -> Clients** and create a client.

| Field | Value |
|-------|-------|
| Application type | `Web application` |
| Name | `Zymmr Web Client` |

Add **Authorized JavaScript origins** (scheme + host only, no paths):

```text
https://your-zymmr-domain.com
```

Add **Authorized redirect URIs**:

```text
https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_google
```

After creating the client, copy the **Client ID** and **Client Secret**.

::: warning
The Client ID and Client Secret are different values. Store the secret securely - Google
may only show it once at creation time. Do not paste the Client ID into the secret field.
:::

## Step 4 - Configure Google in Zymmr

In Zymmr, open **Admin -> SSO -> Providers** (`/administrator/sso/providers`) and click
**Add Provider**.

| Field | Value |
|-------|-------|
| Preset | `Google` |
| Client ID | Client ID from Google |
| Client Secret | Client Secret from Google |
| Enable on login page | Checked |

Click **Save**.

Expected result:

1. The provider appears in the SSO Providers list with status **Enabled**.
2. The Zymmr login page shows **Continue with Google**.

::: tip Status says "Missing secret"?
If the provider shows **Missing secret**, edit it and paste the Client Secret again. The
button only appears when both Client ID and a secret are present and the provider is
enabled.
:::

## Step 5 - Restrict allowed domains (recommended)

Before inviting users, set which email domains may auto-provision via SSO. See
[SSO Settings](./settings). For example, add `your-company.com`.

## Step 6 - Test login

1. Open the Zymmr login page in a private/incognito window.
2. Click **Continue with Google**.
3. Select a Google account and approve the consent screen.
4. Confirm you land in Zymmr.

A first-time user's Zymmr account is created automatically. Logging in again with the same
Google account reuses the same Zymmr user (no duplicates).

## Troubleshooting

See the consolidated [Troubleshooting](./troubleshooting) page for `redirect_uri_mismatch`,
`origin_mismatch`, `invalid_client`, and "button does not appear" issues.

## Operational notes

- Keep password login available for `Administrator`.
- Use separate OAuth clients for staging and production.
- Rotate the Client Secret if it is ever exposed.
- Prefer Workspace **Internal** audience when all users are in your organization.
