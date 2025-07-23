# 📦 npm Cheatsheet

A comprehensive reference guide for npm (Node Package Manager), including package management, scripts, and best practices.

## 🚀 Getting Started

### Installation

```bash
# npm comes with Node.js
# Check versions
node --version
npm --version

# Update npm
npm install -g npm@latest

# Install specific version
npm install -g npm@8.19.0
```

### Project Initialization

```bash
# Initialize new project
npm init

# Initialize with defaults
npm init -y

# Initialize with specific values
npm init --yes --name my-project --version 1.0.0
```

## 📦 Package Management

### Installing Packages

```bash
# Install package
npm install package-name
npm i package-name

# Install as dependency
npm install package-name --save
npm install package-name -S

# Install as dev dependency
npm install package-name --save-dev
npm install package-name -D

# Install globally
npm install package-name --global
npm install package-name -g

# Install specific version
npm install package-name@1.2.3
npm install package-name@latest
npm install package-name@next

# Install multiple packages
npm install package1 package2 package3

# Install from GitHub
npm install user/repo
npm install user/repo#branch
npm install user/repo#commit-hash

# Install from local path
npm install ../local-package
npm install file:../local-package

# Install from tarball
npm install https://example.com/package.tgz
```

### Removing Packages

```bash
# Remove package
npm uninstall package-name
npm remove package-name
npm rm package-name

# Remove global package
npm uninstall -g package-name

# Remove multiple packages
npm uninstall package1 package2 package3
```

### Updating Packages

```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name

# Update global packages
npm update -g

# Update to latest version (ignoring semver)
npm install package-name@latest

# Interactive updates
npx npm-check -u
```

### Package Information

```bash
# List installed packages
npm list
npm ls

# List global packages
npm list -g

# Show package info
npm info package-name
npm view package-name

# Show package versions
npm view package-name versions

# Show package dependencies
npm view package-name dependencies

# Show package repository
npm view package-name repository.url
```

## 📋 Scripts

### Package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "clean": "rm -rf dist/",
    "prebuild": "npm run clean",
    "postbuild": "echo 'Build completed!'",
    "prepublishOnly": "npm test && npm run lint",
    "prepare": "husky install"
  }
}
```

### Running Scripts

```bash
# Run script
npm run script-name
npm start
npm test

# Run with arguments
npm run build -- --mode development

# Run multiple scripts
npm run clean && npm run build

# Run script in different environment
NODE_ENV=production npm run build

# Run script with specific Node version
npx node@16 npm run build
```

### Pre/Post Scripts

```bash
# Pre-scripts (run before main script)
npm run build  # Runs: prebuild, build, postbuild

# Post-scripts (run after main script)
npm run test   # Runs: pretest, test, posttest

# Only scripts (run instead of main script)
npm run publish  # Runs: prepublishOnly (instead of publish)
```

## 🔧 Configuration

### npm Configuration

```bash
# View configuration
npm config list
npm config list --json

# Get specific config
npm config get registry
npm config get prefix

# Set configuration
npm config set registry https://registry.npmjs.org/
npm config set prefix ~/.npm-global

# Delete configuration
npm config delete registry

# Edit configuration file
npm config edit

# Set project-specific config
npm config set package-name:key value
```

### .npmrc File

```bash
# Global .npmrc (~/.npmrc)
registry=https://registry.npmjs.org/
prefix=~/.npm-global
init-author-name=Your Name
init-author-email=your.email@example.com
init-license=MIT

# Project .npmrc (.npmrc in project root)
save-exact=true
package-lock=true
audit=false
fund=false
```

### Environment Variables

```bash
# Set environment variable
NODE_ENV=production npm run build

# Use in scripts
{
  "scripts": {
    "build": "NODE_ENV=production webpack",
    "dev": "NODE_ENV=development nodemon"
  }
}
```

## 🔍 Package.json

### Basic Structure

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "description": "A brief description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["keyword1", "keyword2"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/user/repo.git"
  },
  "bugs": {
    "url": "https://github.com/user/repo/issues"
  },
  "homepage": "https://github.com/user/repo#readme",
  "dependencies": {
    "package-name": "^1.0.0"
  },
  "devDependencies": {
    "dev-package": "^2.0.0"
  },
  "peerDependencies": {
    "react": ">=16.0.0"
  },
  "optionalDependencies": {
    "optional-package": "^1.0.0"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },
  "os": ["linux", "darwin"],
  "cpu": ["x64"],
  "private": true,
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  }
}
```

### Dependencies Types

```json
{
  "dependencies": {
    "package": "^1.0.0"        // Required for production
  },
  "devDependencies": {
    "package": "^1.0.0"        // Required for development
  },
  "peerDependencies": {
    "package": "^1.0.0"        // Required by consuming package
  },
  "optionalDependencies": {
    "package": "^1.0.0"        // Optional dependency
  },
  "bundledDependencies": [
    "package-name"             // Bundled with package
  ]
}
```

## 🔒 Security

### Audit Commands

```bash
# Audit dependencies
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities (including dev dependencies)
npm audit fix --force

# Generate audit report
npm audit --json > audit-report.json

# Ignore specific vulnerabilities
npm audit --audit-level moderate

# Update package-lock.json
npm audit fix --package-lock-only
```

### Security Best Practices

```bash
# Use exact versions for security
npm install package-name --save-exact

# Use npm ci for CI/CD
npm ci

# Check for outdated packages
npm outdated

# Use npm-check for interactive updates
npx npm-check -u

# Use npm audit in CI
npm audit --audit-level high
```

## 📊 Publishing

### Publishing Packages

```bash
# Login to npm
npm login

# Check who you're logged in as
npm whoami

# Publish package
npm publish

# Publish with specific tag
npm publish --tag beta

# Publish scoped package
npm publish --access public

# Unpublish package (within 72 hours)
npm unpublish package-name@1.0.0

# Deprecate package
npm deprecate package-name@1.0.0 "This package is deprecated"
```

### Package Versioning

```bash
# Bump patch version (1.0.0 -> 1.0.1)
npm version patch

# Bump minor version (1.0.0 -> 1.1.0)
npm version minor

# Bump major version (1.0.0 -> 2.0.0)
npm version major

# Set specific version
npm version 1.2.3

# Version with message
npm version patch -m "Fix bug in authentication"

# Version without git tag
npm version patch --no-git-tag-version
```

## 🛠️ Advanced Commands

### Workspaces

```json
{
  "name": "my-workspace",
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}
```

```bash
# Install dependencies in workspace
npm install

# Run script in all workspaces
npm run build --workspaces

# Run script in specific workspace
npm run build --workspace=package-name

# Add dependency to specific workspace
npm install lodash --workspace=package-name
```

### Package Lock

```bash
# Generate package-lock.json
npm install

# Install from package-lock.json
npm ci

# Update package-lock.json
npm install --package-lock-only

# Remove package-lock.json
rm package-lock.json
```

### Cache Management

```bash
# View cache info
npm cache verify

# Clean cache
npm cache clean --force

# Add to cache
npm cache add package-name@1.0.0

# List cache
npm cache ls
```

## 🔍 Troubleshooting

### Common Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for broken packages
npm ls

# Rebuild packages
npm rebuild

# Check npm configuration
npm config list

# Reset npm configuration
npm config set registry https://registry.npmjs.org/
```

### Debugging

```bash
# Enable verbose logging
npm install --verbose

# Show npm logs
npm logs

# Show specific package logs
npm logs package-name

# Run with debug info
DEBUG=* npm install
```

## 📚 Best Practices

### Package.json Best Practices

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "description": "Clear, concise description",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write src/",
    "prepare": "npm run build",
    "prepublishOnly": "npm test && npm run lint"
  },
  "keywords": ["relevant", "keywords"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/user/repo.git"
  },
  "bugs": {
    "url": "https://github.com/user/repo/issues"
  },
  "homepage": "https://github.com/user/repo#readme",
  "engines": {
    "node": ">=14.0.0"
  },
  "private": false
}
```

### Dependency Management

```bash
# Use exact versions for critical dependencies
npm install critical-package --save-exact

# Use ranges for flexible updates
npm install flexible-package@^1.0.0

# Use latest for development tools
npm install dev-tool@latest --save-dev

# Regular dependency audits
npm audit
npm outdated
npm update
```

### Scripts Best Practices

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.js",
    "build": "npm run clean && npm run compile",
    "compile": "tsc",
    "clean": "rimraf dist",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "type-check": "tsc --noEmit",
    "prepublishOnly": "npm run test && npm run lint && npm run build",
    "prepare": "husky install"
  }
}
```

## 🔗 Useful Resources

- [npm Documentation](https://docs.npmjs.com/)
- [npm CLI Commands](https://docs.npmjs.com/cli/v8/commands)
- [package.json Guide](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [npm Security](https://docs.npmjs.com/about-audit-reports)

---

**Happy packaging! 📦** 