export async function fetchFromAPI(endpoint) {
  const url = `http://localhost:8000/api${endpoint}`;
  const response = await fetch(url);
    if(!response.ok) {
      const error = await response.json();
      console.log(error);
      throw Error(response.statusText);
  }
  return await response.json();
}