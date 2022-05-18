import getAllPokemons from "./getAllPokemons";
import getAllPokemonSpecies from "./getAllPokemonSpecies";
import { IPokemon } from "../IPokemon";

const index = async () => {
  const allPokemons = await getAllPokemons();
  const allPokemonSpecies = await getAllPokemonSpecies();

  console.log(allPokemons, allPokemonSpecies);

  const pokemons = allPokemons.map((pokemon, index) => {
    const { id } = pokemon;

    return {
      id,
      name: allPokemonSpecies[index].names.find(
        (lang: { language: { name: string } }) => lang.language.name === "fr"
      ).name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    } as IPokemon;
  });

  return pokemons;
};

export default index;
