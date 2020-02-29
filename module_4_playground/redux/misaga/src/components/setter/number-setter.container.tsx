import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { numberRequestStartAction, cancelOnGoingNumberRequestAction } from '../../action';
import { NumberSetterComponent } from './number-setter.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRequestNewNumber: () => dispatch(numberRequestStartAction()),
  onCancelRequest: () => dispatch(cancelOnGoingNumberRequestAction()),
});

export const NumberSetterContainer = connect(
  null,
  mapDispatchToProps
)(NumberSetterComponent);