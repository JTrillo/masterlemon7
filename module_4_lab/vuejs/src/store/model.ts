import { Member } from "../model/member";

export interface RootState {
  loading: boolean;
  members: Member[];
}