# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `app` (react based) depends on a component exposed by `shared` app (react based).

## Versioning
As each shared/remote app might have different versions/releases and depends on the user needs different versions needed to be loaded an ability to dynamically loading the shared app was added to this mini project.
Have a look at `packages/app/src/App.jsx`

## Running

First, run `npm run install`, then `npm run build` and `npm run preview` under each `app` and `shared` directory. This will build and serve both `shared` and `app` on ports 5000, 5001 respectively.
To be able to change the versions you need to build two different bundles under the `packages/shared/dist` directory as followings:
`packages/shared/dist/02`
`packages/shared/dist/02`

- HOST (shared): [localhost:5000](http://localhost:5000/)
- REMOTE (app): [localhost:5001](http://localhost:5001/)


