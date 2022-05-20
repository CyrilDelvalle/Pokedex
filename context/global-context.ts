import { IPokemon } from "interfaces/IPokemon";
import React from "react";

const GlobalContext = React.createContext({
  loaderMessage: "",
  setLoaderMessage: (data) => {},
  pokemons: [] as IPokemon[],
  setPokemons: (data) => {},
});

export default GlobalContext;
