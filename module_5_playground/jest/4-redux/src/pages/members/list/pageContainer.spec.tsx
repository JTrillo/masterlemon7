import * as React from 'react';
import { render } from '@testing-library/react';
import { MemberListPageContainer } from './pageContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { State } from '../../reducers';
import { membersReducer } from './reducers';
import * as actions from './actions/fetchMembers';

const renderWithRedux = (
  component,
  { initialState = {}, reducer, store = createStore(reducer, initialState) }
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('src/pages/members/list/pageContainer specs', () => {
  it('should render empty table when it feeds initial state', () => {
    // Arrange
    const initialState: State = {
      membersState: {
        members: [],
        serverError: null,
      },
    };
    
    // Act
    const { queryAllByTestId } = renderWithRedux(
      <MemberListPageContainer />,
      {
        initialState,
        reducer: membersReducer,
      }
    );
    const membersElements = queryAllByTestId('member');

    // Assert
    expect(membersElements).toHaveLength(0);
  });

  it('should render one item when it feeds initial state with one item', () => {
    // Arrange
    const initialState: State = {
      membersState: {
        members: [
          { id: 1, login: 'test login 1', avatar_url: 'test avatar_url 1' },
        ],
        serverError: null,
      },
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(
      <MemberListPageContainer />,
      {
        initialState,
        reducer: membersReducer,
      }
    );
    const membersElements = queryAllByTestId('member');
    
    // Assert
    expect(membersElements).toHaveLength(1);
  });

  it('should display zero items when it has two items on state and serverError equals "has-error"', () => {
    // Assert
    const initialState: State = {
      membersState: {
        members: [
          { id: 1, login: 'test login 1', avatar_url: 'test avatar_url 1' },
          { id: 2, login: 'test login 2', avatar_url: 'test avatar_url 2' },
        ],
        serverError: 'has-error',
      },
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(
      <MemberListPageContainer />,
      {
        initialState,
        reducer: membersReducer,
      }
    );
    const membersElements = queryAllByTestId('member');

    // Assert
    expect(membersElements).toHaveLength(0);
  });

  it('should call fetchMembersRequest when it mounts the component', () => {
    // Arrange
    const initialState: State = {
      membersState: {
        members: [],
        serverError: null,
      },
    };

    const stub = jest
      .spyOn(actions, 'fetchMembersRequest');

    // Act
    const {} = renderWithRedux(
      <MemberListPageContainer />,
      {
        initialState,
        reducer: membersReducer,
      },
    );

    // Assert
    expect(stub).toHaveBeenCalled();
  });
});