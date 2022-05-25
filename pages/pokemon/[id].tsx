import PokemonContext from "contexts/pokemon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const PokemonDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { pokemons } = useContext<any>(PokemonContext);

  console.log(pokemons);

  return <div> COUCOU</div>;
};

export default PokemonDetail;
