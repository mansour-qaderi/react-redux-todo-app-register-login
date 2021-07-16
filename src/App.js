import React from "react";
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.scss'
import LoginPage from './components/PageComponents/loginPage/login';
import Signin from './components/PageComponents/signinPage/signin';
import HomePage from './components/homePage';


export default function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact>
          <LoginPage />
        </Route>

        <Route path='/home'>
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