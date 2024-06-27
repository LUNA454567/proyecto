// SearchComponent.js
import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Alert from '@mui/joy/Alert';
import ReportIcon from '@mui/icons-material/Report';
import CustomTable from '../table/tableInfoClient';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false); // Estado para mostrar la tabla
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowAlert(false); // Oculta la alerta al empezar a escribir
    setShowTable(false); // Oculta la tabla al empezar a escribir
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setShowAlert(true); // Muestra la alerta si no se ha ingresado nada
      setShowTable(false); // Asegúrate de que la tabla esté oculta
      return;
    }

    setShowTable(true); // Muestra la tabla cuando hay datos en el campo de entrada
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
            <div>Por favor Ingresa el numero de factura</div>
          </div>
        </Alert>
      )}

      {/* Renderiza la tabla si showTable es true */}
      {showTable && <CustomTable />}
    </Box>
  );
}

export default SearchComponent;
