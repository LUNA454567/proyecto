import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import BasicButtons from '../buttons/buttons';
import { useState } from 'react';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function FormPropsTextFieldsFinaval({handleCancel}) {
  //  wallet email
  const [walletEmail, setWalletEmail] = useState('');

  const handleWalletEmailChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]/gi, '');
    setWalletEmail(value);
  };

  // whatsapp number
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const handleWhatsappNumberChange = (event) => {
    const value = event.target.value.replace(/[^0-9]+/g, '');
    setWhatsappNumber(value);
  };

  // name
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]+/g, '');
    setName(value);
  };

  // ID
  const [id, setId] = useState('');
  const handleIdChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setId(value);
  };

  // cellphone
  const [cellphone, setCellphone] = useState('');
  const handleCellphoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); 
    setCellphone(value);
  };

  // email
  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setEmail(value);
  };

    // buttons ok cancel 
    const [message, setMessage] = useState('');

    const handleAccept = () => {
      setMessage('Accepted');
    };
  
    // const handleCancel = () => {
    //   setMessage('Canceled');
    // };
  // close modal by button
  // const [open, setOpen] = useState(true); // Destructuring of state and function to update it

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' }, // Style for all TextFields within the form
        // You can add more custom styles here
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
          onChange={handleWalletEmailChange}
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
          onChange={handleWhatsappNumberChange}
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
          onChange={handleNameChange}
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
          onChange={handleIdChange}
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
          onChange={handleCellphoneChange}
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
          onChange={handleEmailChange}
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
          {' '}
          <Box
            sx={{
              marginTop: '20px',
              fontSize: '12px',
              display: 'flex',
            }}
          >
            <Link to="/viewReplaceFormConstanceFinaval">
              <Button
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
      </div>
    </Box>
  );
}
