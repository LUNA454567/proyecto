import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function FormPropsTextFieldsDate({ handleCancel }) {
  // CITY
  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setCity(value);
  };

  // CURRENT DATE
  const [currentDate, setCurrentDate] = useState('');
  const handleCurrentDateChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setCurrentDate(value);
  };

  // CURRENT PAYMENT DAY
  const [currentPaymentDay, setCurrentPaymentDay] = useState('');
  const handleCurrentPaymentDayChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setCurrentPaymentDay(value);
  };

  // REQUESTED PAYMENT DAY
  const [requestedPaymentDay, setRequestedPaymentDay] = useState('');
  const handleRequestedPaymentDayChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setRequestedPaymentDay(value);
  };

  // EXCHANGE VALUE
  const [exchangeValue, setExchangeValue] = useState('');
  const handleExchangeValueChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setExchangeValue(value);
  };

  // CLIENT NAME
  const [clientName, setClientName] = useState('');
  const handleClientNameChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setClientName(value);
  };

  // CLIENT ID
  const [clientId, setClientId] = useState('');
  const handleClientIdChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setClientId(value);
  };

  // CLIENT PHONE
  const [clientPhone, setClientPhone] = useState('');
  const handleClientPhoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setClientPhone(value);
  };

  // CLIENT EMAIL
  const [clientEmail, setClientEmail] = useState('');
  const handleClientEmailChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setClientEmail(value);
  };

  // DATEPICKER
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAccept = () => {
    console.log('Accepted');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', height: '3rem' }, // Adjusts the height of the TextFields
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
              onChange={handleCityChange}
              name="city"
              label="Ciudad:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              value={currentDate}
              onChange={handleCurrentDateChange}
              name="currentDate"
              label="Fecha Actual:"
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
                  label="Día de Pago Actual:"
                  value={currentPaymentDay}
                  onChange={handleCurrentPaymentDayChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Box>
            </LocalizationProvider>
            <TextField
              required
              value={requestedPaymentDay}
              onChange={handleRequestedPaymentDayChange}
              name="requestedPaymentDay"
              label="Día de Pago Solicitado:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              value={exchangeValue}
              onChange={handleExchangeValueChange}
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
              onChange={handleClientNameChange}
              name="clientName"
              label="Nombre Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientId}
              onChange={handleClientIdChange}
              name="clientId"
              label="Cedula Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientPhone}
              onChange={handleClientPhoneChange}
              name="clientPhone"
              label="Celular Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              value={clientEmail}
              onChange={handleClientEmailChange}
              name="clientEmail"
              label="Correo Cliente:"
              variant="standard"
              sx={{ mb: 2 }}
            />
          </div>
        </Grid>
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
            <Link to="/viewReplaceFormChangeDate">
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
      </Grid>
    </Box>
  );
}
 