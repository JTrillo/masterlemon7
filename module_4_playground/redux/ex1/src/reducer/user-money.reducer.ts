import { actionsIds } from "../common/action-id";

export interface UserMoneyState {
  money: number;
}

const defaultUserMoney = (): UserMoneyState => ({
  money: 0
});

export const userMoneyReducer = (state = defaultUserMoney(), action) => {
  switch(action.type){
    case actionsIds.UPDATE_MONEY:
      return handleUpdateUserMoney(state, action.payload);
  }
  return state;
};

const handleUpdateUserMoney = (state: UserMoneyState, money: number): UserMoneyState => ({
  money
});