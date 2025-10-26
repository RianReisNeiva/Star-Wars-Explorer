import { useState, useEffect } from "react";

const BASE_URL = "https://swapi.dev/api/";

function useSwapi(resource) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resource) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(`${BASE_URL}${resource}/`);
        
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const jsonData = await res.json();
        setData(jsonData.results ? jsonData.results : jsonData);

      } catch (err) {
        console.error("Failed to fetch from SWAPI:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [resource]);

  return { data, loading, error };
}

export default useSwapi;