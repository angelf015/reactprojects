# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Node.js 20 LTS Compatibility Update

### ✅ Changed
- Updated `.node-version` from 18.14.0 to 20.x for Node.js 20 LTS compatibility
- Updated multiple dependencies for React 18 and Node 20 compatibility:
  - Updated `axios` from ^0.25.0 to ^1.6.0
  - Added missing peer dependencies: `@popperjs/core`, `immutable`, `nouislider`, `prop-types`
  - Updated TypeScript support packages: `@types/node` to ^20.10.0, `@types/react` to ^18.2.0
  - Updated `react-bootstrap` from ^2.1.1 to ^2.9.0
  - Updated testing libraries: `@testing-library/dom` to ^9.3.0

### 🔄 Replaced
- Replaced `react-beautiful-dnd` with `@hello-pangea/dnd` (^16.3.0) for React 18 compatibility
- Updated drag-and-drop imports in `src/pages/apps/Tasks/Board/index.tsx`

### 🐛 Fixed
- Fixed nouislider CSS import path from `distribute/` to `dist/` in `src/pages/uikit/RangeSlider/index.tsx`
- Resolved Sass compilation errors with Bootstrap CSS custom properties by overriding problematic variables in `_variables.scss`
- Added TypeScript workarounds for react-bootstrap component compatibility issues
- Created `.gitignore` file to exclude build artifacts

### 📝 Updated
- Updated README.md to reflect Node 20.x requirement
- Regenerated `yarn.lock` for updated dependencies

### ⚠️ Known Issues
- Some peer dependency warnings remain for legacy packages that haven't been updated for React 18 (google-maps-react, react-image-lightbox, etc.)
- TypeScript warnings about unsupported version (using 4.9.5 vs supported <4.6.0)
- Applied temporary TypeScript workarounds (`@ts-ignore`) for react-bootstrap components due to React 18 type incompatibilities

### 💡 Notes
- The project is now compatible with Node.js 20 LTS while maintaining React 18.2.0
- All major functionality has been preserved
- Build process completes successfully
- Consider updating remaining legacy packages in future releases for full React 18 compatibility