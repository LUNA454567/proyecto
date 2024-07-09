import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OkCancelButton from '../buttons/buttonOkCan';
import { Context } from '../../context/context.jsx';
import { Link } from 'react-router-dom';

export default function FormPropsTextFieldsDia({ handleCancel }) {
  const { nameCons, setNameCons } = useContext(Context);
  const { idCons, setIdCons } = useContext(Context);
  const { invoiceNumberCons, setInvoiceNumberCons } = useContext(Context);

  const [error, setError] = useState({
    error: false,
    message: ' ',
    invoiceNumberCons: { error: false, message: '' },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    // Limpiar los campos después de enviar
    setNameCons('');
    setIdCons('');
    setInvoiceNumberCons('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={nameCons}
        onChange={(e) => {
          const input = e.target.value;
          // Validación: Solo letras
          if (/^[a-zA-Z\s]*$/.test(input)) {
            setNameCons(input);
          }
        }}
        name="nameCons"
        label="Nombre:"
        variant="standard"
        required
        error={error.error}
        helperText={error.message}
        sx={{ mb: 2 }}
        InputProps={{
          style: { paddingRight: '0.5rem' },
        }}
      />

      <TextField
        required
        value={idCons}
        onChange={(e) => {
          const input = e.target.value;
          // Validación: Solo números
          if (/^\d*$/.test(input)) {
            setIdCons(input);
          }
        }}
        name="idCons"
        label="Cedula:"
        variant="standard"
        sx={{ mb: 2 }}
        InputProps={{
          style: { paddingRight: '0.5rem' },
        }}
      />

      <TextField
        required
        value={invoiceNumberCons}
        onChange={(e) => {
          const input = e.target.value;
          // Validación: Letras y números
          if (/^[a-zA-Z0-9]*$/.test(input)) {
            setInvoiceNumberCons(input);
          }
        }}
        name="invoiceNumberCons"
        label="Numero factura:"
        variant="standard"
        sx={{ mb: 2 }}
        InputProps={{
          style: { paddingRight: '0.5rem' },
        }}
      />

      <Grid item xs={12}>
        <Box sx={{ marginTop: '20px', fontSize: '12px', display: 'flex' }}>
          <Button
            type="submit"
            variant="outlined"
            disabled={
              nameCons === '' || idCons === '' || invoiceNumberCons === ''
            }
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
                bgcolor: 'green',
                color: 'white',
              },
            }}
          >
            <Link
              to="/viewReplaceFormConstanceUpToday"
              style={{ color: 'white' }}
            >
              ACEPTAR
            </Link>
          </Button>
          <OkCancelButton onCancel={handleCancel} />
        </Box>
      </Grid>
    </Box>
  );
}
