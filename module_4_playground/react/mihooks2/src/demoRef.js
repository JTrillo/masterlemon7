import React from "react";

export const MyComponent = () => {
  const [message, setMessage] = React.useState("initial message");
  const [seconds, setSeconds] = React.useState(0);

  const secondsRef = React.useRef(seconds);

  React.useEffect(() => {
    setTimeout(() => {
      console.log(seconds);
      setSeconds(seconds + 1);
      secondsRef.current = seconds + 1;
    }, 1000);

    setTimeout(() => {
      setMessage(`Total seconds: ${secondsRef.current}`);
    }, 2000);
  }, []); // Important right click and ignore linter rule (later on check what happens)

  return (
    <>
      <h3>{message}</h3>
      <h4>{seconds}</h4>
    </>
  );
};