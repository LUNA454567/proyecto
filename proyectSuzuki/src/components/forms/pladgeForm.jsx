// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// import OkCancelButton from '../buttons/buttonOkCan';
import { useState } from 'react';

export default function FormPropsTextFieldsPladgeGeneration({ handleCancel }) {
  //NAME OF THE LEGAL REPRESENTATIVE
  const [nameLegalRepresentative, setNameLegalRepresentative] = useState('');

  const handleNameLegalRepresentativeConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setNameLegalRepresentative(value);
  };

  //ID NUMBER
  const [idNumber, setIdNumber] = useState('');

  const handleIdNumberConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setIdNumber(value);
  };

  //CITY OF  EXPEDITION
  const [cityExpedition, setCityExpedition] = useState('');

  const handleCityExpedition = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setCityExpedition(value);
  };

  // buttons ok cancel
  const [message, setMessage] = useState('');

  const handleAccept = () => {
    setMessage('Accepted');
  };

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
        {/* TextField for nameLegalRepresentative */}
        <TextField
          autoFocus
          required
          value={nameLegalRepresentative}
          onChange={handleNameLegalRepresentativeConsChange}
          name="nameLegalRepresentative"
          label="Nombre del Representante Legal:"
          size="sm"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for IDNUMBER */}
        <TextField
          required
          value={idNumber}
          onChange={handleIdNumberConsChange}
          name="idNumber"
          label="Numero de Cedula:"
          size="sm"
          variant="standard" // Add a border to the TextField
          sx={{ mb: 2 }} // Add bottom margin
          InputProps={{
            // Styles for the input of the TextField
            style: { paddingRight: '0.5rem' }, // Add space to the right of the input
          }}
        />

        {/* TextField for  EXPEDITION */}
        <TextField
          required
          value={cityExpedition}
          onChange={handleCityExpedition}
          name="cityExpedition"
          label="Numero de Cedula:"
          size="sm"
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
          {/* New Grid item for buttons */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            {/* Centers the buttons */}
            <OkCancelButton onAccept={handleAccept} onCancel={handleCancel} />
            <Button
              type="submit"
              variant="outlined"
              disabled={
                nameLegalRepresentative === '' ||
                idNumber === '' ||
                cityExpedition === ''
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
          </div>
        </Grid>
      </div>
    </Box>
  );
}
