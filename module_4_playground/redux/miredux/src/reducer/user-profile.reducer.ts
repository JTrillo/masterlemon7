import { actionsIds } from "../common/action-id";

export interface UserProfileState {
  firstname: string;
  lastname: string;
}

const defaultUserState = (): UserProfileState => ({
  firstname: "John",
  lastname: "Naukas"
});

export const userProfileReducer = (state = defaultUserState(), action): UserProfileState => {
  switch(action.type){
    case actionsIds.UPDATE_USERPROFILE_NAME:
      return handleUserProfileAction(state, action.payload);
  }
  return state;
};

// RECOMENDADO HACER UN HANDLER PARA CADA ACTION ID
const handleUserProfileAction = (state: UserProfileState, firstname: string): UserProfileState => ({
  ...state,
  firstname
});