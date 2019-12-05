import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import Page1 from "./pages/book/page1";
import 'bootstrap/dist/css/bootstrap.min.css';


// import "./pages/landing/landing.scss"

// import logo from './logoClutch.png';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/page1" component={Page1} />

          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;