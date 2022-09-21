import React from "react";
import Image from "next/image";

function PokemonCard({ name, id, handleClick, url }: any) {
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
}

export default PokemonCard;
