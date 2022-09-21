import { IPokemonApi } from "interfaces/IPokemon";

const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const data = await response.json();

  const promisesArray = data.results.map((result: IPokemonApi) => {
    return fetch(result.url).then((response) => response.json());
  });

  return Promise.all(promisesArray);
};

export default getAllPokemons;
