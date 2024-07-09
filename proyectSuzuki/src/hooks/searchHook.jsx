import { useEffect, useState } from 'react';

const useSearchHook = (searchTerm) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm.trim()) {
        setData(null);
        setError('El término de búsqueda está vacío.');
        return;
      }

      try {
        const response = await fetch(
          'http://192.168.6.100:10010/web/services/warehouse/numberBill/?pagare=${searchTerm}'
        );
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error al obtener los datos.');
      }
    };

    fetchData();
  }, [searchTerm]);

  return { data, error };
};

export default useSearchHook;