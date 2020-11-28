


export const getCharacters = fetch ("https://rickandmortyapi.com/api/character/").then( (data)=> {
    return data.json();
})