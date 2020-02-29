import { actionsIds } from "../common/action-id";
import { MemberEntity } from "../model/member.entity";

export type MemberState = MemberEntity[];

export const memberReducer = (state: MemberState = [], action) => {
  switch(action.type){
    case actionsIds.MEMBER_REQUEST_COMPLETED:
      return handleMemberRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleMemberRequestCompletedAction = (state: MemberState, members: MemberEntity[]): MemberState => members