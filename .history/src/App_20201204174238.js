import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return <h1>Im a class component {this.state.count}</h1>;
  }
}

export default App;
