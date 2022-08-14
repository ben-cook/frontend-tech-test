import { useEffect, useState } from "react";

import { fetchData } from "../data";

export const useData = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }, []);

  return { data, status };
};
