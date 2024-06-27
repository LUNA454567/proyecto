import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Input from '@mui/joy/Input';
// import BasicButtons from '../buttons/buttons';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import OkCancelButton from '../buttons/buttonOkCan';

export default function FormPropsTextFieldsDia({ handleCancel }) {
  //  NAME
  const [nameCons, setNameCons] = useState('');

  const handleNameConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setNameCons(value);
  };

  // ID
  const [idCons, setIdCons] = useState('');

  const handleIdConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setIdCons(value);
  };

  // INVOICE NUMBER
  const [invoiceNumberCons, setInvoiceNumberCons] = useState('');

  const handleInvoiceNumberConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setInvoiceNumberCons(value);
  };

  // buttons ok cancel
  const [message, setMessage] = useState('');

  const handleAccept = () => {
    setMessage('Accepted');
  };

 
  const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen(openModal);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  const [error, setError] = useState({
    error:false,
    message: " "
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' }, // Style for all TextFields within the form
        // You can add more custom styles here
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          value={nameCons}
          onChange={(e) => setNameCons(e.target.value)}
          name="nameCons"
          label="Nombre:"
          variant="standard"
          required 
          error={error.error} // Mostrar error si el campo está vacío
          helperText= {error.message}  // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for ID */}
        <TextField
          required
          value={idCons}
          onChange={handleIdConsChange}
          name="idCons"
          label="Cedula:"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for invoice number */}
        <TextField
          required
          value={invoiceNumberCons}
          onChange={handleInvoiceNumberConsChange}
          name="invoiceNumberCons"
          label="Numero factura:"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* buttons */}
        <Grid item xs={12}>
      <Box
        sx={{
          marginTop: '20px',
          fontSize: '12px',
          display: 'flex',
        }}
      >
        <Link  to="/viewReplaceFormConstanceUpToday" style={{ textDecoration: 'none' }}>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              mb: 2,
              bgcolor: 'green',
              color: 'white',
              alignItems: 'center',
              marginTop: '0px',
              marginLeft: '80px',
              width: '100px',
              height: '40px',
              fontSize: '12px',
              textAlign: 'center',
              '&:hover': {
                bgcolor: 'green', // Mantiene el mismo color de fondo cuando se pasa el mouse
                color: 'white', // Mantiene el mismo color de texto cuando se pasa el mouse
              },
            }}
          >
            ACEPTAR
          </Button>
        </Link>
        <OkCancelButton onCancel={handleCancel} />
      </Box>
    </Grid>
      </Box>
  );
}
