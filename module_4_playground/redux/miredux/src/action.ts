import { actionsIds } from "./common/action-id";
import { MemberEntity } from "./model/member.entity";
import { getMembersCollection } from './api/member.api';

export const updateUserProfile = (newName: string) => ({
  type: actionsIds.UPDATE_USERPROFILE_NAME,
  payload: newName
});

export const memberRequestStart = () => (dispatcher) => {
  const promise = getMembersCollection();

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}

export const memberRequestCompleted = (members: MemberEntity[]) => ({
  type: actionsIds.MEMBER_REQUEST_COMPLETED,
  payload: members
})