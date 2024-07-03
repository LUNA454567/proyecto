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
  const {
    city,
    currentDate,
    currentPaymentDay,
    requestedPaymentDay,
    exchangeValue,
    clientName,
    clientId,
    clientPhone,
    clientEmail,
  } = useContext(Context);

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
                  La fecha solicitada para realizar el cambio es:{' '}
                  {requestedPaymentDay} de cada mes. <br /> <br /> Acepto
                  cancelar el valor de ${exchangeValue} pesos MCTE, generado por
                  realizar el cambio de fecha al día {requestedPaymentDay}
                  <br /> <br /> Informo que a partir de la fecha seguiré
                  haciendo el pago de mi cuota en la fecha solicitada, sin
                  generar ningún cambio en el crédito o en las condiciones
                  pactadas y autorizadas por mí al inicio.
                </Box>
                <Box marginRight={7} display="inline"></Box>
              </TableCell>
            </tr>
            <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr
                  style={{
                    textAlign: 'justify',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td
                    style={{ width: '40%', textAlign: 'left', border: 'none' }}
                  >
                    Nombre:
                  </td>
                  <td
                    style={{ width: '60%', textAlign: 'left', border: 'none' }}
                  >
                    {clientName}
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: 'left',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td style={{ border: 'none' }}>Cédula:</td>
                  <td style={{ border: 'none' }}>{clientId}</td>
                </tr>
                <tr
                  style={{
                    textAlign: 'left',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td style={{ border: 'none' }}>Teléfono:</td>
                  <td style={{ border: 'none' }}>{clientPhone}</td>
                </tr>
                <tr
                  style={{
                    textAlign: 'left',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td style={{ border: 'none' }}>Correo electrónico:</td>
                  <td style={{ border: 'none' }}>{clientEmail}</td>
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
