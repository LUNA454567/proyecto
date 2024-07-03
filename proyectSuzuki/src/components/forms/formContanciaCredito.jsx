import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OkCancelButton from '../buttons/buttonOkCan';
import { Context } from '../../context/context.jsx';
import { Link } from 'react-router-dom';

export default function FormPropsTextFieldsCreditCertificate({ handleCancel }) {
  //  wallet email
  const { walletEmail, setWalletEmail } = useContext(Context);
  const { whatsappNumber, setWhatsappNumber } = useContext(Context);
  const { name, setName } = useContext(Context);
  const { id, setId } = useContext(Context);
  const { cellphone, setCellphone } = useContext(Context);
  const { email, setEmail } = useContext(Context);

  // const handleWalletEmailChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z0-9\s@.]/gi, '');
  //   setWalletEmail(value);
  // };

  // whatsapp number

  // const handleWhatsappNumberChange = (event) => {
  //   const value = event.target.value.replace(/[^0-9]+/g, '');
  //   setWhatsappNumber(value);
  // };

  // name
  // const handleNameChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z\s]+/g, '');
  //   setName(value);
  // };

  // ID
  // const handleIdChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setId(value);
  // };

  // cellphone
  // const handleCellphoneChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setCellphone(value);
  // };

  // email
  // const handleEmailChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
  //   setEmail(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
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
      <div>
        {/* TextField for wallet email */}
        <TextField
          autoFocus
          required
          value={walletEmail}
          onChange={(e) => setWalletEmail(e.target.value)}
          name="walletEmail"
          label="Correo Cartera:"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/*  TextField for whatsapp number*/}
        <TextField
          required
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          name="whatsappNumber"
          label="Número de Whatsapp:"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for name  */}
        <TextField
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Nombre"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for ID*/}
        <TextField
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          name="id"
          label="Cédula"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for cellphone*/}
        <TextField
          required
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          name="cellphone"
          label="Celular"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for email*/}
        <TextField
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Correo Electrónico"
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
            <Button
              type="submit"
              variant="outlined"
              disabled={
                walletEmail === '' ||
                whatsappNumber === '' ||
                name === '' ||
                id === '' ||
                cellphone === '' ||
                email === ''
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
                  bgcolor: 'green', // Mantiene el mismo color de fondo cuando se pasa el mouse
                  color: 'white', // Mantiene el mismo color de texto cuando se pasa el mouse
                },
              }}
            >
              <Link
                to="/viewReplaceFormCreditStatement"
                style={{ color: 'white' }}
              >
                ACEPTAR
              </Link>
            </Button>
            <OkCancelButton onCancel={handleCancel} />
          </Box>
        </Grid>
      </div>
    </Box>
  );
}
