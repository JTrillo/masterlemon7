import { actionsIds } from "../common/action-id";

export interface ExchangeRatesState {
  dollars: number;
  pounds: number;
}

const deafultExchangeRates = (): ExchangeRatesState => ({
  dollars: 1,
  pounds: 1
});

export const exchangeRatesReducer = (state = deafultExchangeRates(), action) => {
  switch(action.type){
    case actionsIds.UPDATE_DOLLAR_RATE:
      return handleUpdateDollarRate(state, action.payload);
    case actionsIds.UPDATE_POUND_RATE:
      return handleUpdatePoundRate(state, action.payload);
  }
  return state;
};

const handleUpdateDollarRate = (state: ExchangeRatesState, newRate: number): ExchangeRatesState => ({
  ...state,
  dollars: newRate
});

const handleUpdatePoundRate = (state: ExchangeRatesState, newRate: number): ExchangeRatesState => ({
  ...state,
  pounds: newRate
});
