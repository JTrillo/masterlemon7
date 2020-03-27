import * as React from 'react';
import { getMembers } from "./api";
import { mapMemberListFromApiToVM } from './mapper';

export const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    getMembers()
      .then(members => {
        console.log(mapMemberListFromApiToVM(members));
      })
      .catch(error => console.log(error));
  }, []);
  return <h1>React testing by sample</h1>;
};
