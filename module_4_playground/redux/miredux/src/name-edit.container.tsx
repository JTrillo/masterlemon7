import { connect } from "react-redux";
import { State } from "./reducer";
import { NameEditComponent } from "./name-edit.component";
import { updateUserProfile } from "./action";

const mapStateToProps = (state: State) => ({
  username: state.userProfileState.firstname
});

const mapDispatchToProps = dispatch => ({
  onChange: (name: string) => dispatch(updateUserProfile(name))
});

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);