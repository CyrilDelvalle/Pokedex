import PokemonContext from "contexts/pokemon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const PokemonDetail: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { pokemons } = useContext<any>(PokemonContext);
  const pokemonName = name as string;

  console.log(pokemons);

  return (
    <div> {pokemonName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</div>
  );
};

export default PokemonDetail;
