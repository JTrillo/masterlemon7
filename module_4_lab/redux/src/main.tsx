import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { switchRoutes } from "./core";
import { MemberListContainer, UserInfoContainer } from './components';

const nonTypedWindow : any = window;

const composeEnhancers = nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(reduxThunk)
));
  

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>      
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.membersTable]} component={MemberListContainer} />
        <Route path={switchRoutes.memberCard} component={UserInfoContainer} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
