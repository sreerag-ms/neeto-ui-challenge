import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Contacts from "components/Contacts";
import Notes from "components/Notes";
import Wrapper from "components/Wrapper";

const Main = () => {
  useEffect(() => {
    initializeLogger();
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Wrapper>
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/" component={Notes} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Main;
