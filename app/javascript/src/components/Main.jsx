import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Contacts from "components/Contacts";
import Notes from "components/Notes";
import Wrapper from "components/Wrapper";
import SideMenuStatusContext from "contexts/sideMenuStatus";

const Main = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <SideMenuStatusContext.Provider value={[showSideMenu, setShowSideMenu]}>
        <Wrapper>
          <Switch>
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/" component={Notes} />
          </Switch>
        </Wrapper>
      </SideMenuStatusContext.Provider>
    </BrowserRouter>
  );
};

export default Main;
