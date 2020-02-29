import { createSelector } from "reselect";
import { State } from "./index";

export const getUserProfileState = (state: State) => state.userProfileState;

export const getFullname = createSelector(
  getUserProfileState,
  userProfileState => `${userProfileState.firstname} ${userProfileState.lastname}`
);

export const getNamePrefixed = createSelector(
  getFullname,
  fullname => `can can can can ${fullname}`
);

export const getFullnameTartaja = createSelector(
  getFullname,
  getNamePrefixed,
  (fullname, prefixedFullname) => `${fullname} ${prefixedFullname}`
);