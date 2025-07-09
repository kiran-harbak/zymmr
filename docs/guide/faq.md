---
title: Frequently Asked Questions
description: Common questions and answers about Zymmr installation, setup, and usage
head:
  - - meta
    - name: keywords
      content: FAQ, troubleshooting, common issues, zymmr, installation, setup
---

# Frequently Asked Questions

## Installation & Setup

### General Questions

#### Q: Can I use Zymmr for production without contacting support?

No, for production environments, please contact our [support team](/contact-us). We provide a fully managed solution for production use.

#### Q: What's the difference between production and local setup?

Local setup is for local testing only. Production setup includes managed hosting, security updates, backups, and technical support.

### Docker Setup

#### Q: Docker containers won't start. What should I check?

1. Ensure Docker is running
2. Check port conflicts (3000, 5432)
3. Verify system requirements
4. Check Docker logs: `docker-compose logs -f`

#### Q: How do I resolve port conflicts?

```bash
# Check which process is using the port
sudo lsof -i :3000
sudo lsof -i :5432

# Either stop the conflicting process or change ports
docker-compose down
# Edit docker-compose.yml to use different ports
docker-compose up -d
```

#### Q: How do I install Node.js using nvm?

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js
nvm install 18
nvm use 18
```

#### Q: How do I update environment variables?

1. Stop the containers:

```bash
docker-compose down
```

2. Edit `.env` file with your preferred editor
3. Restart containers:

```bash
docker-compose up -d
```

## Data Migration {#migration}

### Common Migration Issues

#### Q: How do I handle failed migrations?

1. Check source data format
2. Verify field mappings
3. Review error logs
4. Start with a small test dataset

#### Q: What's the recommended way to test migrations?

1. Create a backup of your data
2. Use a test environment
3. Start with a small subset of data
4. Validate results before full migration

## Performance

#### Q: How can I improve local development performance?

1. Increase Docker resources:

   - Open Docker Desktop
   - Go to Settings > Resources
   - Adjust CPU, Memory, and Swap

2. Use SSD storage
3. Close unnecessary applications
4. Ensure adequate RAM allocation (minimum 4GB)

#### Q: System feels slow after running for a while?

1. Clear Docker cache:

```bash
docker system prune -a
```

2. Restart Docker service:

```bash
# Windows
Restart-Service docker

# Linux
sudo systemctl restart docker
```

3. Check system resources:

```bash
docker stats
```

## Getting Help

### Support Channels

#### Q: Where can I get help?

1. Check this FAQ
2. [GitHub Issues](https://github.com/kiran-harbak/zymmr/issues)

#### Q: How do I report bugs?

1. Check existing issues
2. Provide reproduction steps
3. Include error logs
4. Share system information
5. [Create an issue](https://github.com/kiran-harbak/zymmr/issues/new)

::: tip Need More Help?
Can't find what you're looking for? Contact our support team at [contact us](/contact-us)
:::
