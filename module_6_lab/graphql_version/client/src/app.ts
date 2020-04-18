import { 
  addCarRows, 
  retrieveCarId, 
  populateEditCarForm,
  retrieveCarForm,
  cleanTable,
} from './uiHelpers';
import { getCars, getCar, addCar, editCar } from "./api/carsApi";

document.addEventListener('DOMContentLoaded', () => {
  const buttonLoadCars = document.getElementById('loadcars');
  buttonLoadCars.addEventListener('click', (event) => {
    event.stopPropagation();
    cleanTable('cars-table');
    getCars().then((result) => {
      addCarRows(result, 'cars-table');
    });
  });

  const buttonLoadCar = document.getElementById('loadcar');
  buttonLoadCar.addEventListener('click', (event) => {
    event.stopPropagation();
    const carId = retrieveCarId();
    getCar(carId)
      .then((r) => {
        populateEditCarForm(r)
      });
  });

  const buttonAddCar = document.getElementById('add');
  buttonAddCar.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const car = retrieveCarForm();
    addCar(car)
      .then((_) => {
        cleanTable('cars-table');
        return getCars();
      })
      .then((result) => {
        addCarRows(result, 'cars-table');
      });
  });

  const buttonEditCar = document.getElementById('edit');
  buttonEditCar.addEventListener('click', (event) => {
    event.stopPropagation();
    const carId = retrieveCarId();
    const car = retrieveCarForm();
    editCar({
      car_id: carId,
      name: car.name,
      brand: car.brand,
      year_release: car.year_release
    })
      .then((_) => {
          cleanTable('cars-table');
          return getCars();
      })
      .then((result) => {
          addCarRows(result, 'cars-table');
      });
  });
});