import { createContext, useState } from "react";

const PokemonContext = createContext({}, () => {
  pokemons, addPokemons;
});

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState({
    pokemonsGrid: [],
    allPokemons: [],
    allPokemonSpecies: [],
  });
  const addPokemons = (pokemons) => setPokemons(pokemons);

  return (
    <PokemonContext.Provider value={{ pokemons, addPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
