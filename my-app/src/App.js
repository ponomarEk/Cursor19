import React from 'react';
import Register from './Components/register/register'
import SignIn from './Components/sign-in/signIn'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
