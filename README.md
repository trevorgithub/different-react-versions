# Mixed React Versions and Compatibility levels

This example demos the ability to load two separate versions of react.

Module Federation allows us to create an adapter which attaches a hooks-friendly version to render a section of the app using modern versions.

- `app1` uses version 18 of React.  It has a local button which maintains state with with a useState hook.  It also reuses the button exposed from app2
- `app2` uses version 17 of React. It exposes a button which also maintains state with a useState hook

The adapter consumes both versions of react to "translate" the props into a fresh render. This could be presented as a HOC or federated components could have a legacy export containing the adapter build in.

# Running Demo

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)

Forked from the original demo at:

https://github.com/module-federation/module-federation-examples/tree/master/different-react-versions