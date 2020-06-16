# React-dom-router private & public routes with hooks.

React Router ships with a few [hooks](https://reactjs.org/docs/hooks-intro.html) that let you access the state of the router and perform navigation from inside your components.
I'm created a `publicRoute` & `prvateRoute` for user authentification, Private routes priotect with auth token PPublic routes are access without any authentication`.

Please note: You need to be using React >= 16.8 in order to use any of these hooks!

- [`mainRoute`](#mainRoute)
- [`privateRoute`](#privateRoute)
- [`publicRoute`](#publicRoute)
- [`authentication`](#authentication)
- [`projectInstallation`](#projectInstallation)
- [`loginCredentials`](#loginCredentials)

<a id="mainRoute" />

## `mainRoute`

The main `Route` to navigate page.
```jsx
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
          <PublicRoute component={NoMatch} path="*" />

        </Switch>
      </UserContext.Provider>

    </BrowserRouter>
  );
}

export default AppRouter;
```

<a id="privateRoute">

## `privateRoute`

Private route allowes you only the page logged in.

```jsx 
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../middleware/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (isLogin() ? <Component {...props} /> : <Redirect to="/" />)} />
)

export default PrivateRoute;
```

<a id="publicRoute">

## `publicRoute`

Public route no need for the authentification it call access without login.

```jsx 
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../middleware/auth';

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (isLogin() && restricted ? <Redirect to="/home" /> : <Component {...props} />)} />
)

export default PublicRoute;
```

<a id="authentication">

## `authentication`

Autthentication actions `auth.js`

```jsx 

// LOGIN
export const login = (props, d) => {
    if (d.username === 'user' && d.password === 'password') {
        localStorage.setItem('auth', d)
        props.history.push('/home');
    }
}

// LOGOUT
export const logout = () => localStorage.removeItem('auth')

// LOGIN STATUS
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}

```

<a id="authentication">

## `projectInstallation`

To install the project in your local device.

- `clone https://github.com/sreenathkspanikker/react-private-public-routes.git` 
- `npm install / yarn add`
- `npm start / yarn start `

<a id="loginCredentials">

## `loginCredentials`

- `username: user`
- `password: password`

