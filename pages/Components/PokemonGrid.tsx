import Image from "next/image";
import { IPokemon } from "interfaces/IPokemon";
import { useRouter } from "next/router";

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
      {filteredPokemons.map(({ id, name, url }: IPokemon) => {
        return (
          <div
            className="border dark:bg-slate-800 text-white rounded-md flex flex-col justify-end text-center hover:font-bold cursor-pointer"
            key={name}
            onClick={(e) => handleClick(e, `/pokemon/${id}`)}
          >
            <div className="mx-auto w-20 h-20 relative">
              <Image src={url} alt="name" layout="fill" objectFit="contain" />
            </div>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllPokemons;
