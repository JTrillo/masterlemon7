import { combineReducers } from "redux";
import { userProfileReducer, UserProfileState } from "./user-profile.reducer";
import { userMoneyReducer, UserMoneyState } from "./user-money.reducer";
import { exchangeRatesReducer, ExchangeRatesState } from "./exchange-rates.reducer";

export interface State {
  userProfileState: UserProfileState;
  userMoneyState: UserMoneyState;
  exchangeRatesState: ExchangeRatesState;
}

export const reducers = combineReducers<State>({
  userProfileState: userProfileReducer,
  userMoneyState: userMoneyReducer,
  exchangeRatesState: exchangeRatesReducer
});
