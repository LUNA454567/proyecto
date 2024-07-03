import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Context } from '../../context/context.jsx';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function FormPropsTextFieldsDate({ handleCancel }) {
  const { city, setCity } = useContext(Context);
  const { currentPaymentDay, setCurrentPaymentDay } = useContext(Context);
  const { requestedPaymentDay, setRequestedPaymentDay } = useContext(Context);
  const { exchangeValue, setExchangeValue } = useContext(Context);
  const { clientName, setClientName } = useContext(Context);
  const { clientId, setClientId } = useContext(Context);
  const { clientPhone, setClientPhone } = useContext(Context);
  const { clientEmail, setClientEmail } = useContext(Context);

  const { currentDate, setCurrentDate } = useContext(Context);
  const handleChangeDate = (event) => {
    // event es el nuevo valor de fecha
    let date = format(event, 'dd/MMMM/yyyy', { locale: es }); // Formatea la fecha a 'dd/MMMM/yyyy', MMMMM es el mes en letras
    let day = date.split('/')[0];
    let month = date.split('/')[1];
    let year = date.split('/')[2];
    let newDate = 'El ' + day + ' de ' + month + ' del ' + year;
    setCurrentDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  // CITY

  // const handleCityChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
  //   setCity(value);
  // };

  // CURRENT DATE

  // const handleCurrentDateChange = (newValue) => {
  //   setCurrentDate(newValue); // Actualiza directamente el estado con el nuevo valor de fecha
  // };

  // CURRENT PAYMENT DAY
  // const handleCurrentPaymentDayChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setCurrentPaymentDay(value);
  // };

  // REQUESTED PAYMENT DAY
  // const handleRequestedPaymentDayChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setRequestedPaymentDay(value);
  // };

  // EXCHANGE VALUE
  // const handleExchangeValueChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setExchangeValue(value);
  // };

  // CLIENT NAME
  // const handleClientNameChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
  //   setClientName(value);
  // };

  // CLIENT ID
  // const handleClientIdChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setClientId(value);
  // };

  // CLIENT PHONE
  // const handleClientPhoneChange = (event) => {
  //   const value = event.target.value.replace(/\D/g, '');
  //   setClientPhone(value);
  // };

  // CLIENT EMAIL
  // const handleClientEmailChange = (event) => {
  //   const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
  //   setClientEmail(value);
  // };

  // Accept button handler
  // const handleAccept = () => {
  //   console.log('Accepted');
  // };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', height: '3rem' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div>
            <Typography sx={{ mt: 1 }}>{'Información del Crédito:'}</Typography>
            <TextField
              autoFocus
              required
              value={city}
              onChange={(e) => {
                const input = e.target.value;
                // Validación: Solo letras
                if (/^[a-zA-Z\s]*$/.test(input)) {
                  setCity(input);
                }
              }}
              name="city"
              label="Ciudad:"
              variant="standard"
              sx={{ mb: 2 }}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 2,
                }}
              >
                <DatePicker
                  label="Fecha Actual:"
                  value={currentDate}
                  name="currentDate"
                  onChange={handleChangeDate}
                />
              </Box>
            </LocalizationProvider>

            <TextField
              required
              value={currentPaymentDay}
              onChange={(e) => {
                const input = e.target.value;
                // Validación: Solo números
                if (/^\d*$/.test(input)) {
                  setCurrentPaymentDay(input);
                }
              }}
              name="currentPaymentDay"
              label="Día Pago Actual:"
              variant="standard"
              sx={{ mb: 2 }}
            />

            <TextField
              required
              value={requestedPaymentDay}
              onChange={(e) => {
                const input = e.target.value;
                // Validación: Solo números
                if (/^\d*$/.test(input)) {
                  setRequestedPaymentDay(input);
                }
              }}
              name="requestedPaymentDay"
              label="Día Pago Solicitado:"
              variant="standard"
              sx={{ mb: 2 }}
            />

            <TextField
              required
              value={exchangeValue}
              onChange={(e) => {
                const input = e.target.value;
                // Validación: Solo números
                if (/^\d*$/.test(input)) {
                  setExchangeValue(input);
                }
              }}
              name="exchangeValue"
              label="Valor Cambio:"
              variant="standard"
              sx={{ mb: 2, textAlign: 'center' }}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Typography sx={{ mt: 1 }}>{'Información del Cliente:'}</Typography>
            <TextField
              value={clientName}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(input)) {
                  setClientName(input);
                }
              }}
              name="clientName"
              label="Nombre Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientId}
              onChange={(e) => {
                const input = e.target.value;
                if (/^\d*$/.test(input)) {
                  setClientId(input);
                }
              }}
              name="clientId"
              label="Cedula Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientPhone}
              onChange={(e) => {
                const input = e.target.value;
                if (/^\d*$/.test(input)) {
                  setClientPhone(input);
                }
              }}
              name="clientPhone"
              label="Celular Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientEmail}
              onChange={(e) => {
                const input = e.target.value;
                // Validación: Letras y números
                if (/^[a-zA-Z0-9-@]*.$/.test(input)) {
                  setClientEmail(input);
                }
              }}
              name="clientEmail"
              label="Correo Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
          </div>
        </Grid>
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
                city === '' ||
                currentDate === null || // Cambiado a comparación con null para DatePicker
                currentPaymentDay === '' ||
                requestedPaymentDay === '' ||
                exchangeValue === '' ||
                clientName === '' ||
                clientId === '' ||
                clientPhone === '' ||
                clientEmail === ''
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
              <Link to="/viewReplaceFormChangeDate" style={{ color: 'white' }}>
                ACEPTAR
              </Link>
            </Button>
            <OkCancelButton onCancel={handleCancel} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
