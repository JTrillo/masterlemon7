import { FieldValidationResult } from "lc-form-validation";

interface Login {
  name: string;
  password: string;
}

const createEmptyLogin = (): Login => ({
  name: '',
  password: '',
});

interface LoginError {
  name: FieldValidationResult;
  password: FieldValidationResult;
}

//Es lo mismo que lo de arriba
//type LoginError = Record<keyof Login, FieldValidationResult>;

//Por cada campo de LoginError genera un nuevo campo de tipo boolean o string
type ResultLoginError = Record<keyof LoginError, boolean | string>;

const createEmptyLoginError = (): LoginError => ({
  name: {
    key: 'name',
    succeeded: true,
    errorMessage: '',
    type: '',
  },
  password: {
    key: 'password',
    succeeded: true,
    errorMessage: '',
    type: '',
  },
});

export { Login, createEmptyLogin, LoginError, ResultLoginError, createEmptyLoginError };