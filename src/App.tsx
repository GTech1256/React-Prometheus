import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'

import { Home } from './pages/Home'
import { About } from './pages/About'

import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';


export default () => (
  <FirebaseState>
    <AlertState>
      <BrowserRouter>
      <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} exact component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  </FirebaseState>
);
