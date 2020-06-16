import React, { useState, useMemo } from "react";
import { UserContext } from "./hooks/UserContext";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Login, Home, PageOne, PageTwo, NoMatch } from './pages/'

import PublicRoute from './hooks/PublicRoute'
import PrivateRoute from './hooks/PrivateRoute'

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (

    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Switch>
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={PageOne} path="/page-1" exact />
          <PrivateRoute component={PageTwo} path="/page-2" exact />

          <PrivateRoute component={NoMatch} path="*" />

        </Switch>
      </UserContext.Provider>

    </BrowserRouter>
  );
}

export default AppRouter;
