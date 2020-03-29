import deepFreeze from "deep-freeze";
import { membersReducer, MembersState } from "./members";
import { MembersAction } from "../actions";
import { actionIds } from '../actions/actionIds';
import { Member } from '../../../../rest-api/model';

describe('members reducer specs', () => {
  it('should return the initial state if state is undefined', () => {
    // Arrange
    const initialState = undefined;
    const action = {
      type: 'something',
      payload: null,
    };

    // Act
    const result = membersReducer(initialState, action as MembersAction);

    // Assert
    expect(result.members).toEqual([]);
    expect(result.serverError).toBeNull();
  });

  it('should return the same state if action type is unknown', () => {
    // Arrange
    const initialState: MembersState = {
      members: [{ id: 1, login: 'test name', avatar_url: 'test avatar' }],
      serverError: null,
    };
    const action = {
      type: 'action type',
      payload: null
    };

    deepFreeze(initialState);

    // Act
    const result = membersReducer(initialState, action as MembersAction);

    // Assert
    expect(result.members).toEqual(initialState.members);
    expect(result.serverError).toEqual(initialState.serverError);
  });

  it('should change members with the given payload when action type is FETCH_MEMBERS_SUCCESS', () => {
    // Arrange
    const initialState: MembersState = {
      members: [{ id: 1, login: 'login 1', avatar_url: 'avatar 1' }],
      serverError: null,
    };
    const members: Member[] = [{ id: 2, login: 'login 2', avatar_url: 'avatar 2' }];
    const action = {
      type: actionIds.FETCH_MEMBERS_SUCCESS,
      payload: members,
    };

    deepFreeze(initialState);

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result.members).toEqual(action.payload);
  });

  it('should reset serverError to null when action type is FETCH_MEMBERS_SUCCESS', () => {
    // Arrange
    const initialState: MembersState = {
      members: [],
      serverError: 'Something went wrong',
    };
    const members: Member[] = [{ id: 2, login: 'login 2', avatar_url: 'avatar 2' }];
    const action = {
      type: actionIds.FETCH_MEMBERS_SUCCESS,
      payload: members,
    };

    deepFreeze(initialState);

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result.members).toEqual(action.payload);
    expect(result.serverError).toBeNull();
  });

  it('should change serverError with the given payload when action type is FETCH_MEMBERS_ERROR', () => {
    // Arange
    const initialState: MembersState = {
      members: [],
      serverError: null,
    };
    const action = {
      type: actionIds.FETCH_MEMBERS_ERROR,
      payload: 'Server error',
    };
    deepFreeze(initialState);

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result.members).toEqual(initialState.members);
    expect(result.serverError).toEqual('Server error');
  });
});