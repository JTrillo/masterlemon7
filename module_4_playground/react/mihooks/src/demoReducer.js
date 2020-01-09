import React from "react";

const userInfoReducer = (state, action) => {
  switch(action.type){
    case "setusername":
      return {
        ...state,
        name: action.payload
      };
    case "setlastname":
      return {
        ...state,
        lastname: action.payload
      };
    default:
      return state;
  }
};

export const MyComponent = () => {
  const [state, dispatch] = React.useReducer(userInfoReducer, {name: 'John', lastname: 'Doe'});

  return (
    <>
      <h3>
        {state.name} {state.lastname}
      </h3>
      <EditUsername
        name={state.name}
        dispatch={dispatch}
      />
      <input
        value={state.lastname}
        onChange={e =>
          dispatch({
            type: 'setlastname',
            payload: e.target.value
          })
        }
      />
    </>
  );
};

const EditUsername = React.memo(props => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );

  return (
    <input value={props.name} onChange={e => props.dispatch({type: 'setusername', payload: e.target.value})} />
  );
});