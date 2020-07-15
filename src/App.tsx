import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { FirebaseState } from './context/firebase/FirebaseState';
import { AlertState } from './context/alert/AlertState';
import { client } from './services/graphql';

import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'

import { About } from './pages/About'
import { Home } from './pages/Home'


export default () => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
);
