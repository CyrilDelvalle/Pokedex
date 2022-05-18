import { IPokemonApi } from "../IPokemon";

const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898");
  const data = await response.json();

  const promisesArray = data.results.map((result: IPokemonApi) => {
    return fetch(result.url).then((response) => response.json());
  });

  return Promise.all(promisesArray);
};

export default getAllPokemons;
