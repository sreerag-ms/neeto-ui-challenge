import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Wrapper from "Common/Wrapper";
import Contacts from "components/Contacts";
import Notes from "components/Notes";

const Main = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/notes"
            render={() => (
              <Notes
                isSideMenuOpen={isSideMenuOpen}
                setIsSideMenuOpen={setIsSideMenuOpen}
              />
            )}
          />
          <Route
            exact
            path="/contacts"
            render={() => (
              <Contacts
                isSideMenuOpen={isSideMenuOpen}
                setIsSideMenuOpen={setIsSideMenuOpen}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Notes
                isSideMenuOpen={isSideMenuOpen}
                setIsSideMenuOpen={setIsSideMenuOpen}
              />
            )}
          />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Main;
