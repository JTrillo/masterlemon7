interface Login {
  name: string;
  password: string;
}

const createEmptyLogin = (): Login => ({
  name: '',
  password: '',
});

export { Login, createEmptyLogin };