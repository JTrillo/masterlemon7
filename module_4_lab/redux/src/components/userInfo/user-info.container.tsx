import { connect } from "react-redux";
import { State } from "../../reducers";
import { userRequest } from "../../actions/user.actions";
import { UserInfoComponent } from "./user-info.component";

const mapStateToProps = (state: State) => ({
  user: state.userReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: (userLogin: string) => dispatch(userRequest(userLogin))
});

export const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoComponent);