import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Register, Greeting } from "pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/greeting" component={Greeting} />
      </div>
    );
  }
}

export default App;
