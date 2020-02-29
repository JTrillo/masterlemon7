import { takeEvery, call, put, takeLatest, debounce, throttle, take, race } from "redux-saga/effects";
import { actionIds } from "../common";
import { generateNewNumber } from "../api";
import { numberRequestCompletedAction } from "../action";

// This saga is listening for the action 'GET_NUMBER_REQUEST_START'
export function* watchNewGeneratedNumberRequestStart() {
  //yield takeLatest( //takeLatest cancela las request anteriores y ejecuta solo la última
  //yield debounce( //debounce no devuelve la petición hasta que no pare de recibir peticiones y espere n milisegundos
    //2000
  //yield throttle( //solo acepta las request cada n milisegundos (en este caso 5000ms)
    //5000,
  yield takeEvery( //takeEvery acepta todas las requests
    actionIds.GET_NUMBER_REQUEST_START,
    requestNewGeneratedNumber
  );
}

// This saga will call 'generateNewNumber', waits response and then passes the result to 'numberRequestCompletedAction'
function* requestNewGeneratedNumber() {
  const {generatedNumber, cancel} = yield race({ //Este efecto 'echa a correr' dos llamadas asíncronas y devuelve la que llegue/termine primero
    generatedNumber: call(generateNewNumber),
    cancel: take(actionIds.CANCEL_ONGOING_NUMBER_REQUEST)
  })
  if(!cancel){
    yield put(numberRequestCompletedAction(generatedNumber));
    console.log('esto se ejecuta despues de que el valor se asigne al reducer');
  }
}