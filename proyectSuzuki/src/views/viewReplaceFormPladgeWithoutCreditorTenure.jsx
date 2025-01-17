import React, { useRef, useState } from 'react';
import NavigationBar from '../components/nav/navigationBar';
import PrintFormats from '../components/buttons/printFormats';
import HeaderInfo from '../components/headers/headerInfo';
import ModalPledge from '../components/modals/modalsPledgeGeneration';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TreplacePladgeWithoutCreditorTenure from '../components/textos/tPladgeWithoutCreditorTenure';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Alert from '@mui/joy/Alert';

// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import { useReactToPrint } from 'react-to-print';

import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export default function ReplaceFormPladgeWithoutCreditorTenure() {
  const contentRef = useRef(); // Crear el ref
  const [openModalPladge, setOpenModalPladge] = useState(false);
  const handleClickModalPladge = () => {
    setOpenModalPladge(true);
  };

  const handleCloseModalPladge = () => {
    setOpenModalPladge(false);
  };

  return (
    <>
      <Grid container spacing={0}>
        {/* HEADER INFO */}
        <Grid item xs={12}>
          <Box sx={{ margin: '1px', padding: 0.1, border: '0px dashed grey' }}>
            <Card sx={{ minWidth: 275 }} elevation={5}>
              <Box
                component="section"
                sx={{
                  p: 0.5,
                  borderRadius: 3,
                  marginLeft: 200,
                  // border: '8px dashed grey',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Tab
                  sx={{}}
                  component={Link}
                  to="/viewGenerateFormats"
                  label="regresar"
                />
              </Box>
              <CardContent>
                <Box
                  component="section"
                  // border
                  ref={contentRef} // Asignar el ref al contenido que se va a imprimir
                >
                  <TreplacePladgeWithoutCreditorTenure />
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
