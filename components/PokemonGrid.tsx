import { IPokemon } from "interfaces/IPokemon";
import { useRouter } from "next/router";
import PokemonCard from "./PokemonCard";

const AllPokemons = ({
  filteredPokemons,
}: {
  filteredPokemons: IPokemon[];
}) => {
  const router = useRouter();

  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 ">
      {filteredPokemons.map(({ name, id, url }: IPokemon, index) => {
        return (
          <PokemonCard
            key={index}
            name={name}
            id={id}
            handleClick={handleClick}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default AllPokemons;
