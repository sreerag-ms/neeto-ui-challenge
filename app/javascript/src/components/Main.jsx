import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";

import Home from "./Home";
import Wrapper from "./Wrapper";

const Main = () => {
  useEffect(() => {
    initializeLogger();
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Wrapper>
        <Switch>
          <Route exact path="/notes" component={Home} />
          <Route exact path="/contacts" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Main;
