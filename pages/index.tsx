import index from "./api/index";
import AllPokemons from "components/PokemonGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState<any>([]);
  let currentOffset = 0;

  const loadTenPokemon = () => {
    const fetchData = async () => {
      const { pokemonsGrid } = await index(currentOffset);
      setPokemon((pokemon: any) => [...pokemon, ...pokemonsGrid]);
    };
    fetchData().catch(console.error);

    currentOffset += 100;
  };

  const handleScroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) loadTenPokemon();
  };

  useEffect(() => {
    loadTenPokemon();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col justify-center ">
      <div className="dark:bg-slate-900 px-6 py-8">
        <AllPokemons filteredPokemons={pokemon} />
      </div>
    </main>
  );
}
