# Redux Listener Demo

Example React project which uses one component to interact with a Redux store, and another component to listen
for actions dispatched to the store.

Based on [vite-template-redux](https://github.com/reduxjs/redux-templates/tree/master/packages/vite-template-redux)

This project also demonstrates how store slices can be contained in a separate package and combined into a single store when running an app. This allows components in other packages to depend on a specific slice without having knowledge of the application's other state.

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build