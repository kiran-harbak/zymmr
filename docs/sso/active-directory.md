---
title: Active Directory SSO Setup
description: Connect Zymmr to Microsoft Active Directory over LDAP/LDAPS so users can sign in with their AD email and password.
head:
  - - meta
    - name: keywords
      content: active directory sso, ad ldap, ldaps, userprincipalname, zymmr sso setup, domain routing
outline: deep
---

# Active Directory SSO Setup

This guide explains how to connect Zymmr to Microsoft **Active Directory** (or an
AD-compatible LDAP directory) over LDAP / LDAPS. Users whose email domain is routed to AD
enter their email and AD password on the **normal Zymmr login form**.

::: warning Active Directory (LDAP) vs Microsoft 365 (OAuth)
These are different. **Active Directory** here validates the password against your AD server
over LDAP using the normal email/password form. **Microsoft 365 / Entra** uses the cloud
**Continue with Office 365** button - see [Microsoft 365](./microsoft-365).
:::

::: info What happens at login
Zymmr does not store AD passwords. Zymmr sends the credentials to AD, AD validates them, and
Zymmr creates or updates the local user by email.
:::

## Before you start

Collect these values from your AD administrator:

| Value | Example |
|-------|---------|
| Server URL | `ldaps://ad.your-company.com:636` or `ldap://ad.your-company.com:389` |
| Base DN / bind account | `zymmr-bind@your-company.com` or `CN=zymmr-bind,OU=Service Accounts,DC=your-company,DC=com` |
| Bind password | Service-account password |
| User search path | `OU=Users,DC=your-company,DC=com` or `CN=Users,DC=your-company,DC=com` |
| Group search path | `OU=Groups,DC=your-company,DC=com` |
| Search string | `(&(objectClass=user)(userPrincipalName={0}))` |
| Routing domain | `your-company.com` |

::: warning Use LDAPS in production
Prefer `ldaps://` so AD credentials are encrypted in transit.
:::

## Recommended AD attribute model

Zymmr's login form is email-first. The cleanest setup matches the email users type to a
single AD attribute:

| Zymmr login value | AD attribute |
|-------------------|--------------|
| `user@your-company.com` | `userPrincipalName=user@your-company.com` |
| User email | `mail=user@your-company.com` |
| Username | `sAMAccountName` or `userPrincipalName` |
| First name | `givenName` |
| Last name | `sn` |

::: tip
If `mail` differs from `userPrincipalName` in your directory, decide which value should
become the Zymmr user email before enabling sign-in. Matching `userPrincipalName` and
`mail` avoids duplicate accounts.
:::

## Step 1 - Open the LDAP admin page

In Zymmr, open **Admin -> SSO -> LDAP** (`/administrator/sso/ldap`).

## Step 2 - Configure the AD server

| Field | Recommended value |
|-------|-------------------|
| Enable LDAP | Checked |
| Directory Type | `Active Directory` |
| Server URL | AD LDAP / LDAPS URL reachable from the Zymmr server |
| Base DN | Bind account UPN or DN |
| Bind Password | Bind account password |
| User Search Path | Subtree or container where users live |
| Group Search Path | Subtree or container where groups live |
| LDAP Search String | `(&(objectClass=user)(userPrincipalName={0}))` |

Choosing **Active Directory** as the Directory Type automatically applies the standard AD
attribute mappings:

| Setting | Default |
|---------|---------|
| Email Field | `mail` (use `userPrincipalName` if `mail` is not populated) |
| Username Field | `userPrincipalName` |
| First Name Field | `givenName` |
| Last Name Field | `sn` |

::: tip The {0} placeholder
`{0}` in the search string is replaced with what the user types into the login form. Keep
the search string aligned with that value (typically `userPrincipalName={0}`).
:::

## Step 3 - Test the connection

Click **Test Connection**. A successful result shows:

```text
Connected and bound successfully.
```

This verifies server reachability and the bind credentials. It does not verify a specific
user's password.

## Step 4 - Add domain routing

In **Domain Routing**, add each email domain that should authenticate through AD, for
example `your-company.com`.

How routing behaves:

- Add/remove actions save immediately.
- `user@your-company.com` routes to AD when `your-company.com` is listed.
- Users from domains not listed here use normal local password login.
- If no domains are configured, all users fall through to local password authentication.

::: warning AD routing vs OIDC allowed domains
AD Domain Routing is **separate** from the OIDC allowed-domain list in
[SSO Settings](./settings).
:::

## Step 5 - Save and test login

Click **Save**, then open the Zymmr login page and sign in with an AD user:

```text
Email:    user@your-company.com
Password: AD password
```

Expected result:

- Login succeeds and lands in Zymmr.
- First login creates one Zymmr user automatically.
- Repeat login reuses the same user (no duplicates).

## Troubleshooting

See the consolidated [Troubleshooting](./troubleshooting) page for "invalid credentials",
bind failures, and search-string issues.
