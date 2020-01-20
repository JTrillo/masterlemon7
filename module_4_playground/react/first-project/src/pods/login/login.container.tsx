import * as React from 'react';
import { LoginComponent } from './login.component';
import { useHistory } from 'react-router-dom';
import { LoginEntityVm, createEmptyLogin } from './login.vm';
import { linkRoutes, SessionContext } from 'core';
import { validateCredentials } from './login.api';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);
  const [badLogin, setBadLogin] = React.useState(false);

  const navigateToHotel = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(linkRoutes.hotelCollection);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      areValidCredentials => {
        areValidCredentials ? navigateToHotel(loginInfo) : setBadLogin(true);
      }
    );
  }

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} badLogin={badLogin} setBadLogin={setBadLogin}/>;
};