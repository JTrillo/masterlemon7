import { 
    addCarRows, 
    retrieveCarId, 
    populateEditCarForm,
    retrieveCarForm,
    cleanTable,
    retrieveLoginForm
} from './uiHelpers';
import {
    doLogin,
    storeToken,
    getAllCars,
    getCarById,
    addCar,
    editCar
}
from "./API/carsApi.xmlhttprequest";
// from "./API/carsApi.fetch";
// from "./API/carsApi.axios";

document.addEventListener('DOMContentLoaded', () => {
    const buttonLogin = document.getElementById('login');
    buttonLogin.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const login = retrieveLoginForm();
        doLogin(login).then((result) => {
            console.log(result);
            if(result.access_token) {
                storeToken(result.access_token);
            }else {
                console.log("Invalid login");
            }
        });
    });
    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        cleanTable('cars-table');
        getAllCars().then((result) => {
            addCarRows(result, 'cars-table');
        });
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        getCarById(carId)
            .then((r) => populateEditCarForm(r));
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarForm();
        addCar(car)
            .then((_) => {
                cleanTable('cars-table');
                return getAllCars();
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
        editCar(carId, car)
            .then((_) => {
                cleanTable('cars-table');
                return getAllCars();
            })
            .then((result) => {
                addCarRows(result, 'cars-table');
            });
    });
});