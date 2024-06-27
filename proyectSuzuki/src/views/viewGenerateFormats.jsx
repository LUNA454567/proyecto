import React, { useRef, useState } from 'react';
import NavigationBar from '../components/nav/navigationBar';
import PrintFormats from '../components/buttons/printFormats';
import HeaderInfo from '../components/headers/headerInfo';
import ModalPledge from '../components/modals/modalsPledgeGeneration';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import { useReactToPrint } from 'react-to-print';

import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export default function GenerateFormats() {
  const [openModalPladge, setOpenModalPladge] = useState(false);
  const contentRef = useRef(); // Crear el ref

  const handleClickModalPladge = () => {
    setOpenModalPladge(true);
  };

  const handleCloseModalPladge = () => {
    setOpenModalPladge(false);
  };

  // Definir la función de impresión

  // const handlePrint = useReactToPrint({
  //   content: () => contentRef.current,
  // });
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
          <Box sx={{ margin: '1px', padding: 0.1, border: '0px dashed grey' }}>
            <Card sx={{ minWidth: 275 }} elevation={5}>
              <Box
                component="section"
                sx={{
                  p: 0.5,
                  borderRadius: 3,
                  // border: '8px dashed grey',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <HeaderInfo
                  variant="outlined"
                  severity="info"
                  text={
                    'GENERACIÓN DE FORMATOS (PAGARÉ - PRENDA - CONTRATO DE COMPRAVENTA - CONFIRMACIÓN DE FACTURA - ACTA DE ENTREGA)'
                  }
                />
                <Tab
                  sx={{}}
                  component={Link}
                  to="/viewGenerationCredits"
                  label="regresar"
                />
              </Box>

              <CardContent>
                <Box
                  component="section"
                  // border
                  ref={contentRef} // Asignar el ref al contenido que se va a imprimir
                >
                  <PrintFormats
                    handleModalPrintPrenda={handleClickModalPladge}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {openModalPladge && (
            <ModalPledge
              openModal={openModalPladge}
              handleClose={handleCloseModalPladge}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
