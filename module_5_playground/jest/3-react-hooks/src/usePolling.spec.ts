import { renderHook } from '@testing-library/react-hooks';
import { usePolling } from './usePolling';

describe('usePolling specs', () => {
  it('should return count equals 0 when initialize the hook', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => usePolling());

    // Assert
    expect(result.current.count).toEqual(0);
  });

  it('should return count equals 1 when it waits for next update', async () => {
    // Arrange

    // Act
    const { result, waitForNextUpdate } = renderHook(() => usePolling());
    await waitForNextUpdate();

    // Assert
    expect(result.current.count).toEqual(1);
  });

  it('should return count equals 3 when it waits 3 times for next update', async () => {
    // Arrange

    // Act
    const { result, waitForValueToChange } = renderHook(() => usePolling());
    await waitForValueToChange(() => result.current.count === 3, {
      timeout: 3500, //si uso timeout de menos de 3000 fallará
    });

    // Assert
    expect(result.current.count).toEqual(3);
  });

  it('should call clearInterval when it unmounts the component', async () => {
    // Arrange
    const stub = jest.spyOn(window, 'clearInterval');

    // Act 1
    const { result, waitForNextUpdate, unmount} = renderHook(() => usePolling());
    await waitForNextUpdate();

    // Assert 1
    expect(result.current.count).toEqual(1);
    expect(stub).not.toHaveBeenCalled();

    // Act 2
    unmount();

    // Assert 2
    expect(stub).toHaveBeenCalled();
  });
});