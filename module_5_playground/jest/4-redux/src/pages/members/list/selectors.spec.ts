import { State } from "../../reducers";
import { getMembersState, getMembersList, getMembersListVM, getServerError } from "./selectors";
import { Member } from "./viewModel";
import * as mappers from "./mappers";

describe('pages/members/list/selectors', () => {
  describe('getMembersState', () => {
    it('should return membersState from state', () => {
      // Arrange
      const state: State = {
        membersState: {
          members: [],
          serverError: null,
        },
      };

      // Act
      const result = getMembersState(state);

      // Assert
      expect(result).toBe(state.membersState);
    });
  });

  describe('getMembersList', () => {
    it('should return the expected members list from state', () => {
      // Arrange
      const state: State = {
        membersState: {
          members: [],
          serverError: null,
        },
      };

      // Act
      const result = getMembersList(state);

      // Assert
      expect(result).toBe(state.membersState.members);

    });
  });

  describe('getMembersListVM', () => {
    it('should return the expected members list from state', () => {
      // Arrange
      const state: State = {
        membersState: {
          members: [
            { id: 1, login: 'test login 1', avatar_url: 'test avatar 1' },
            { id: 2, login: 'test login 2', avatar_url: 'test avatar 2' },
          ],
          serverError: null,
        },
      };

      const membersVM: Member[] = [
        { id: 1, name: 'test login 1', avatarUrl: 'test avatar 1' },
        { id: 2, name: 'test login 2', avatarUrl: 'test avatar 2' },
      ];

      const mapMemberListModelToVM = jest
        .spyOn(mappers, 'mapMemberListModelToVM')
        .mockImplementation(() => membersVM);

      // Act
      const result = getMembersListVM(state);

      // Assert
      expect(result).toBe(membersVM);
      expect(mapMemberListModelToVM).toHaveBeenCalled();
    });

    it('returns the same state without recomputations when it is called with same state', () => {
      // Arrange
      const state: State = {
        membersState: {
          members: [
            { id: 1, login: 'test login 1', avatar_url: 'test avatar 1' },
            { id: 2, login: 'test login 2', avatar_url: 'test avatar 2' },
          ],
          serverError: null,
        },
      };

      const membersVM: Member[] = [
        { id: 1, name: 'test login 1', avatarUrl: 'test avatar 1' },
        { id: 2, name: 'test login 2', avatarUrl: 'test avatar 2' },
      ];

      const mapMemberListModelToVM = jest
        .spyOn(mappers, 'mapMemberListModelToVM')
        .mockImplementation(() => membersVM);

      // Act
      const result1 = getMembersListVM(state);
      const result2 = getMembersListVM(state);
      const result3 = getMembersListVM(state);

      // Assert
      expect(result1 === result2).toBeTruthy();
      expect(result1 === result3).toBeTruthy();
      expect(mapMemberListModelToVM).toHaveBeenCalledTimes(1);
    });
  });

  describe('getServerError', () => {
    it('should return the expected serverError from state', () => {
      // Arrange
      const state: State = {
        membersState: {
          members: [],
          serverError: 'test error',
        },
      };

      // Act
      const result = getServerError(state);

      // Assert
      expect(result).toBe(state.membersState.serverError);
    });
  });
});