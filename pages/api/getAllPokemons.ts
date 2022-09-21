import { IPokemonApi } from "interfaces/IPokemon";

const getAllPokemons = async (currentOffset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${currentOffset}`
  );
  const data = await response.json();

  const promisesArray = data.results.map((result: IPokemonApi) => {
    return fetch(result.url).then((response) => response.json());
  });

  return Promise.all(promisesArray);
};

export default getAllPokemons;
