import { Login } from '../../model';

export const loginRequest = (login: Login): Promise<boolean | string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => (isValidLogin(login) ? resolve(true) : reject('Not valid login')), 2000);
  });
}
  

const isValidLogin = (login: Login) => login.name === 'admin' && login.password === 'test';