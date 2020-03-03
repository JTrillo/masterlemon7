import { combineReducers} from 'redux';
import { memberReducer, MemberState } from './member.reducer';
import { userReducer, UserState } from './user.reducer';

export interface State {  
  memberReducer : MemberState;
  userReducer: UserState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  userReducer
});
