import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "src/forms/SignUp";
import SignIn from "src/forms/SignIn";

type Props = {};
const App: React.FC<Props> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
