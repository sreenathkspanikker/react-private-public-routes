import { useState, useEffect } from "react";
import { get } from "../server/RequestManager";

export const useHttp = (url, dependency) => {
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await get(url)
      setState(res)
    }
    fetchData()
    return () => {
      setLoading(true)
    }
  }, dependency)


  return [isLoading, state];
};