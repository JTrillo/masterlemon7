import { State } from "./reducer";
import { connect } from "react-redux";
import { HelloComponent } from "./hello.component";
import { getFullnameTartaja } from "./reducer/selector";

const mapStateToProps = (state: State) => ({
  username: getFullnameTartaja(state)
});

export const HelloContainer = connect(mapStateToProps)(HelloComponent);