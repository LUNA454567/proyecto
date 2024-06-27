import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css'; // Asegúrate de importar el archivo CSS aquí
// import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/joy/Table';
import TableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function TreplaceFormConstanceUpToday() {
  const contentRef = useRef(); // Crear el ref
  const [borderAxis] = React.useState('xBetween');

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <>
      <Grid item xs={12}>
        <Box
          style={{
            margin: '1px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0.7',
            width: '80%',
            textAlign: 'center',
          }}
          // className="scrollable-container"
          ref={contentRef}
        >
          <TableContainer>
            <Box style={{ textAlign: 'center', fontSize: '13px' }}>
              <h2>
                <b> CONSTANCIA AL DIA </b>
              </h2>
            </Box>
            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <TableCell
                    sx={{
                      padding: '28px',
                      textAlign: 'justify',
                      fontSize: '15px',
                    }}
                  >
                    <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> hace constar que el(la)
                    señor(a) variable identificado(a) con Cédula de Ciudadanía
                    No. 018000 se encuentra al día en los pagos de la Factura
                    6555 en calidad de Codeudor.
                    <br />
                    <br />
                    <br />
                    En cuanto al reporte de Centrales de Información Financiera,{' '}
                    <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> aclara que no obstante
                    la actualización de la información, las reglas sobre
                    permanencia de la información histórica registrada en las
                    bases de datos, están definidas en la Ley 1266 (Ley de
                    Habeas Data), variando de acuerdo con el tiempo de duración
                    de la mora y de la manera como se efectúe el pago
                    <br />
                    <br />
                    <br />
                    Para constancia firmamos en Pereira, el día 24
                    (veinticuatro) del mes de junio de 2024.
                    <br />
                    <br />
                    <br />
                    <b>VANESSA VIVIANA CASAS GUTIERREZ</b> <br />
                    Gerente General Cartera
                  </TableCell>
                </tr>
              </tbody>
            </Table>
            <table>
              <TableBody></TableBody>
            </table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CardActions>
          <Button
            size="small"
            onClick={handlePrint}
            sx={{ border: '1px solid blue' }}
          >
            IMPRIMIR
          </Button>
        </CardActions>
      </Grid>
    </>
  );
}
