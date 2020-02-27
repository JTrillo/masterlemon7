import * as React from 'react';

interface Props {
  dollarValue: number;
  poundValue: number;
}

export const DisplayComponent = (props: Props) => {
  const { dollarValue, poundValue } = props;

  return(
    <div>
      <p>{dollarValue} USD</p>
      <p>{poundValue} GBP</p>
    </div>
  );
}