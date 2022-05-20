import GlobalContext from "../context/global-context";
import { useContext, useEffect } from "react";
import randomMessages from "./randomMessages.json";

const SetRandomLoaderMessage = () => {
  const global = useContext(GlobalContext);

  useEffect(() => {
    const interval = setInterval(
      () =>
        global.setLoaderMessage(
          randomMessages.find(
            (randomMessage) =>
              randomMessage.id === Math.floor(Math.random() * 10)
          )?.message
        ),
      2000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default SetRandomLoaderMessage;
