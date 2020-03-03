import { actionsEnums } from '../common';
import { MemberEntity } from '../model';

export interface MemberState {
  members: MemberEntity[];
  organization: string;
  page: number;
  rowsPerPage: number;
};

const defaultMemberState = (): MemberState => ({
  members: [],
  organization: "lemoncode",
  page: 0,
  rowsPerPage: 5
});

export const memberReducer = (state : MemberState = defaultMemberState(), action): MemberState => {
  switch (action.type) {
    case actionsEnums.MEMBER_REQUEST_COMPLETED:
      return handleMemberRequestCompletedAction(state, action.payload);
    case actionsEnums.UPDATE_ORGANIZATION:
      return handleUpdateOrganization(state, action.payload);
    case actionsEnums.UPDATE_PAGE:
      return handleUpdatePage(state, action.payload);
    case actionsEnums.UPDATE_ROWS_PER_PAGE:
      return handleUpdateRowsPerPage(state, action.payload);
  }

  return state;
};

const handleMemberRequestCompletedAction = (state : MemberState, members): MemberState => ({
  ...state,
  members
});

const handleUpdateOrganization = (state: MemberState, organization): MemberState => ({
  ...state,
  organization
});

const handleUpdatePage = (state: MemberState, page): MemberState => ({
  ...state,
  page
});

const handleUpdateRowsPerPage = (state: MemberState, rowsPerPage): MemberState => ({
  ...state,
  rowsPerPage
});