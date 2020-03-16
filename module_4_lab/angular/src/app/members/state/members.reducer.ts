export interface MembersState {
  organization: string;
}

const defaultMembersState = (): MembersState => ({
  organization: "lemoncode",
});

export const reducer = (state: MembersState = defaultMembersState(), action): MembersState => {
  switch(action.type) {
    case 'UPDATE_ORGANIZATION':
      console.log(action);
      return {
        ...state,
        organization: action.payload,
      };
    default:
      return state;
  }
};