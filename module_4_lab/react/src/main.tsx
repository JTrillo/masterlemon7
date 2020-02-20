import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from "./core";
import { MembersTableComponent, MemberCardComponent } from "./components";

ReactDOM.render(
  <>
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.membersTable]} component={MembersTableComponent} />
        <Route path={switchRoutes.memberCard} component={MemberCardComponent} />
      </Switch>
    </HashRouter>
  </>,
  document.getElementById('root')
);
