import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalContext from "../context/global-context";
import { useState } from "react";
import { IPokemon } from "interfaces/IPokemon";

function MyApp({ Component, pageProps }: AppProps) {
  const setLoaderMessage = (loaderMessage: string) => {
    setState({ ...state, loaderMessage });
  };

  const setPokemons = (pokemons: IPokemon[]) => {
    setState({ ...state, pokemons });
  };

  const [state, setState] = useState({
    loaderMessage: "",
    setLoaderMessage,
    pokemons: [] as IPokemon[],
    setPokemons,
  });

  return (
    <GlobalContext.Provider value={state}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
