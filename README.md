React Foundation with SSR
=========================

This foundation uses typescript and implements server side rendering with react router.

## Scripts

1. `webpack:client`: Builds the client js bundle and stays watching files.
2. `webpack:server`: Builds the server js bundle and stays watching files.
3. `webpack:start`: Runs the built server_bundle.js, starting a web server.
4. `dev`: Runs script 1, 2, and 3 in parallel. This means that the server and client bundle get built and the the server gets ran and watched.
5. `build`: Builds server and client bundle in the build/ folder, useful for deployment.

## Getting started

1. `npm install`
2. `npm run webpack:dev`
3. Open your browser in the local address displayed in the console.