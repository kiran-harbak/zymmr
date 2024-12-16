---
title: Local Installation
description: Guide for setting up Zymmr in a local development environment
head:
  - - meta
    - name: keywords
      content: installation, setup, zymmr, development, docker, prerequisites
---

# Local Installation

::: warning Local Setup
This guide is for local development and testing purposes only. For production environments, please [contact our team](/contact-us) for a managed solution.
:::

## Prerequisites

Before starting the installation, ensure you have all required software installed on your system.

### Required Software

#### 1. Docker & Docker Compose

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes both Docker Engine and Docker Compose)
  - [Windows Installation Guide](https://docs.docker.com/desktop/install/windows-install/)
  - [macOS Installation Guide](https://docs.docker.com/desktop/install/mac-install/)
  - [Linux Installation Guide](https://docs.docker.com/desktop/install/linux-install/)

#### 2. Node.js

- Install [Node.js](https://nodejs.org/) (version 18 or higher)
- We recommend using [nvm](https://github.com/nvm-sh/nvm) for Node.js version management

#### 3. Git

- Install [Git](https://git-scm.com/downloads)
  - [Windows](https://git-scm.com/download/win)
  - [macOS](https://git-scm.com/download/mac)
  - [Linux](https://git-scm.com/download/linux)

### System Requirements

::: info Minimum Requirements
These are the minimum requirements for running Zymmr in development mode:
:::

- **CPU**: 2+ cores
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 20GB free space
- **OS**:
  - Windows 10/11 Pro or Enterprise
  - macOS 12 or later
  - Ubuntu 20.04 or later
- **Network**: Stable internet connection

## Installation Steps

::: tip Source Code
The source code is available on GitHub: [zymmr/zymmr-docker](https://github.com/zymmr/zymmr-docker)
:::

1. Clone the repository:

```bash
git clone https://github.com/zymmr/zymmr-docker.git
cd zymmr-docker
```

2. Set the site name and start containers:

```bash
set SITE_NAME=abc.zymmr.com && docker-compose up -d
```

3. Access Zymmr at `http://<server-ip>`

### Linux Setup

1. Clone the repository:

```bash
git clone https://github.com/zymmr/zymmr-docker.git
cd zymmr-docker
```

2. Set the site name and start containers:

```bash
SITE_NAME=abc.zymmr.com docker-compose up -d
```

3. Access Zymmr at `http://<server-ip>`

## Troubleshooting

### Common Issues

1. **Port Conflicts**

```bash
# Check for port usage
sudo lsof -i :3000
sudo lsof -i :5432
```

2. **Docker Issues**

```bash
# View logs
docker-compose logs -f app

# Restart services
docker-compose restart
```

::: tip Need Help?
If you encounter any issues during development:

1. Check our [FAQ](/guide/faq#installation-setup)
2. [Report an Issue](https://github.com/zymmr/zymmr-docker/issues)
   :::
