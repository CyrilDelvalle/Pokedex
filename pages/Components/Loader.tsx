import Image from "next/image";
import { useEffect, useState } from "react";
import pokeball from "../../public/pokeballLoaderSpinner.png";
import randomMessages from "../../utils/randomMessages.json";

const Loader = () => {
  const [loaderMessage, setLoaderMessage] = useState(randomMessages[0].message);

  useEffect(() => {
    const interval = setInterval(() => {
      const result = randomMessages[Math.floor(Math.random() * 10)].message;

      if (result) {
        setLoaderMessage(result);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [loaderMessage]);

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
      <p className="text-gray-200 text-center text-xl mt-4">{loaderMessage}</p>
    </div>
  );
};

export default Loader;
