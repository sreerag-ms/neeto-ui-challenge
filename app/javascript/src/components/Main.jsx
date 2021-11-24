import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "components/Home";

const Main = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
