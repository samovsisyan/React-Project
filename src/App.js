import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;