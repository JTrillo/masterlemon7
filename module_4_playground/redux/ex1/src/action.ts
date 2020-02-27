import { actionsIds } from "./common/action-id";

export const updateUserMoney = (newMoney: number) => ({
  type: actionsIds.UPDATE_MONEY,
  payload: newMoney
});

export const updateDollarRate = (newRate: number) => ({
  type: actionsIds.UPDATE_DOLLAR_RATE,
  payload: newRate
});

export const updatePoundRate = (newRate: number) => ({
  type: actionsIds.UPDATE_POUND_RATE,
  payload: newRate
});