import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import DialogTitle from '@mui/joy/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

export default function FormatGenerationDocuments() {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState('');
  const [cedula, setCedula] = React.useState('');
  const [ciudad, setCiudad] = React.useState('');
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleNombreChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setNombre(value);
  };

  const handleCedulaChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setCedula(value);
  };

  const handleCiudadChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/gi, '');
    setCiudad(value);
  };

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          padding: '5px',
        }}
      >
        <Card sx={{ padding: '2px' }} elevation={1}>
  <CardContent>
    <Typography>
      {'GENERACIONnn DE FORMATOS (PAGARE - PRENDA - CONTRATO DE COMPRAVENTA - CONFIRMACION DE FACTURA - ACTA DE ENTREGA)'}
    </Typography>
  </CardContent>
  <Divider />
  <CardContent sx={{}}>
    <Stack spacing={2}>
      <Tabs value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)}>
        <Tab label="IMPRIMIR PAGARE FINAVAL" />
        <Tab label="IMPRIMIR PAGARE" />
        <Tab label="IMPRIMIR PRENDA" />
        <Tab label="IMPRIMIR COMPRAVENTA" />
        <Tab label="IMPRIMIR ACTA ENTREGA" />
        <Tab label="IMPRIMIR CONFIRMACION DE LECTURA" />
        <Tab label="REGRESAR" />
      </Tabs>
      <Box>
        {tabIndex === 0 && (
          <Typography variant="body1">Texto para IMPRIMIR PAGARE FINAVAL</Typography>
        )}
        {tabIndex === 1 && (
          <Typography variant="body1">Texto para IMPRIMIR PAGARE</Typography>
        )}
        {tabIndex === 2 && (
          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormLabel>Nombre del representante legal:</FormLabel>
                <Input
                  autoFocus
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={nombre}
                  onChange={handleNombreChange}
                  name="nombre"
                />
                <FormLabel>Número de cédula:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={cedula}
                  onChange={handleCedulaChange}
                  name="cedula"
                />
                <FormLabel>Ciudad de expedición: </FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={ciudad}
                  onChange={handleCiudadChange}
                  name="ciudad"
                />
                <Grid container spacing={1} columns={12} sx={{ flexGrow: 1 }}>
                  <Grid item xs={6}>
                    <Button type="submit" fullWidth sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green', color: 'white', }, }}>Registrar</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button type="button" onClick={handleCloseModal} fullWidth sx={{ backgroundColor: 'RED', color: 'WHITE', border: 1, '&:hover': { backgroundColor: 'RED', color: 'WHITE', }, }}>CANCELAR</Button>
                  </Grid>
                </Grid>
              </Stack>
            </form>
          </FormControl>
        )}
        {tabIndex === 3 && (
          <Typography variant="body1">Texto para IMPRIMIR COMPRAVENTA</Typography>
        )}
        {tabIndex === 4 && (
          <Typography variant="body1">Texto para IMPRIMIR ACTA ENTREGA</Typography>
        )}
        {tabIndex === 5 && (
          <Typography variant="body1">Texto para IMPRIMIR CONFIRMACION DE LECTURA</Typography>
        )}
        {tabIndex === 6 && (
          <Typography variant="body1">Texto para REGRESAR</Typography>
        )}
      </Box>
    </Stack>
  </CardContent>
</Card>

      </Box>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalDialog>
          <DialogTitle>DATOS DE REPRESENTANTE LEGAL PARA LA PRENDA</DialogTitle>

          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormLabel>Nombre del representante legal:</FormLabel>
                <Input
                  autoFocus
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={nombre}
                  onChange={handleNombreChange}
                  name="nombre"
                />
                <FormLabel>Número de cédula:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={cedula}
                  onChange={handleCedulaChange}
                  name="cedula"
                />
                <FormLabel>Ciudad de expedición: </FormLabel>
                <Input
                  
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={ciudad}
                  onChange={handleCiudadChange}
                  name="ciudad"
                />
                <Grid container spacing={1} columns={12} sx={{ flexGrow: 1 }}>
                  <Grid item xs={6}>
                    <Button type="submit" fullWidth sx={{ backgroundColor: 'green', color: 'white', '&:hover': {
                        backgroundColor: 'green', // Mantener el color de fondo cuando se pasa el cursor
                        color: 'white', // Mantener el color del texto cuando se pasa el cursor
                      }, }}>Registrar
                      </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                        type="button"
                        onClick={handleCloseModal}
                        fullWidth
                        sx={{
                          backgroundColor: 'RED',
                          color: 'WHITE',
                          border: 1,
                          '&:hover': {
                            backgroundColor: 'RED', // Mantener el color de fondo cuando se pasa el cursor
                            color: 'WHITE', // Mantener el color del texto cuando se pasa el cursor
                          },
                        }}
                      >
                        CANCELAR
                      </Button>
                  </Grid>
                </Grid>
              </Stack>
            </form>
          </FormControl>
        </ModalDialog>
      </Modal>
    </Grid>
  );
}
