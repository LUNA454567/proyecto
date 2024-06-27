import React from 'react';
import Table from '@mui/joy/Table';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function CustomTable() {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>FACTURA</th>
          <th>CLIENTE</th>
          <th>CEDULA</th>
          <th>TIPO</th>
          <th>MODELO</th>
          <th>FINANCIADORA</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5891015543</td>
          <td>ALBERT JHOANY TREJOS VELARDE</td>
          <td>9847172</td>
          <td>MOTOCICLETA</td>
          <td>VIVAR STYLE III</td>
          <td>SMC</td>
          <td>
            <Link to="/viewGenerateFormats">
              <Button
                sx={{
                  mb: 2,
                  bgcolor: '#0050a0',
                  color: 'white',
                  alignItems: 'center',
                  fontSize: '12px',
                  '&:hover': {
                    bgcolor: '#0050a0', // Mantiene el mismo color de fondo cuando se pasa el mouse
                    color: 'white', // Mantiene el mismo color de texto cuando se pasa el mouse
                  },
                }}
              >
                GENERAR FORMATOS
              </Button>
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomTable;
