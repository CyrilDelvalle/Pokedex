import GlobalContext from "../../context/global-context";
import Image from "next/image";
import { useContext } from "react";
import pokeball from "../../public/pokeballLoaderSpinner.png";
import SetRandomLoaderMessage from "../../utils/setRandomLoaderMessage";

const Loader = () => {
  const global = useContext(GlobalContext);
  SetRandomLoaderMessage();

  return (
    <div>
      <div className="m-auto">
        <div
          role="status"
          className="w-60 h-60 animate-spin-slow relative m-auto block ml-auto mr-auto"
        >
          <Image
            src={pokeball}
            alt="Loader"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <p className="text-gray-200 text-center text-xl mt-4">
        {global.loaderMessage}
      </p>
    </div>
  );
};

export default Loader;
