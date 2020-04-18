const baseUrlAuth = 'http://localhost:3070'
const baseUrl = 'http://localhost:3050';
let token = '';

const createRequest = async (url, options) => {
  const ops = options ? options : {};
  const response = await fetch(url, ops);
  if(!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
};

export const doLogin = (login) => {
  const uri = `${baseUrlAuth}/login`;
  return createRequest(uri, {
    method: 'POST',
    body: JSON.stringify(login),
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export const storeToken = (t) => {
  token = t;
};

const getToken = () => token;

export const getAllCars = () => {
  const uri = `${baseUrl}/api/cars`;
  return createRequest(uri, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const getCarById = (id) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return createRequest(uri, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const addCar = (car) => {
  const uri = `${baseUrl}/api/cars`;
  return createRequest(uri, {
    method: 'POST',
    body: JSON.stringify(car),
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const editCar = (id, car) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return createRequest(uri, {
    method: 'PUT',
    body: JSON.stringify(car),
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });
};