import React from 'react';
import Box from '@mui/material/Box';

const BotonesAceptarCancelar = ({ onAceptar, onCancel }) => {
  return (
    <Box
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {/* <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', marginRight: '10px' }} onClick={onAceptar}>Aceptar</button> */}
      <button
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          marginLeft: '4px',
          color: 'white',
          width: '100px',
          height: '40px',
          fontSize: '12px',
          textAlign: 'center',
        }}
        onClick={onCancel}
      >
        CANCELAR
      </button>
    </Box>
  );
};

export default BotonesAceptarCancelar;
