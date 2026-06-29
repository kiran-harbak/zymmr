---
title: Single Sign-On (SSO) Overview
description: How Single Sign-On works in Zymmr - OIDC providers (Google, Microsoft 365, Okta), LDAP, Active Directory, just-in-time provisioning, and domain controls.
head:
  - - meta
    - name: keywords
      content: sso, single sign-on, oidc, oauth, ldap, active directory, google workspace, microsoft 365, okta, zymmr authentication
outline: deep
---

# Single Sign-On (SSO) Overview

Single Sign-On (SSO) lets your team sign in to Zymmr with your organization's existing
credentials instead of a separate Zymmr password. You can connect Zymmr to identity
providers such as **Google Workspace**, **Microsoft 365 / Entra**, **Okta** (and other
OIDC providers), as well as **LDAP** and **Microsoft Active Directory**.

::: info Who this section is for
The setup guides are written for your **IT / administrator team**. The
[Signing in with SSO](./signing-in) page is written for **everyday users**.
:::

::: warning Availability
SSO is available for **self-hosted Zymmr deployments**. Configuration is done from the
Zymmr admin area by an Administrator.
:::

## How Zymmr does SSO

Zymmr never stores your users' Google, Microsoft, Okta, or directory passwords. The
identity provider authenticates the user, tells Zymmr who they are (by email), and Zymmr
creates or links a local Zymmr user.

There are two authentication paths:

| Path | Methods | How the user signs in |
|------|---------|------------------------|
| **OIDC / OAuth2** | Google, Microsoft 365, Okta / Custom | Click a **Continue with &lt;provider&gt;** button on the login page |
| **LDAP / Active Directory** | OpenLDAP, Active Directory, custom LDAP | Enter email + directory password in the normal login form |

At the login page:

- **Click a provider button** (Continue with Google / Microsoft / Okta) -> the OIDC
  provider authenticates the user.
- **Enter email + password** -> if the email domain is routed to LDAP, Zymmr validates
  against your LDAP / Active Directory server; otherwise it uses the local Zymmr password.

In all cases, after authentication Zymmr creates or links the user account and signs them
in.

## Key concepts

### Just-in-time (JIT) provisioning

The first time a user signs in through SSO, Zymmr automatically creates their Zymmr user
account - no manual registration is needed. Subsequent logins reuse the same account.

### Matching by email

Zymmr links accounts by **email address**. If a user's identity-provider email matches an
existing Zymmr user, they sign in as that user. If the email is different, Zymmr treats it
as a new, separate user.

### Allowed domains for auto-provisioning (OIDC)

You can restrict **which email domains** are allowed to auto-create new accounts through
OIDC SSO. See [SSO Settings](./settings).

- Empty list - any email domain can auto-provision a new user via SSO.
- Populated list - only matching email domains can auto-create users via SSO.
- Existing Zymmr users are **not** blocked by this list. To revoke access, disable the
  Zymmr user account.

::: tip Two different domain lists
The **Allowed domains** list (OIDC auto-provisioning) is separate from **LDAP Domain
Routing** (which email domains authenticate against your LDAP/AD server). Configure each
where its provider is set up.
:::

### Administrator escape hatch

The built-in **Administrator** account always keeps password login available. This
prevents lockout if your identity provider is ever unreachable.

## Redirect (callback) URLs

When you register Zymmr in your identity provider, you must add an exact **redirect URI**.
Replace `https://your-zymmr-domain.com` with your real Zymmr URL.

| Provider | Redirect URI |
|----------|--------------|
| Google | `https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_google` |
| Microsoft 365 | `https://your-zymmr-domain.com/api/method/frappe.integrations.oauth2_logins.login_via_office365` |
| Custom OIDC (Okta, Auth0, etc.) | `https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_frappe` |

::: warning The redirect URI must match exactly
The value you register in the provider must match the URL Zymmr sends, character for
character (scheme, host, path, no trailing slash). A mismatch is the most common SSO
error.
:::

## Setup guides

Configure each provider from the Zymmr admin area under **SSO**:

- [Google Workspace](./google)
- [Microsoft 365 / Entra](./microsoft-365)
- [Custom OIDC (Okta, Auth0, Keycloak)](./custom-oidc)
- [LDAP (OpenLDAP)](./ldap)
- [Active Directory](./active-directory)
- [SSO Settings (allowed domains)](./settings)

For everyday users: [Signing in with SSO](./signing-in).
Having problems? See [Troubleshooting](./troubleshooting).

## What's not included in this release

| Capability | Status |
|------------|--------|
| SAML 2.0 | Not in this release (OIDC and LDAP/AD only) |
| Single Logout (IdP-initiated / back-channel) | Not included - signing out clears the Zymmr session only |
| OIDC auto-discovery (`.well-known/openid-configuration`) | Planned; custom providers currently need endpoints entered manually |
| Identity-provider group to Zymmr role mapping | Planned |
