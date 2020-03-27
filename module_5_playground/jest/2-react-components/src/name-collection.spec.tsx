import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import * as api from './name-api';
import { UserEdit } from './user-edit';
import { NameCollection } from './name-collection';

const renderWithRouter = component => {
  return {
    ...render(
      <HashRouter>
        <Switch>
          <Route path="/users/:name" component={UserEdit} />
        </Switch>
        {component}
      </HashRouter>
    ),
  };
};

describe('NameCollection component specs', () => {
  it('should display a list with one item when it mounts the component and it resolves the async call', async () => {
    // Arrange
    const getStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe']);

    // Act
    const { getByText, queryByText } = renderWithRouter(<NameCollection />);
    const elementBeforeWait = queryByText('John Doe');
    const element = await waitForElement(() => getByText('John Doe'));
    
    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(elementBeforeWait).not.toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });

  it('should display a list with two items when it mounts the component and it resolves the async call', async () => {
    // Arrange
    const getStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { getAllByTestId } = renderWithRouter(<NameCollection />);
    const elements = await waitForElement(() => getAllByTestId('name'));
    
    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(elements.length).toEqual(2);
    expect(elements[0].textContent).toEqual('John Doe');
    expect(elements[1].textContent).toEqual('Jane Doe');
  });

  it('should navigate to second user edit page when click in second user name', async () => {
    // Arrange
    const getStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { getAllByTestId, getByTestId } = renderWithRouter(<NameCollection />);
    const elements = await waitForElement(() => getAllByTestId('name')); //Recupero los usuarios
    const secondUser = elements[1]; //Recupero el segundo usuario
    fireEvent.click(secondUser); //Navego a la vista de edición del segundo usuario (nuevo componente)
    const userEditElement = getByTestId('user-edit'); //Cojo el h1 del nuevo componente

    // Assert
    expect(userEditElement).toBeInTheDocument(); //Verifico que el elemento esté en el documento
    expect(userEditElement.textContent).toEqual('User name: Jane Doe'); //Verifico que el texto del h1 del edit component coincide

  });
});