import { mockCars } from "./mock-data";
import { Car, CarCreate } from "./car.model";

let cars = [...mockCars];

export const getCarList = async (): Promise<Car[]> => {
  return cars;
};

export const getCar = async (id: number): Promise<Car> => {
  return cars.find(c => c.car_id === id);
};

export const addCar = async (carCreate: CarCreate): Promise<boolean> => {
  const { name, brand, year_release } = carCreate;
  const car: Car = {
    car_id: getNextAvailableId(),
    name,
    brand,
    year_release,
  };
  cars.push(car);
  
  return true;
};

export const editCar = async (editCar: Car): Promise<boolean> => {
  const { car_id, name, brand, year_release } = editCar;
  const index = cars.findIndex(c => c.car_id === car_id);
  if(index !== -1){
    cars[index] = {
      car_id,
      name,
      brand,
      year_release
    };
    return true;
  }
  return false;
};

const getNextAvailableId = (): number => {
  return cars[cars.length-1].car_id+1;
}