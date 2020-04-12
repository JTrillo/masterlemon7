export async function showBooks(url) {
    const response = await fetch(url);
    if(!response.ok) {
        const error = await response.json();
        console.log(error);
        throw Error(response.statusText);
    }
    return await response.json();
}

export const expression = async () => {
    const url = 'http://localhost:8000/api/books/';
    const response = await fetch(url);
    if(!response.ok) {
        const error = await response.json();
        console.log(error);
        throw Error(response.statusText);
    }
    return await response.json();
}
