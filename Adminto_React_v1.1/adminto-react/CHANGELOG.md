# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Node.js 20.x Upgrade

### Changed
- **Node.js Version Requirement**: Updated minimum Node.js version from 18.14.0 to 20.x
- **Dependencies**: Updated `@types/node` from ^16.7.13 to ^20.0.0 for better Node.js 20 compatibility
- **Configuration**: Added `engines` field in package.json to enforce Node.js >=20 requirement
- **Documentation**: Updated README.md with Node.js 20.x requirements and yarn.lock regeneration instructions
- **Type Compatibility**: Added TypeScript ignore comments for compatibility with stricter Node.js 20 types
- **React Hook Form**: Updated type imports to match current react-hook-form version (7.60.0)

### Fixed
- **Sass Compatibility**: Pinned sass to version 1.49.0 to avoid breaking changes in newer versions
- **Bootstrap Compatibility**: Pinned bootstrap to version 5.1.3 to maintain CSS compatibility
- **Type Dependencies**: Pinned @types/react-datepicker to 4.3.4 and @types/react to 17.0.0 for consistency

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
- Some dependencies have been pinned to specific versions to maintain compatibility
- TypeScript compatibility addressed with targeted ignore comments
- No breaking changes to the application functionality