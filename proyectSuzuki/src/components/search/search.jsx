import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Alert from '@mui/joy/Alert';
import ReportIcon from '@mui/icons-material/Report';
import CustomTable from '../table/tableInfoClient';
import { fetchBillByNumber } from '../../services/apiService'; 

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false); // Estado para mostrar la tabla
  const [showAlert, setShowAlert] = useState(false);
  const [tableData, setTableData] = useState([]); // Estado para almacenar los datos de la tabla

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowAlert(false); // Oculta la alerta al empezar a escribir
    setShowTable(false); // Oculta la tabla al empezar a escribir
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setShowAlert(true); // Muestra la alerta si no se ha ingresado nada
      setShowTable(false); // Asegúrate de que la tabla esté oculta
      return;
    }

    try {
      const data = await fetchBillByNumber(searchTerm);

      // Verifica si se obtuvieron datos válidos
      if (
        data &&
        data.warehouse_GetBillByNumber_R &&
        data.warehouse_GetBillByNumber_R.length > 0
      ) {
        setTableData(data.warehouse_GetBillByNumber_R); // Actualiza el estado con los datos obtenidos
        setShowTable(true); // Muestra la tabla después de obtener los datos
      } else {
        // Si no se encontraron datos válidos, muestra una alerta
        setShowTable(false);
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      // Manejar el error, mostrar una alerta o cualquier otro feedback al usuario
      setShowTable(false);
      setShowAlert(true);
    }
  };

  return (
    <Box>
      <div
        className="search-container"
        style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}
      >
        <Input
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="REF+NUMERO DE FACTURA"
          size="large"
          style={{ marginRight: '10px', width: '30%' }}
        />
        <Button onClick={handleSearch} size="large">
          Buscar
        </Button>
      </div>

      {showAlert && (
        <Alert
          variant="soft"
          color="danger"
          startDecorator={<ReportIcon />}
          endDecorator={<></>} // No hay icono de cierre en este caso
          sx={{ alignItems: 'flex-start', marginBottom: '10px' }} // Ajusta el margen inferior de la alerta
        >
          <div>
            <div>Error</div>
            <div>
              No se encontraron datos para el número de factura ingresado.
            </div>
          </div>
        </Alert>
      )}

      {/* Renderiza la tabla si showTable es true */}
      {showTable && <CustomTable data={tableData} />}
    </Box>
  );
}

export default SearchComponent;