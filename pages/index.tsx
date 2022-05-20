import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

import SearchBar from "./Components/SearchBar";
import index from "./api/index";
import { IPokemon } from "interfaces/IPokemon";
import Loader from "./Components/Loader";
import AllPokemons from "./Components/PokemonGrid";
import GlobalContext from "context/global-context";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);
  const global = useContext(GlobalContext);
  const { pokemons, setPokemons } = global;

  useEffect(() => {
    const fetchData = async () => {
      const pokemons: IPokemon[] = await index();
      setPokemons(pokemons), setFilteredPokemons(pokemons);
    };
    fetchData().catch(console.error);
  }, [setPokemons]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPokemons(pokemons);
    } else {
      setFilteredPokemons(
        pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchQuery)
        )
      );
    }
  }, [pokemons, searchQuery]);

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center ">
        <div className="dark:bg-slate-900 px-6 py-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isActivate={pokemons.length === 0}
          />
          {pokemons.length !== 0 && (
            <AllPokemons filteredPokemons={filteredPokemons} />
          )}
        </div>
        {pokemons.length === 0 && <Loader />}
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
