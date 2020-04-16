import axios from 'axios';
const baseUrlAuth = 'http://localhost:3070';
const baseUrl = 'http://localhost:3050';

const errorHandler = error => console.log(error);

const createRequest = async (method, url, data) => {
  try {
    let result;
    switch(method) {
      case 'GET':
        result = await axios.get(url);
        break;
      case 'POST':
        result = await axios.post(url, data);
        break;
      case 'PUT':
        result = await axios.put(url, data);
        break;
    }
    return result.data;  
  } catch(error) {
    errorHandler(error);
  }
};

export const doLogin = async (login) => {
  const uri = `${baseUrlAuth}/login`;
  return createRequest('POST', uri, login);
};

export const storeToken = (token) => {
  axios.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
};


export const getAllCars = async () => {
  const uri = `${baseUrl}/api/cars`;
  return createRequest('GET', uri);
};

export const getCarById = async (id) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return createRequest('GET', uri);
};

export const addCar = async (car) => {
  const uri = `${baseUrl}/api/cars`;
  return createRequest('POST', uri, car);
};

export const editCar = async (id, car) => {
  const uri = `${baseUrl}/api/cars/${id}`;
  return createRequest('PUT', uri, car);
}