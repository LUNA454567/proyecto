import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';
import { useState } from 'react';
import Card from '@mui/joy/Card';

export default function FormPropsTextFieldsPladgeGeneration({ handleCancel }) {
  // NAME OF THE LEGAL REPRESENTATIVE
  const [nameLegalRepresentative, setNameLegalRepresentative] = useState('');

  const handleNameLegalRepresentativeConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setNameLegalRepresentative(value);
  };

  // ID NUMBER
  const [idNumber, setIdNumber] = useState('');

  const handleIdNumberConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setIdNumber(value);
  };

  // CITY OF EXPEDITION
  const [cityExpedition, setCityExpedition] = useState('');

  const handleCityExpedition = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setCityExpedition(value);
  };

  // Buttons ok cancel
  const [message, setMessage] = useState('');

  const handleAccept = () => {
    setMessage('Accepted');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', // Makes the container take the full height of the viewport
      }}
    >
      <Card
        sx={{
          width: 520,
          height: '40vh',
          border: 'solid',
        }}
      >
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

            {/* TextField for EXPEDITION */}
            <TextField
              required
              value={cityExpedition}
              onChange={handleCityExpedition}
              name="cityExpedition"
              label="Ciudad de Expedición:"
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
                <OkCancelButton
                  onAccept={handleAccept}
                  onCancel={handleCancel}
                />
              </div>
            </Grid>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
