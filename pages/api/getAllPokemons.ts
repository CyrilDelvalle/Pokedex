const getAllPokemons = () => {
  return new Promise(function (resolve) {
    fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=898")
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        const promisesArray = results.map((result: any) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then((data) => {
        resolve(data);
      });
  });
};

export default getAllPokemons;
