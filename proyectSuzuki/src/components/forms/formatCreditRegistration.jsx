import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import DialogTitle from '@mui/joy/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function FormatGenerationDocuments2() {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState('');
  const [cedula, setCedula] = React.useState('');
  const [ciudad, setCiudad] = React.useState('');

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
          // border: '1px dashed grey',
        }}
      >
        <Card sx={{ padding: '2px' }} elevation={1}>
          <CardContent>
            <Typography>
              {
                'GENERACION DE FORMATOS (PAGARE - PRENDA - CONTRATO DE COMPRAVENTA - CONFIRMACION DE FACTURA - ACTA DE ENTREGA)'
              }
            </Typography>
          </CardContent>
          <Divider />
          <CardContent sx={{}}>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button variant="contained">IMPRIMIR PAGARE FINAVAL</Button>
              <Button variant="contained">IMPRIMIR PAGARE</Button>
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  // border: '1px solid black',
                }}
              >
                IMPRIMIR PRENDA
              </Button>
              <Button variant="contained">IMPRIMIR COMPRAVENTA</Button>
              <Button variant="contained">IMPRIMIR ACTA ENTREGA</Button>
              <Button variant="contained">
                IMPRIMIR CONFIRMACION DE LECTURA
              </Button>
              <Button
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
              >
                REGRESAR
              </Button>
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
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'green', // Mantener el color de fondo cuando se pasa el cursor
                          color: 'white', // Mantener el color del texto cuando se pasa el cursor
                        },
                      }}
                    >
                      Registrar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="button"
                      onClick={handleCloseModal}
                      fullWidth
                      sx={{ backgroundColor: 'white', color: 'black' }}
                    >
                      Cerrar
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
