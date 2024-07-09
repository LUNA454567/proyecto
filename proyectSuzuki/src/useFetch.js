import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://192.168.6.100:10010/web/services/warehouse/numberBill/?pagare=${searchTerm}")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) =>setError(error))
    .finally(() => setLoading(false));

  }, []);
  return {data,loading, error};

}