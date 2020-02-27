import { createSelector } from "reselect";
import { State } from "./index";

export const getUserMoneyState = (state: State) => state.userMoneyState;

export const getExchangeRatesState = (state: State) => state.exchangeRatesState;

export const getMoneyInDollars = createSelector(
  getUserMoneyState,
  getExchangeRatesState,
  (userMoneyState, exchangeRatesState) => userMoneyState.money * exchangeRatesState.dollars
);

export const getMoneyInPounds = createSelector(
  getUserMoneyState,
  getExchangeRatesState,
  (userMoneyState, exchangeRatesState) => userMoneyState.money * exchangeRatesState.pounds
);