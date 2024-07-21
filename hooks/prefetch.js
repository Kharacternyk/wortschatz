import {useEffect, useState} from "react";
import {useLocalStorage} from "./local-storage.js";

export const usePrefetch = (url, factory, dependencies) => {
  const [cachedResponse, setCachedResponse] = useLocalStorage(url);
  const [response, setResponse] = useState(factory(cachedResponse));

  const cacheNextResponse = async () => {
    setResponse(
      factory(response === null ? await getText(url) : cachedResponse)
    );
    setCachedResponse(await getText(url));
  };

  useEffect(() => {
    cacheNextResponse();
  }, dependencies);

  return response;
};

const getText = async (url) => (await fetch(url)).text();
