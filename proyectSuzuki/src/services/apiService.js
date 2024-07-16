export const fetchBillByNumber = async (id) => {
  try {
    const response = await fetch(
      `http://192.168.6.100:10010/web/services/warehouse/numberBill/?pagare=${id}`
    );

    // Verificar si la respuesta es correcta
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data: ', error);
    throw error;
  }
};

// Función para obtener el último valor del día de la fecha
// export const obtenerUltimoValorDia = (fecha) => {
//   if (!fecha) return null; // Manejo de caso si no hay fecha

//   const partesFecha = fecha.split('-');
//   return partesFecha[2]; // Devuelve el último valor (día)
// }