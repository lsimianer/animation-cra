import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing/Landing";
// import "./pages/landing/landing.scss"

// import logo from './logoClutch.png';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;