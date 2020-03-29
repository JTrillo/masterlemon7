import { renderHook, act } from "@testing-library/react-hooks";
import { User } from "./model";
import { useUser } from "./useUser";

describe('useUser specs', () => {
  it('should return user with initial values and setUser method when it calls it', async () => {
    // Arrange
    const initialUser: User = {
      name: 'John',
      surname: 'Doe',
    };
    const updatedUser: User = {
      name: 'Jane',
      surname: 'Smith',
    };

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useUser(initialUser));

    // Assert
    expect(result.current.user).toEqual(initialUser);
    expect(result.current.setUser).toEqual(expect.any(Function));

    await waitForNextUpdate();

    expect(result.current.user).toEqual(updatedUser);
  });

  it('should update user when it calls setUser', async () => {
    // Arrange
    const initialUser: User = {
      name: 'John',
      surname: 'Doe',
    };
    const name = "Pedro";
    const surname = "Herrero";

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useUser(initialUser));

    await waitForNextUpdate();
    
    act(() => {
      result.current.setUser({
        name,
        surname,
      });
    });

    // Assert
    expect(result.current.user).toEqual({
      name,
      surname,
    });
  });
});