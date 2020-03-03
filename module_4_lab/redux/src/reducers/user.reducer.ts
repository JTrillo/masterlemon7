import { actionsEnums } from '../common';
import { UserEntity, createDefaultUserEntity} from '../model';

export interface UserState {
  user: UserEntity;
};

const defaultUserState = (): UserState => ({
  user: createDefaultUserEntity()
});

export const userReducer = (state: UserState = defaultUserState(), action): UserState => {
  switch (action.type) {
    case actionsEnums.USER_REQUEST_COMPLETED:
      return handleUserRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleUserRequestCompletedAction = (state: UserState, user: UserEntity): UserState => ({
  ...state,
  user
});