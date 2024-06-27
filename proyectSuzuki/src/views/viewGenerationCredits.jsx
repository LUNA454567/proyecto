import  { useState } from 'react';

import NavigationBar from '../components/nav/navigationBar';
import FormatButtons from '../components/buttons/formatButtons';
import HeaderInfo from '../components/headers/headerInfo';
// import FormatGeneration from '../components/forms/formatGenerationCredits';

// import ModalConstancia from '../components/modals/model';
import ModalConstanciaCredito from '../components/modals/creditModel';
import ModalDia from '../components/modals/modelDia';
import ModalCambioFecha from '../components/modals/changeDateModel';
import ModalFinaval from '../components/modals/finavalModel';

// import FormatGenerationDocuments from '../forms/formatGenerationDocuments';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import TPagareFinaval from '../components/textos/tPagareFinaval';

import SearchComponent from '../components/search/search';

export default function CenteredBox() {
  const [openModalDia, setOpenModalDia] = useState(null);
  const [openModalCredito, setOpenModalCredito] = useState(null);
  const [openModalCambioFecha, setOpenModalCambioFecha] = useState(null);
  const [openModalFinaval, setOpenModalFinaval] = useState(null);

  // OPEN AND CLOSE MODAL FOR DAILY CERTIFICATE
  const handleClickModalDia = (data) => {
    setOpenModalDia(data);
  };

  // OPEN AND CLOSE MODAL FOR CREDIT CERTIFICATE
  const handleClickModalCredito = (data) => {
    setOpenModalCredito(data);
  };

  // OPEN AND CLOSE MODAL FOR DATE CHANGE
  const handleClickModalCambioFecha = (data) => {
    setOpenModalCambioFecha(data);
  };

  // OPEN AND CLOSE MODAL FOR FINAVAL
  const handleClickModalFinaval = (data) => {
    setOpenModalFinaval(data);
  };

  return (
    <>
      <Grid container spacing={0}>
        {/* NAVBAR */}
        <Grid item xs={12}>
          <Box component="section" sx={{ p: 0, border: '0px dashed grey' }}>
            <NavigationBar />
          </Box>
        </Grid>
        {/* HEADER INFO */}
        <Grid item xs={12}>
          <Box sx={{ margin: '2px', padding: 0.5, border: '0px dashed grey' }}>
            <HeaderInfo
              variant="outlined" 
              severity="info"
              text={
                'GENERACION DE FORMATOS (PAGARE - PRENDA - CONTRATO DE COMPRAVENTA - CONFIRMACIÓN DE FACTURA - ACTA DE ENTREGA)'
              }
            />
          </Box>
        </Grid>
        {/* BUTTONS */}
        <Grid item xs={12}>
          <Box component="section" sx={{ p: 0.5, border: '0px dashed grey' }}>
            <FormatButtons
              handleModalDia={handleClickModalDia}
              handleModalCredito={handleClickModalCredito}
              handleModalCambioFecha={handleClickModalCambioFecha}
              handleModalFinaval={handleClickModalFinaval}
            />
          </Box>
        </Grid>
        {/* FORM */}
        <Grid item xs={12}>
          {/* FORM AREA */}
          <Box component="section" sx={{ p: 1 }}>
            {/* <FormatGeneration /> */}
          </Box>
          {openModalDia && <ModalDia openModal={handleClickModalDia} />}
          {openModalCredito && (
            <ModalConstanciaCredito openModal={handleClickModalCredito} />
          )}
          {openModalCambioFecha && (
            <ModalCambioFecha openModal={handleClickModalCambioFecha} />
          )}
          {openModalFinaval && (
            <ModalFinaval openModal={handleClickModalFinaval} />
          )}
        </Grid>
        {/* search */}
        <Grid item xs={12}>
          <Box sx={{ margin: '2px', padding: 0.5, border: '0px dashed grey' }}>
            <SearchComponent />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ margin: '2px', padding: 0.5, border: '0px dashed grey' }}>
            {/* <TPagareFinaval /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}



