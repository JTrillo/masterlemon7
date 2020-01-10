import * as React from 'react';

const setSatisfactionClass = level => {
  if (level < 100) {
    return "very-dissatisfied";
  }
  if (level < 200) {
    return "somewhat-dissatisfied";
  }
  if (level < 300) {
    return "neither";
  }
  if (level < 400) {
    return "somewhat-satisfied";
  }
  return "very-satisfied";
};

const isSameRange = (prev, next) => {
  return setSatisfactionClass(prev.level) === setSatisfactionClass(next.level);
};

export const FaceComponent = React.memo(props => {

  const { level } = props;

  console.log("Rerendering...");

  return (
    <div className={setSatisfactionClass(level)}/>
  );
}, isSameRange); //De esta forma solo renderiza cuando hay un cambio en la clase de nivel de satisfación