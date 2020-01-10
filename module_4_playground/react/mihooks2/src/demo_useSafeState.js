import React from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};

//Explicar este custom hook en el README.md del repo de react alicante -> block 3 -> 01-promise-unmounted
const useIsMounted = () => {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true; //Código que se ejecuta cuando se monta el componente

    return () => (mountedRef.current = false); //Código que se ejecuta cuando se desmonta el componente
  }, []);

  return {isMountedRef: mountedRef};
};

//HOOK MUY INTERESANTE. Es como 'setState' pero seguro, verificando que el componente esté montado.
const useSafeState = initial => {
  const mountedRef = React.useRef(false);
  const [state, setState] = React.useState(initial);

  React.useEffect(() =>{
    mountedRef.current = true;

    return () => (mountedRef.current = false);
  }, []);

  const setSafeState = newState => mountedRef.current && setState(newState);

  return [state, setSafeState];
};

// USANDO 'useIsMounted'
/*export const MyChildComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);
  const { isMountedRef } = useIsMounted();

  const setSafeUserCollection = (userCollection) => isMountedRef.current && setUserCollection(userCollection);

  // Load full list when the component gets mounted and filter gets updated
  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
          .then(response => response.json())
          .then(json => setSafeUserCollection(json));
    }
    , 2500)
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};*/

// USANDO 'useSafeState'
export const MyChildComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = useSafeState([]);

  // Load full list when the component gets mounted and filter gets updated
  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
          .then(response => response.json())
          .then(json => setUserCollection(json));
    }
    , 2500)
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};