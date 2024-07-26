import * as React from 'react';
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import Button from '@mui/material/Button';
import OkCancelButton from '../buttons/buttonOkCan';
import { Context } from '../../context/context.jsx';

export default function FormPropsTextFieldsPladgeGeneration({
  handleCancel,
  handleShowAdditionalView,
}) {
  const [nameLegalRepresentative, setNameLegalRepresentative] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [cityExpedition, setCityExpedition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      nameLegalRepresentative,
      idNumber,
      cityExpedition,
    };

    localStorage.setItem('formData', JSON.stringify(newFormData));
    console.log('Datos guardados en localStorage:', newFormData);

    handleCancel(); // Cerrar el modal
    handleShowAdditionalView(); // Mostrar la vista adicional
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
      }}
    >
      <Card
        sx={{
          width: 520,
          border: 'solid',
        }}
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              autoFocus
              required
              value={nameLegalRepresentative}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(input)) {
                  setNameLegalRepresentative(input);
                }
              }}
              name="nameLegalRepresentative"
              label="Nombre del Representante Legal:"
              size="small"
              variant="standard"
              sx={{ mb: 2 }}
              InputProps={{
                style: { paddingRight: '0.5rem' },
              }}
            />
            <TextField
              required
              value={idNumber}
              onChange={(e) => {
                const input = e.target.value;
                if (/^\d*$/.test(input)) {
                  setIdNumber(input);
                }
              }}
              name="idNumber"
              label="Número de Cédula:"
              size="small"
              variant="standard"
              sx={{ mb: 2 }}
              inputProps={{ pattern: '[0-9]+' }}
            />
            <TextField
              required
              value={cityExpedition}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(input)) {
                  setCityExpedition(input);
                }
              }}
              name="cityExpedition"
              label="Ciudad de Expedición:"
              size="small"
              variant="standard"
              sx={{ mb: 2 }}
              InputProps={{
                style: { paddingRight: '0.5rem' },
              }}
            />
            <Grid item xs={12}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <OkCancelButton onCancel={handleCancel} />
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
                    marginTop: 0,
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
                  ACEPTAR
                </Button>
              </div>
            </Grid>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
