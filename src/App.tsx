import React, { Component } from 'react';
import styled from "styled-components";

import { BrowserRouter as Router, Route  } from "react-router-dom";
import Home from "./Home";
import DrumKit from "./01-drum-kit/DrumKit";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={DrumKit}/>
        </div>

      </Router>
    );
  }
}

export default App;
