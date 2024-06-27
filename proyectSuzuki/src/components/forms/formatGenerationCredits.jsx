import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Input from '@mui/joy/Input';
import Table from '@mui/joy/Table';
import Divider from '@mui/material/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from 'react-router-dom';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FormatGenerationCredits() {
  const [openFormConstanciaCredito, setOpenFormConstanciaCredito] =
    useState(false);
  const [openFormConstanciaDia, setOpenFormConstanciaDia] = useState(false);
  const [openFormSolicitudCambioFecha, setOpenFormSolicitudCambioFecha] =
    useState(false);
  const [
    openFormConstanciaCreditoFinaval,
    setOpenFormConstanciaCreditoFinaval,
  ] = useState(false);

  const [correoCartera, setCorreoCartera] = useState('');
  const [numeroWhatsapp, setNumeroWhatsapp] = useState('');
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [celular, setCelular] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');

  // registro constancia creditos al dia
  const [nombreCons, setNombreCons] = useState('');
  const [cedulaCons, setCedulaCons] = useState('');
  const [numeroFactCons, setNumeroFactCons] = useState('');

  // registro cambio de fecha
  // Informacion del credito

  const [ciudad, setCiudad] = useState('');
  const [fechaActual, setFechaActual] = useState('');
  const [diaPagoActual, setDiaPagoActual] = useState('');
  const [diaPagoSolicitado, setDiaPagoSolicitado] = useState('');
  const [valorCambio, setValorCambio] = useState('');
  // Informacion del cliente
  const [nombreCliente, setNombreCliente] = useState('');
  const [cedulaCliente, setCedulaCliente] = useState('');
  const [celularCliente, setCelularCliente] = useState('');
  const [correoCliente, setCorreoCliente] = useState('');

  const handleCloseModal = () => {
    setOpenFormConstanciaCredito(false);
    setOpenFormConstanciaDia(false);
    setOpenFormSolicitudCambioFecha(false);
    setOpenFormConstanciaCreditoFinaval(false);
  };

  const handleCorreoCarteraChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]/gi, '');
    setCorreoCartera(value);
  };

  const handleNumeroWhatsappChange = (event) => {
    const value = event.target.value.replace(/[^0-9]+/g, '');
    setNumeroWhatsapp(value);
  };

  const handleNombreChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]+/g, '');
    setNombre(value);
  };

  const handleCedulaChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setCedula(value);
  };

  const handleCelularChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Solo permite dígitos numéricos
    setCelular(value);
  };

  const handleCorreoElectronicoChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setCorreoElectronico(value);
  };

  // registro constancia creditos al dia

  const handleNombreConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]+/g, '');
    setNombreCons(value);
  };

  const handleCedulaConsChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Solo permite dígitos numéricos
    setCedulaCons(value);
  };

  const handleNumeroFactConsChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setNumeroFactCons(value);
  };

  // registro cambio de fecha

  const handleCiudadChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setCiudad(value);
  };

  const handleFechaActualChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setFechaActual(value);
  };

  const handleDiaPagoActual = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setDiaPagoActual(value);
  };

  const handleDiaPagoSolicitado = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setDiaPagoSolicitado(value);
  };
  const handleValorCambio = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setValorCambio(value);
  };
  //info del cliente
  const handleNombreCliente = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setNombreCliente(value);
  };
  const handleCedulaCliente = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setCedulaCliente(value);
  };
  const handleCelularCliente = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setCelularCliente(value);
  };
  const handleCorreoClienteChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z0-9\s@.]+/g, '');
    setCorreoCliente(value);
  };

  // constancia de crediito finaval

  const handleOpenFormConstanciaCredito = () => {
    setOpenFormConstanciaCredito(true);
    setOpenFormConstanciaDia(false);
    setOpenFormSolicitudCambioFecha(false);
    setOpenFormConstanciaCreditoFinaval(false);
  };

  const handleOpenFormConstanciaDia = () => {
    setOpenFormConstanciaDia(true);
    setOpenFormConstanciaCredito(false);
    setOpenFormSolicitudCambioFecha(false);
    setOpenFormConstanciaCreditoFinaval(false);
  };

  const handleOpenFormSolicitudCambioFecha = () => {
    setOpenFormSolicitudCambioFecha(true);
    setOpenFormConstanciaCredito(false);
    setOpenFormConstanciaDia(false);
    setOpenFormConstanciaCreditoFinaval(false);
  };

  const handleOpenFormConstanciaCreditoFinaval = () => {
    setOpenFormSolicitudCambioFecha(true);
    setOpenFormConstanciaCredito(false);
    setOpenFormConstanciaDia(false);
    setOpenFormConstanciaCreditoFinaval(true);
  };

  return (
    <Grid item xs={12}>
      <Box sx={{ padding: '5px', }}>
        <Card sx={{ padding: '2px' }} elevation={1}>
          <Divider />
          <CardContent sx={{}}>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={handleOpenFormConstanciaCredito}
              >
                CONSTANCIA DE CRÉDITOpepe
              </Button>

              <Button variant="contained" onClick={handleOpenFormConstanciaDia}>
                CONSTANCIA AL DÍA
              </Button>

              <Button
                variant="contained"
                onClick={handleOpenFormSolicitudCambioFecha}
              >
                SOLICITUD DE CAMBIO DE FECHA
              </Button>
              <Button
                variant="contained"
                onClick={handleOpenFormConstanciaCreditoFinaval}
              >
                CONSTANCIA DE CRÉDITO ***FINAVAL***
              </Button>
            </Stack>
            <Box sx={{ margin: 2 }}>
              <Typography sx={{ mt: 5 }}>{'NUMERO FACTURA:'}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Input placeholder="REF + NÚMERO DE FACTURA" size="sm" />
                <Box sx={{ ml: 1 }}>
                  <Button variant="contained">Buscar</Button>
                </Box>
              </Box>
            </Box>
            <Grid>
              <Box>
                <Table aria-label="basic table">
                  <thead>
                    <tr>
                      <th>FACTURA</th>
                      <th>CLIENTE</th>
                      <th>CEDULA</th>
                      <th>TIPO</th>
                      <th>MODELO</th>
                      <th>FINANCIADORA</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Frozen yoghurt</td>
                      <td>159</td>
                      <td>6</td>
                      <td>24</td>
                      <td>4</td>
                      <td>7</td>
                      <td>
                        <Link to="/formatGenerationDocuments">
                          <button>GENERAR</button>
                        </Link>
                        {/* <Button variant="contained" href="/formatGenerationDocuments">GENERAR</Button> */}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {/* constancia de credito */}
      <Modal open={openFormConstanciaCredito} onClose={handleCloseModal}>
        <ModalDialog sx={{ overflowY: 'scroll' }}>
          <DialogTitle>DATOS PARA CONSTANCIA DE CRÉDITO</DialogTitle>
          <Divider />
          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCloseModal();
              }}
            >
              <Stack spacing={2}>
                <FormLabel>Correo Cartera:</FormLabel>
                <Input
                  autoFocus
                  required
                  inputProps={{
                    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
                  }}
                  value={correoCartera}
                  onChange={handleCorreoCarteraChange}
                  name="correoCartera"
                />
                <FormLabel>Número de Whatsapp:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={numeroWhatsapp}
                  onChange={handleNumeroWhatsappChange}
                  name="numeroWhatsapp"
                />
                <FormLabel>Nombre:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={nombre}
                  onChange={handleNombreChange}
                  name="nombre"
                />
                <FormLabel>Cédula:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={cedula}
                  onChange={handleCedulaChange}
                  name="Cedula"
                />
                <FormLabel>Celular:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={celular}
                  onChange={handleCelularChange}
                  name="Celular"
                />
                <FormLabel>Correo Electrónico:</FormLabel>
                <Input
                  required
                  inputProps={{
                    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
                  }}
                  value={correoElectronico}
                  onChange={handleCorreoElectronicoChange}
                  name="CorreoElectronico"
                />
                <Grid container spacing={1} columns={12} sx={{ flexGrow: 1 }}>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': { backgroundColor: 'green', color: 'white' },
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
                      sx={{
                        backgroundColor: 'RED',
                        color: 'WHITE',
                        // border: 1,
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
      {/* modal constancia dia */}
      <Modal open={openFormConstanciaDia} onClose={handleCloseModal}>
        <ModalDialog>
          <DialogTitle>DATOS PARA CONSTANCIA AL DÍA</DialogTitle>
          <Divider />
          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCloseModal();
              }}
            >
              <Stack spacing={2}>
                <FormLabel>Nombre:</FormLabel>
                <Input
                  autoFocus
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={nombreCons}
                  onChange={handleNombreConsChange}
                  name="nombreCons"
                />
                <FormLabel>Cedula:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={cedulaCons}
                  onChange={handleCedulaConsChange}
                  name="cedulaCons"
                />
                <FormLabel>Número de factura:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={numeroFactCons}
                  onChange={handleNumeroFactConsChange}
                  name="numeroFactCons"
                />
                <Grid container spacing={1} columns={12} sx={{ flexGrow: 1 }}>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': { backgroundColor: 'green', color: 'white' },
                      }}
                    >
                      GENERAR
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
      {/* modal solicitud cambio de fecha  */}
      <Modal open={openFormSolicitudCambioFecha} onClose={handleCloseModal}>
        <ModalDialog sx={{ overflowY: 'scroll' }}>
          <DialogTitle>REGISTRO CAMBIO DE FECHA</DialogTitle>
          <Divider />
          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCloseModal();
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={2}>
                    <FormLabel style={{ textAlign: 'center', width: '100%' }}>
                      Información del Crédito
                    </FormLabel>
                    <FormLabel>Ciudad:</FormLabel>
                    <Input
                      autoFocus
                      required
                      inputProps={{
                        pattern: '[A-Za-z]+',
                      }}
                      value={ciudad}
                      onChange={handleCiudadChange}
                      name="ciudad"
                    />
                    <FormLabel>Fecha:</FormLabel>
                    <Input
                      required
                      inputProps={{ pattern: '[0-9]+' }}
                      value={fechaActual}
                      onChange={handleFechaActualChange}
                      name="fechaActual"
                    />
                    <FormLabel>Dia de Pago Actual:</FormLabel>
                    <Input
                      required
                      inputProps={{ pattern: '[0-9]+' }}
                      value={diaPagoActual}
                      onChange={handleDiaPagoActual}
                      name="diaPagoActual"
                    />
                    <FormLabel>Dia de Pago Solicitado:</FormLabel>
                    <Input
                      required
                      inputProps={{ pattern: '[0-9]+' }}
                      value={diaPagoSolicitado}
                      onChange={handleDiaPagoSolicitado}
                      name="diaPagoSolicitado"
                    />
                    <FormLabel>Valor de Cambio:</FormLabel>
                    <Input
                      required
                      inputProps={{ pattern: '[0-9]+' }}
                      value={valorCambio}
                      onChange={handleValorCambio}
                      name="valorCambio"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={2}>
                    <FormLabel style={{ textAlign: 'center', width: '100%' }}>
                      Información del Cliente
                    </FormLabel>
                    <FormLabel>Nombre Cliente:</FormLabel>
                    <Input
                      required
                      inputProps={{
                        pattern:
                          '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
                      }}
                      value={nombreCliente}
                      onChange={handleNombreCliente}
                      name="nombreCliente"
                    />
                    <FormLabel>Cédula:</FormLabel>
                    <Input
                      required
                      inputProps={{
                        pattern: '[0-9]+',
                      }}
                      value={cedulaCliente}
                      onChange={handleCedulaCliente}
                      name="cedulaCliente"
                    />
                    <FormLabel>Celular:</FormLabel>
                    <Input
                      required
                      inputProps={{
                        pattern: '[0-9]+',
                      }}
                      value={celularCliente}
                      onChange={handleCelularCliente}
                      name="celularCliente"
                    />
                    <FormLabel>Correo Electronico:</FormLabel>
                    <Input
                      required
                      inputProps={{
                        pattern: '[0-9]+',
                      }}
                      value={correoCliente}
                      onChange={handleCorreoClienteChange}
                      name="correoCliente"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': { backgroundColor: 'green', color: 'white' },
                      }}
                    >
                      Registrar
                    </Button>
                    <Button
                      type="button"
                      onClick={handleCloseModal}
                      fullWidth
                      sx={{
                        backgroundColor: 'RED',
                        color: 'WHITE',
                        border: 1,
                        '&:hover': {
                          backgroundColor: 'RED',
                          color: 'WHITE',
                        },
                      }}
                    >
                      CERRAR
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </FormControl>
        </ModalDialog>
      </Modal>
      {/* modal constancia de credito finaval  */}
      <Modal open={openFormConstanciaCreditoFinaval} onClose={handleCloseModal}>
        <ModalDialog sx={{ overflowY: 'scroll' }}>
          <DialogTitle>DATOS PARA CONSTANCIA DE CRÉDITO FINAVAL</DialogTitle>
          <Divider />
          <DialogTitle>Información del almacén:</DialogTitle>
          <FormControl component="form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCloseModal();
              }}
            >
              <Stack spacing={2}>
                <FormLabel>Correo Cartera:</FormLabel>
                <Input
                  autoFocus
                  required
                  inputProps={{
                    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
                  }}
                  value={correoCartera}
                  onChange={handleCorreoCarteraChange}
                  name="correoCartera"
                />
                <FormLabel>Número de Whatsapp:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={numeroWhatsapp}
                  onChange={handleNumeroWhatsappChange}
                  name="numeroWhatsapp"
                />
                <DialogTitle>Información del cliente:</DialogTitle>

                <FormLabel>Nombre:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[A-Za-z]+' }}
                  value={nombre}
                  onChange={handleNombreChange}
                  name="nombre"
                />
                <FormLabel>Cédula:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={cedula}
                  onChange={handleCedulaChange}
                  name="Cedula"
                />
                <FormLabel>Celular:</FormLabel>
                <Input
                  required
                  inputProps={{ pattern: '[0-9]+' }}
                  value={celular}
                  onChange={handleCelularChange}
                  name="Celular"
                />
                <FormLabel>Correo Electrónico:</FormLabel>
                <Input
                  required
                  inputProps={{
                    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
                  }}
                  value={correoElectronico}
                  onChange={handleCorreoElectronicoChange}
                  name="CorreoElectronico"
                />
                <Grid container spacing={1} columns={12} sx={{ flexGrow: 1 }}>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': { backgroundColor: 'green', color: 'white' },
                      }}
                    >
                      GENERAR
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
