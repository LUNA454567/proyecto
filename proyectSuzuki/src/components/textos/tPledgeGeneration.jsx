import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OkCancelButton from '../buttons/buttonOkCan';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import Button from '@mui/material/Button';
import ViewReplaceFormPladgeWithoutCreditorTenure from '../../views/viewReplaceFormPladgeWithoutCreditorTenure'

export default function FormPropsTextFieldsPladgeGeneration({ handleCancel }) {
  // Estados del formulario
  const [nameLegalRepresentative, setNameLegalRepresentative] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [cityExpedition, setCityExpedition] = useState('');

  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({});

  // Estado para controlar la visibilidad del componente adicional
  const [showAdditionalView, setShowAdditionalView] = useState(false);

  // Manejo de la sumisión del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      nameLegalRepresentative,
      idNumber,
      cityExpedition,
    };

    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));

    console.log('Datos guardados en localStorage:', newFormData);
    <viewReplaceFormPladgeWithoutCreditorTenure />

    // Mostrar el componente adicional
    setShowAdditionalView(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Permite que los elementos hijos se apilen verticalmente
        alignItems: 'center',
        height: 'auto', // Ajusta la altura según el contenido
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
            '& .MuiTextField-root': { m: 1, width: '100%' }, // Style for all TextFields within the form
            // You can add more custom styles here
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            {/* TextField for nameLegalRepresentative */}
            <TextField
              autoFocus
              required
              value={nameLegalRepresentative}
              onChange={(event) => {
                // Obtén el valor del campo
                const newValue = event.target.value;
                // Usa una expresión regular para permitir solo letras y espacios
                const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, '');
                // Actualiza el estado solo con los caracteres válidos
                setNameLegalRepresentative(filteredValue);
              }}
              name="nameLegalRepresentative"
              label="Nombre del Representante Legaaal:"
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
              onChange={(event) => {
                // Obtén el valor del campo
                const newValue = event.target.value;
                // Usa una expresión regular para permitir solo números
                const filteredValue = newValue.replace(/[^0-9]/g, '');
                // Actualiza el estado solo con los números válidos
                setIdNumber(filteredValue);
              }}
              name="idNumber"
              label="Número de Cédula:"
              size="sm"
              variant="standard" // Add a border to the TextField
              sx={{ mb: 2 }} // Add bottom margin
              inputProps={{ pattern: '[0-9]+' }}
            />

            {/* TextField for EXPEDITION */}
            <TextField
              required
              value={cityExpedition}
              onChange={(event) => {
                // Obtén el valor del campo
                const newValue = event.target.value;
                // Usa una expresión regular para permitir solo letras y espacios
                const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, '');
                // Actualiza el estado solo con los caracteres válidos
                setCityExpedition(filteredValue);
              }}
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
              </div>
            </Grid>
          </div>
        </Box>
      </Card>

      {/* Renderiza el componente adicional condicionalmente */}
      {showAdditionalView && (
        <Box
          sx={{
            marginTop: '20px', // Añade espacio entre el formulario y el componente adicional
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ViewReplaceFormPladgeWithoutCreditorTenure />
        </Box>
      )}
    </Box>
  );
}
