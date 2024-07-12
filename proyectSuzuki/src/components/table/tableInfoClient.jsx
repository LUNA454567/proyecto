import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import Table from '@mui/joy/Table';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CustomTable({ data }) {
  console.log(data)
  //añadir 
  const navigate = useNavigate()

  const handleredirect = (id) =>{
    console.log(id)
    navigate(`viewGenerateFormats/${id}`)
  }
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>NRO_PAGARE</th>
          <th>CLIENTE</th>
          <th>CEDULA</th>
          <th>TIPO</th>
          <th>MODELO</th>
          <th>FINANCIADORA</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.NRO_PAGARE}</td>
            <td>{item.CL_NOMBRE}</td>
            <td>{item.CL_NROID}</td>
            <td>{item.CLASE}</td>
            <td>{item.LINEA.trim()}</td>
            <td>{item.FINANCIADORA}</td>
            <td>
                <Button
                //se añade onclick
                onClick={() => handleredirect(item.NRO_PAGARE)}
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
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Define PropTypes para validar las props
CustomTable.propTypes = {
  data: PropTypes.array.isRequired, // Validación para 'data' como un arreglo requerido
};

export default CustomTable;