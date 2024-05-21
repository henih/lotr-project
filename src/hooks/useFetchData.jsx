import { useState, useEffect } from "react";

export default function useFetchData(selection) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = "https://the-one-api.dev/v2";
  const APITOKEN = import.meta.env.VITE_APP_API_KEY;
  let options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  useEffect(() => {
    if (!selection) {
      return;
    }
    setLoading(true);
    async function fetchData() {
      const url = apiURL + "/" + selection;
      try {
        const res = await fetch(url, options);
        const jsonData = await res.json();
        console.log("Fetched data:", jsonData); // Log fetched data
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);
  return { data, error, loading };
}
