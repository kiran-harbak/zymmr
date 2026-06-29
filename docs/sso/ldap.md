---
title: LDAP SSO Setup
description: Connect Zymmr to an LDAP directory such as OpenLDAP so users can sign in with their directory email and password.
head:
  - - meta
    - name: keywords
      content: ldap sso, openldap, directory authentication, ldaps, zymmr sso setup, domain routing
outline: deep
---

# LDAP SSO Setup

This guide explains how to connect Zymmr to an LDAP directory (such as OpenLDAP or another
non-Active-Directory LDAP server). Users whose email domain is routed to LDAP enter their
email and directory password on the **normal Zymmr login form** - there is no separate
button.

::: info What happens at login
Zymmr does not store LDAP passwords. Zymmr sends the credentials to your directory, the
directory validates them, and Zymmr creates or updates the local user by email.
:::

::: tip Using Microsoft Active Directory?
Use the [Active Directory](./active-directory) guide, which uses the Active Directory
preset and attribute model.
:::

## Before you start

Collect these values from your directory administrator:

| Value | Example |
|-------|---------|
| Server URL | `ldap://ldap.your-company.com:389` or `ldaps://ldap.your-company.com:636` |
| Base DN (bind DN) | `cn=admin,dc=your-company,dc=com` |
| Bind password | Service-account password |
| User search path | `ou=users,dc=your-company,dc=com` |
| Group search path | `ou=groups,dc=your-company,dc=com` |
| Search string | `(&(objectclass=posixAccount)(mail={0}))` |
| Routing domain | `your-company.com` |

::: warning Use LDAPS in production
Prefer `ldaps://` (LDAP over TLS) whenever your directory supports it, so credentials are
encrypted in transit.
:::

## Step 1 - Open the LDAP admin page

In Zymmr, open **Admin -> SSO -> LDAP** (`/administrator/sso/ldap`).

## Step 2 - Configure the LDAP server

| Field | Recommended value |
|-------|-------------------|
| Enable LDAP | Checked |
| Directory Type | `OpenLDAP` (or `Custom` to map fields manually) |
| Server URL | LDAP / LDAPS URL reachable from the Zymmr server |
| Base DN | Bind account DN |
| Bind Password | Bind account password |
| User Search Path | Subtree where users are searched |
| Group Search Path | Subtree where groups are searched |
| LDAP Search String | `(&(objectclass=posixAccount)(mail={0}))` |

::: tip The {0} placeholder
In the search string, `{0}` is replaced with what the user types into the login form.
Because Zymmr's login form is email-first, match on the email attribute (for example
`mail={0}`).
:::

### Field mappings

Choosing **OpenLDAP** as the Directory Type automatically applies standard attribute
mappings. Choose **Custom** to edit them. The default OpenLDAP mappings are:

| Setting | Default |
|---------|---------|
| Email Field | `mail` |
| Username Field | `uid` |
| First Name Field | `givenName` |
| Last Name Field | `sn` |

## Step 3 - Test the connection

Click **Test Connection**. A successful result shows:

```text
Connected and bound successfully.
```

This verifies Zymmr can reach the directory and bind with the service account. It does not
prove a specific end user can log in - test that from the login page after saving.

## Step 4 - Add domain routing

In **Domain Routing**, add each email domain that should authenticate through LDAP, for
example `your-company.com`.

How routing behaves:

- Add/remove actions save immediately.
- `user@your-company.com` routes to LDAP when `your-company.com` is listed.
- Users from domains not listed here use normal local password login.
- If no domains are configured, all users fall through to local password authentication.

::: warning LDAP routing vs OIDC allowed domains
LDAP Domain Routing is **separate** from the OIDC allowed-domain list in
[SSO Settings](./settings). Routing decides who authenticates against LDAP; the SSO
Settings list decides who can auto-provision via OIDC providers.
:::

## Step 5 - Save and test login

Click **Save** to persist the LDAP server settings, then open the Zymmr login page and
sign in with a directory user:

```text
Email:    user@your-company.com
Password: directory password
```

Expected result:

- Login succeeds and lands in Zymmr.
- First login creates one Zymmr user automatically.
- Repeat login reuses the same user (no duplicates).

## Troubleshooting

See the consolidated [Troubleshooting](./troubleshooting) page for bind failures, invalid
credentials, and "wrong attributes" issues.
