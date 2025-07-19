# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

This project requires **Node.js 20.x** or higher. Make sure you have the correct version installed:

```bash
node --version  # Should be 20.x or higher
```

## Installation

To set up the project, follow these steps:

1. Install dependencies:
   ```bash
   yarn install
   ```

2. If you encounter issues with dependencies or are switching from a different Node.js version, regenerate the `yarn.lock` file:
   ```bash
   rm yarn.lock
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Recent Changes

### React 18 & Node.js 20+ Migration (Latest)

- **React 18.3.1**: Updated to latest React version with new features and performance improvements
- **Node.js 20.x Support**: Updated project to require Node.js 20.x minimum for better performance and security
- **Modern Dependencies**: All packages updated to React 18 compatible versions
- **Improved Type Safety**: Updated TypeScript and type definitions for better development experience

### Component Updates

- **Drag & Drop**: Migrated from `react-beautiful-dnd` to `@hello-pangea/dnd` for React 18 StrictMode compatibility
- **Image Gallery**: Replaced `react-image-lightbox` with `yet-another-react-lightbox` for better React 18 support
- **Form Wizards**: Simplified wizard components using React Bootstrap tabs (removed react-albus dependency)
- **Tree View**: Implemented custom tree view component to replace incompatible deni-react-treeview
- **Maps**: Updated Google Maps components with modern implementation placeholders

### Technical Improvements

- **New JSX Transform**: Updated to use React 18's automatic JSX runtime
- **createRoot API**: Migrated from deprecated ReactDOM.render to createRoot for better performance
- **Modern Hooks**: All components updated to use latest React patterns and hooks
- **Type Compatibility**: Resolved TypeScript issues with Node.js 20+ and updated dependencies
