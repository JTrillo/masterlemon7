import { graphQLClient } from "../core";
import { CarEntityApi, createEmptyCar, CarCreateApi } from "./car.api-model";

interface GetCarsResponse {
  cars: CarEntityApi[]
}

export const getCars = (): Promise<CarEntityApi[]> => {
  const query = `
    query {
      cars {
        car_id
        name
        brand
        year_release
      }
    }
  `;

  return graphQLClient
    .request<GetCarsResponse>(query)
    .then(res => res.cars)
    .catch(() => []);
};
  
interface GetCarResponse {
  car: CarEntityApi
}

export const getCar = (id: number): Promise<CarEntityApi> => {
  const query = `
    query($carId: Int!) {
       car(id: $carId) {
         car_id
         name
         brand
         year_release
       }
    }
  `;

  return graphQLClient
    .request<GetCarResponse>(query, {
      carId: id
    })
    .then(res => res.car)
    .catch(() => createEmptyCar(id));
};

interface AddCarResponse {
  addCar: boolean;
}

export const addCar = (car: CarCreateApi): Promise<boolean> => {
  const mutation = `
    mutation($carCreate: CarCreate!) {
      addCar(carCreate: $carCreate)
    }
  `;

  return graphQLClient
    .request<AddCarResponse>(mutation, {
      carCreate: car
    })
    .then(res => res.addCar)
    .catch(() => false);
};

interface EditCarResponse {
  editCar: boolean;
}

export const editCar = (car: CarEntityApi): Promise<boolean> => {
  const mutation = `
    mutation($editCar: EditCar!) {
      editCar(editCar: $editCar)
    }
  `;

  return graphQLClient
    .request<EditCarResponse>(mutation, {
      editCar: car
    })
    .then(res => res.editCar)
    .catch(() => false);
}