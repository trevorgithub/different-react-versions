# Mixed React Versions and Compatibility levels

This example demos the ability to load two separate versions of react.

Module Federation allows us to create an adapter which attaches a hooks-friendly version to render a section of the app using modern versions.

- `app1` uses version 18 of React.  It has a local button which maintains state with with a useState hook.  It also reuses the button exposed from app2, and a second button exposed from app3
- `app2` uses version 17 of React. It exposes a button which also maintains state with a useState hook
- `app3` uses version 17 of React. It exposes a button which also maintains state with a useState hook

The adapter consumes both versions of react to "translate" the props into a fresh render. This could be presented as a HOC or federated components could have a legacy export containing the adapter build in.

The intent of this branch is to have two apps (app2 and app3) that share a single version of React (version 17) that co-exists with React 18 in the host.  While the apps work, the React17 instance is not being shared between app2 and app3 when federated into the host.  This can be seen by:
1. Start app (see instructions below)
2. In the console of the developer tools of the host (port 3001), type this command:

window.app3reactButton === window.app2reactButton

The desired output is true, but the actual output is false.

# Running Demo

Run `yarn start`. This will build and serve both `app1`, `app2`, `app3` on ports 3001, 3002 and 3003 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
- [localhost:3003](http://localhost:3003/) (2nd STANDALONE REMOTE)

Forked from the original demo at:

https://github.com/module-federation/module-federation-examples/tree/master/different-react-versions