import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/superhero-details/:heroId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    heros: state.heros,
    search: state.search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
