import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const PrivateRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Redirect exact from="/" to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

const PublicRoutes = () => {
  return (
    <IonReactRouter>
      <Route path="/home" component={Home} exact={true} />
      <Redirect exact from="/" to="/home" />
    </IonReactRouter>
  );
};

const RootNavigation: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <IonApp>{token.length ? <PublicRoutes /> : <PrivateRoutes />}</IonApp>
  );
};

export default RootNavigation;
