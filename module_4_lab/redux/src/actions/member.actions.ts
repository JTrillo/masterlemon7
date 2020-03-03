import { Dispatch } from 'redux';
import { trackPromise } from 'react-promise-tracker';
import { actionsEnums } from '../common';
import { MemberEntity } from '../model';
import { memberAPI } from '../api';

export const memberRequestCompleted = (members: MemberEntity[]) => ({
  type: actionsEnums.MEMBER_REQUEST_COMPLETED,
  payload: members
});

//track promise here
export const memberRequest = (organization: string) => (dispatcher: Dispatch) => {
  const promise = trackPromise(memberAPI.getAllMembers(organization));

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}

export const updateOrganization = (organization: string) => ({
  type: actionsEnums.UPDATE_ORGANIZATION,
  payload: organization
});

export const updatePage = (page: number) => ({
  type: actionsEnums.UPDATE_PAGE,
  payload: page
});

export const updateRowsPerPage = (rowsPerPage: number) => ({
  type: actionsEnums.UPDATE_ROWS_PER_PAGE,
  payload: rowsPerPage
});