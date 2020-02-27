import { connect } from "react-redux";
import { State } from "./reducer";
import { getMoneyInDollars, getMoneyInPounds } from "./reducer/selector";
import { DisplayComponent } from "./display.component";

const mapStateToProps = (state: State) => ({
  dollarValue: getMoneyInDollars(state),
  poundValue: getMoneyInPounds(state)
});

export const DisplayContainer = connect(
  mapStateToProps
)(DisplayComponent);