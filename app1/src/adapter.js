import React from 'react';

class Adapter extends React.Component {
  init = hydrate => {
    (async () => {
      const { componentImporter, reactImporter, reactDomImporter, children, ...rest } = this.props;
      const AdapterReactDOM = (await reactDomImporter()).default;
      const AdapterReact = (await reactImporter()).default;
      const RemoteComponent = await componentImporter();
      const renderMethod = hydrate ? AdapterReactDOM.hydrate : AdapterReactDOM.render;
      renderMethod(AdapterReact.createElement(RemoteComponent.default, rest, children), this.refHold);
    })();
  };
  componentDidUpdate() {
    this.init(true);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div
        style={{ border: '1px red solid', padding: '10px', margin: '20px 0' }}
        ref={ref => (this.refHold = ref)}
      />
    );
  }
}

export default Adapter;
