import getAllPokemons from "./getAllPokemons";
import getAllPokemonSpecies from "./getAllPokemonSpecies";
import { IPokemon } from "interfaces/IPokemon";

const setPokemonGridData = (allPokemons: any[], allPokemonSpecies: any[]) => {
  return allPokemons.map((pokemon, index) => {
    const { id } = pokemon;

    return {
      id,
      name: allPokemonSpecies[index].names.find(
        (lang: { language: { name: string } }) => lang.language.name === "fr"
      ).name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    } as IPokemon;
  });
};

const index = async () => {
  const allPokemons = await getAllPokemons();
  const allPokemonSpecies = await getAllPokemonSpecies();
  const pokemonsGrid = setPokemonGridData(allPokemons, allPokemonSpecies);

  return { pokemonsGrid, allPokemons, allPokemonSpecies };
};

export default index;
