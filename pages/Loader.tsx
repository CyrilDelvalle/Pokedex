import Image from "next/image";
import pokeball from "./pokeball.png";

const Loader = () => {
  return (
    <div className="m-auto">
      <div role="status" className="w-60 h-60 mr-2 animate-spin-slow relative">
        <Image
          src={pokeball}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-gray-200 text-center text-xl ">Chargement...</p>
    </div>
  );
};

export default Loader;
