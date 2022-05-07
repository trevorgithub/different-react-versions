import React from 'react';
import Adapter from './adapter';

import Button from "./Button";

const RemoteButton = React.lazy(() => import('app2/Button'));

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Basic Host-Remote</h1>
        <div>{`React version in app1: ${React.version}`}</div>

        <Adapter
          importer={() => import('app2/Button')}
        >
        </Adapter>
        {/* Below code fails, without using adapter because it uses a hook */}
        {/* <React.Suspense fallback="Loading Button">
          <RemoteButton />
        </React.Suspense> */}

        <Button/>
      </div>
    );
  }
}

export default App;
