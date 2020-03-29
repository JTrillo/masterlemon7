import { renderHook, act } from '@testing-library/react-hooks';
import * as api from './api';
import { useFilterUsers } from './useFilterUsers';

describe('useFilterUsers specs', () => {
  it('should call getUsersByFilter and update users when it feeds filter equals "doe"', async () => {
    // Arrange
    const filter = 'doe';
    const users = ['John Doe', 'Jane Doe'];
    const getUsersByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(users);

    // Act 1
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));

    // Assert 1
    expect(result.current.users).toEqual([]);

    // Act 2
    await waitForNextUpdate();

    // Assert 2
    expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
    expect(result.current.users).toEqual(users);
  });

  it('should call getUsersByFilter only one time when it calls setFilter with same filter two times', async () => {
    // Arrange
    const filter = 'doe';
    const users = ['John Doe', 'Jane Doe'];
    const getUsersByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(users);
    
    // Act 1
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));

    // Assert 1
    expect(result.current.users).toEqual([]);

    // Act 2
    act(() => {
      result.current.setFilter(filter);
    });
    await waitForNextUpdate();

    // Assert 2
    expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
    expect(getUsersByFilterStub).toHaveBeenCalledTimes(1);
    expect(result.current.users).toEqual(users);
  });

  it('should call getUsersByFilter twice when it calls setFilter with different filters', async () => {
    // Arrange
    const filter = 'doe';
    const users = ['John Doe', 'Jane Doe'];
    const getUsersByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(users);
    
    // Act 1
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));

    // Assert 1
    expect(result.current.users).toEqual([]);

    // Act 2
    act(() => {
      result.current.setFilter('smith');
    });
    await waitForNextUpdate();

    // Assert 2
    expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
    expect(getUsersByFilterStub).toHaveBeenCalledWith('smith');
    expect(getUsersByFilterStub).toHaveBeenCalledTimes(2);
    expect(result.current.users).toEqual(users);
  });
});