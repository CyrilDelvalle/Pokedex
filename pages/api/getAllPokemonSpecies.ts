const getAllPokemonSpecies = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species/?limit=898"
  );
  const data = await response.json();
  const promisesArray = data.results.map((result: any) => {
    return fetch(result.url).then((response) => response.json());
  });

  return Promise.all(promisesArray);
};

export default getAllPokemonSpecies;
