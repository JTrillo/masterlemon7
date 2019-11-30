import React from 'react';
import { getAvg } from './averageService';
const classes = require('./averageComponentStyles.scss');

export const AverageComponent: React.FunctionComponent = () => {
  const [average, setAverage] = React.useState<number>(0);

  React.useEffect(() => {
    const scores: number[] = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <span className={classes['result-background']}>Students average: {average}</span>
    </div>
  );
};
