import React, { useContext, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css'; // Asegúrate de importar el archivo CSS aquí
import Table from '@mui/joy/Table';
import TableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import { Context } from '../../context/context.jsx';

export default function TreplaceFormChangeDate() {
  const contentRef = useRef(); // Crear el ref
  const [borderAxis] = React.useState('xBetween');
  const { city, currentDate, currentPaymentDay } = useContext(Context);

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
                <b> FORMATO SOLICITUD CAMBIO DE FECHA</b>
              </h2>
            </Box>
            <tr>
              <TableCell sx={{ textAlign: 'justify', fontSize: '15px' }}>
                <b>Ciudad y Fecha:</b> {city}, {currentDate}
                <br />
              </TableCell>
            </tr>

            <tr>
              <TableCell sx={{ textAlign: 'justify', fontSize: '15px' }}>
                Solicito sea cambiada la fecha de vencimiento del pago de las
                cuotas del crédito suscrito con SUZUKI MOTOR DE COLOMBIA S.A. en
                mi calidad de deudor principal, la cual se encuentra pactada
                para el día {currentPaymentDay} de cada mes. <br />
                <br />
                <Box>
                  La fecha solicitada para realizar el cambio es: VARIABLE de
                  cada mes. <br /> Acepto cancelar el valor de $VARIABLE pesos
                  MCTE, generado por realizar el cambio de fecha al día{' '}
                   <br /> Informo que a partir de la fecha
                  seguiré haciendo el pago de mi cuota en la fecha solicitada,
                  sin generar ningún cambio en el crédito o en las condiciones
                  pactadas y autorizadas por mí al inicio.
                </Box>
                <Box marginRight={7} display="inline"></Box>
              </TableCell>
            </tr>
            <Table style={{ width: '100%' }}>
              <tbody>
                <tr style={{ textAlign: 'justify ', fontSize: '15px' }}>
                  <td>Nombre:</td>
                  <td>VARIABLE</td>
                </tr>
                <tr style={{ textAlign: 'left ', fontSize: '15px' }}>
                  <td>Cédula:</td>
                  <td>VARIABLE</td>
                </tr>
                <tr style={{ textAlign: 'left ', fontSize: '15px' }}>
                  <td>Telefono:</td>
                  <td>VARIABLE</td>
                </tr>
                <tr style={{ textAlign: 'left ', fontSize: '15px' }}>
                  <td>Correo electrónico:</td>
                  <td>VARIABLE</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <br />
            <tr>
              <td>Firma: ______________________________</td>
            </tr>
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
