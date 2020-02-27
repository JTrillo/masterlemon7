import * as React from 'react';

interface Props{
  money: number;
  onChangeMoney: (money: number) => void;
  dollarRate: number;
  onChangeDollarRate: (rate: number) => void;
  poundRate: number;
  onChangePoundRate: (rate: number) => void;
}

export const InputComponent = (props: Props) => {
  const { money, onChangeMoney } = props;
  const { dollarRate, onChangeDollarRate } = props;
  const { poundRate, onChangePoundRate } = props;

  return(
    <div>
      <p>
        <label>Money (in euros):</label>
        <input 
          type="number"
          value={money}
          onChange={e => onChangeMoney(e.target.valueAsNumber)}
        />
      </p>
      <p>
        <label>Dollar rate:</label>
        <input 
          type="number"
          value={dollarRate}
          onChange={e => onChangeDollarRate(e.target.valueAsNumber)}
        />
      </p>
      <p>
        <label>Pound rate:</label>
        <input 
          type="number"
          value={poundRate}
          onChange={e => onChangePoundRate(e.target.valueAsNumber)}
        />
      </p>
    </div>
  );
}