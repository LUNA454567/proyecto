// src/services/apiService.js

export const fetchBillByNumber = async (searchTerm) => {
  try {
    const response = await fetch(`http://192.168.6.100:10010/web/services/warehouse/numberBill/?pagare=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
