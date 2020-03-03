import { Dispatch } from 'redux';
import { trackPromise } from 'react-promise-tracker';
import { actionsEnums } from '../common';
import { UserEntity } from '../model';
import { userAPI } from '../api';

export const userRequestCompleted = (user: UserEntity) => ({
  type: actionsEnums.USER_REQUEST_COMPLETED,
  payload: user
});

//track promise here
export const userRequest = (userLogin: string) => (dispatcher: Dispatch) => {
  const promise = trackPromise(userAPI.getUser(userLogin));

  promise.then(
    (data) => dispatcher(userRequestCompleted(data))
  );

  return promise;
}