# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - React 18 & Node.js 20+ Migration

### Added
- **React 18.3.1**: Latest React version with concurrent features and performance improvements
- **@hello-pangea/dnd**: Modern drag-and-drop library replacing react-beautiful-dnd
- **yet-another-react-lightbox**: Modern lightbox component replacing react-image-lightbox
- **Custom Tree View**: React 18 compatible tree view implementation
- **Simplified Wizards**: Custom wizard components using React Bootstrap tabs

### Changed
- **Node.js Version Requirement**: Updated minimum Node.js version to 20.x for better performance and security
- **Dependencies**: Updated all packages to React 18 compatible versions
- **ReactDOM API**: Migrated from deprecated ReactDOM.render to createRoot API
- **JSX Transform**: Updated to React 18's automatic JSX runtime
- **TypeScript**: Updated to version 5.1.6 for better compatibility
- **Testing Libraries**: Updated @testing-library packages to React 18 compatible versions

### Removed
- **react-albus**: Replaced with simplified React Bootstrap tab-based wizards
- **react-beautiful-dnd**: Replaced with @hello-pangea/dnd for React 18 StrictMode compatibility
- **react-image-lightbox**: Replaced with yet-another-react-lightbox
- **deni-react-treeview**: Replaced with custom React 18 compatible implementation
- **google-maps-react**: Replaced with placeholder components (can be updated to @googlemaps/react-wrapper)

### Fixed
- **SASS Compatibility**: Fixed CSS variable issues with Bootstrap compilation
- **TypeScript Compatibility**: Resolved type issues with Node.js 20+ and updated dependencies
- **JWT Decode**: Updated import syntax for jwt-decode v4 compatibility
- **Vector Maps**: Fixed jsvectormap imports for newer version compatibility

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

#### Breaking Changes
- **Node.js 18.x**: No longer supported, minimum version is now 20.x
- **React 17.x**: No longer supported, updated to React 18.3.1
- **Component APIs**: Some third-party component APIs may have changed (wizards, tree view, lightbox)

#### Benefits of React 18 & Node.js 20
- **Performance**: Improved rendering performance with React 18's concurrent features
- **Security**: Latest security updates from Node.js 20.x
- **Developer Experience**: Better TypeScript support and modern tooling
- **Future-Ready**: Prepared for upcoming React and Node.js features

#### Compatibility Notes
- React 18.3.1 is fully compatible with Node.js 20.x
- All major dependencies updated to latest stable versions
- TypeScript compatibility addressed with targeted type fixes
- No breaking changes to core application functionality

## [Unreleased] - Node.js 20.x Upgrade (Previous)

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