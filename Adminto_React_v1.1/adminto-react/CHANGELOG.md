# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Node.js 20.x Upgrade

### Changed
- **Node.js Version Requirement**: Updated minimum Node.js version from 18.14.0 to 20.x
- **Dependencies**: Updated `@types/node` from ^16.7.13 to ^20.0.0 for better Node.js 20 compatibility
- **Configuration**: Added `engines` field in package.json to enforce Node.js >=20 requirement
- **Documentation**: Updated README.md with Node.js 20.x requirements and yarn.lock regeneration instructions

### Migration Guide

#### For Developers
1. **Upgrade Node.js**: Ensure you have Node.js 20.x or higher installed
   ```bash
   node --version  # Should output 20.x or higher
   ```

2. **Regenerate Dependencies**: After upgrading Node.js, regenerate the yarn.lock file
   ```bash
   rm yarn.lock
   yarn install
   ```

3. **Verify Installation**: Ensure the project builds correctly
   ```bash
   yarn build
   ```

#### Benefits of Node.js 20.x
- Improved performance and stability
- Latest JavaScript features support
- Better security updates
- Enhanced development experience

#### Compatibility Notes
- React 18.2.0 is fully compatible with Node.js 20.x
- All existing dependencies work correctly with the new Node.js version
- No breaking changes to the application code