import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./auth/PrivateRoute";
import NotFound from "./components/NotFound";
const App = () => {
     return (
          <Router>
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    {/* <Route path="/SignUp" component={SignUp}/> */}
                    <Route component={NotFound} />
               </Switch>
          </Router>
     );
};

export default App;
