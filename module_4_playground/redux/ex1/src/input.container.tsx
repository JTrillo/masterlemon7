import { connect } from "react-redux";
import { State } from "./reducer";
import { updateUserMoney, updateDollarRate, updatePoundRate } from "./action";
import { InputComponent } from "./input.component";

const mapStateToProps = (state: State) => ({
  money: state.userMoneyState.money,
  dollarRate: state.exchangeRatesState.dollars,
  poundRate: state.exchangeRatesState.pounds
});

const mapDispatchToProps = dispatch => ({
  onChangeMoney: (money: number) => dispatch(updateUserMoney(money)),
  onChangeDollarRate: (rate: number) => dispatch(updateDollarRate(rate)),
  onChangePoundRate: (rate: number) => dispatch(updatePoundRate(rate))
});

export const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);

