import { State } from "./reducer"
import { connect } from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import { memberRequestStart } from "./action";


const mapStateToProps = (state: State) => ({
  memberCollection: state.memberState
});

const mapDispatchToProps = dispatch => ({
  loadMemberCollection: () => dispatch(memberRequestStart())
});

export const MemberCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCollectionComponent);