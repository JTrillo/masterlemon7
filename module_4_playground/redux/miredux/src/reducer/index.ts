import { combineReducers } from "redux";
import { userProfileReducer, UserProfileState } from "./user-profile.reducer";
import { memberReducer, MemberState } from "./member.reducer";

export interface State {
  userProfileState: UserProfileState;
  memberState: MemberState;
}

export const reducers = combineReducers<State>({
  userProfileState: userProfileReducer,
  memberState: memberReducer,
});