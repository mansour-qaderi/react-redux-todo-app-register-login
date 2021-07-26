import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss'
import LoginPage from './components/PageComponents/loginPage/login';
import Signin from './components/PageComponents/signinPage/signin';
import HomePage from './components/homePage';
import { useSelector } from "react-redux";
import { Test } from './components/test'


export default function App() {

  const isAuthenticated = useSelector((state) => state.user.userAccessed)

  function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
    if (isAuthenticated === true) {
      return <Route {...children} render={props => <Component {...props} />} />;
    }
    return <Redirect to="/login" />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/test'>
          <Test />
        </Route>

        <PrivateRoute
          exact
          path="/"
          component={HomePage}
          isAuthenticated={isAuthenticated}
        />

        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/signin'>
          <Signin />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


    // {/* <Route path='/' component={LoginPage} exact />
    // <Route path='/home' component={HomePage}/> */}
    // {/* <Route component={Error} /> */} // use this route for every page

    // // <Navbar /> <Switch></Switch>   use this route for every page