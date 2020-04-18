import { httpClient } from "./httpClient";
const baseUrlAuth = 'http://localhost:3070'
const baseUrl = 'http://localhost:3050';
let token = '';

export const doLogin = (login) => {
  const uri = `${baseUrlAuth}/login`;
  return httpClient.post(uri, login);
};

export const storeToken = (t) => {
  token = t;
};

const getToken = () => token;

export const getAllCars = () => {
  const uri = `${baseUrl}/api/cars`;
  return httpClient.get(uri, null, getToken());
};

export const getCarById = (id) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return httpClient.get(uri, null, getToken());
};

export const addCar = (car) => {
  const uri = `${baseUrl}/api/cars`;
  return httpClient.post(uri, car, getToken());
};

export const editCar = (id, car) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return httpClient.put(uri, car, getToken());
}