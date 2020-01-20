import * as React from 'react';
import { LoginComponent } from './login.component';
import { useHistory } from 'react-router-dom';
import { LoginEntityVm, createEmptyLogin } from './login.vm';
import { linkRoutes } from 'core';
import { validateCredentials } from './login.api';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const [badLogin, setBadLogin] = React.useState(false);

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      areValidCredentials => {
        areValidCredentials ? history.push(linkRoutes.hotelCollection) : setBadLogin(true);
      }
    );
  }

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} badLogin={badLogin} setBadLogin={setBadLogin}/>;
};