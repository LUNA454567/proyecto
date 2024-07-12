// src/services/apiService.js

export const fetchBillByNumber = async (id) => {
  try {
    const response = await fetch(
      `http://192.168.6.100:10010/web/services/warehouse/numberBill/?pagare=${id}`
    );
    
    //verifiar si la respuesta es correcta
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
