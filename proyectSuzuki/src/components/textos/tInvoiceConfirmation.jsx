import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css'; // Asegúrate de importar el archivo CSS aquí
import Table from '@mui/joy/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody, TableContainer } from '@mui/material';
import Alert from '@mui/joy/Alert';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useReactToPrint } from 'react-to-print';
import { Typography } from '@mui/material';
import logoHorizontal from '../../assets/img/logo.png';
import { JoinRight } from '@mui/icons-material';

export default function TinvoiceConfirmation() {
  const contentRef = useRef(); // Crear el ref

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <Grid item xs={12}>
        <Box
          style={{
            margin: '1px',
            padding: 0.1,
            // border: '3px dashed grey',
            width: '100%',
          }}
          // className="scrollable-container"
          ref={contentRef}
        >
          <TableContainer>
          <Box
              sx={{
                padding: '8px',
                border: '|1px dashed grey',
              }}
            >
              <img
                src={logoHorizontal}
                alt="Suzuki Logo"
                width={198}
                height={37}
              />
            </Box>
            <Box style={{ textAlign: 'center', fontSize: '10px' }}>
              <h2>
                <b> CONFIRMACIÓN DE FACTURA </b>
              </h2>
            </Box>
            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <Table style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <td>
                          <table style={{ marginLeft: '0px', width: '100%' }}>
                            <tr>
                              <td>
                                <Typography fontWeight="bold" fontSize={10}>
                                  Señores
                                  <br />
                                  TRANSITO Y TRANSPORTE
                                  <br />
                                  MANIZALES
                                </Typography>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </tr>
                <tr>
                  <td
                    style={{
                      // border: '4px dashed blue',
                      width: '100%',
                      paddingLeft: '15px',
                      fontSize: '10px',
                    }}
                  >
                    REF: Confirmación Factura <br /> <br /> Apreciados señores:{' '}
                    <br /> <br />
                    Cordialmente nos permitimos confirmar nuestra factura número
                    5891015543 de fecha 6 de Abril de 2024 vendida a ALBERT
                    JHOANY TREJOS VELARDE con las siguientes características:
                  </td>
                </tr>
                <tr>
                  <td>
                    <Table style={{ marginLeft: '0px', width: '100%' }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: '8px',
                              // border: '20px dashed red',
                              fontSize: '10px',
                            }}
                          >
                            <b>
                              {' '}
                              PROPIETARIO:
                              <br />
                              MARCA:
                              <br />
                              MODELO:
                              <br />
                              TIPO:
                              <br />
                              COLOR:
                              <br />
                              MOTOR No:
                              <br />
                              CHASIS No:
                              <br />
                              FACTURA No:
                              <br />
                              CERTIE INDIVIDUAL:
                              <br />
                              CERTIFICADO DE EMISIÓN DE GASES: <br />
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '15px' }}>
                    <Typography fontWeight="bold" fontSize="10px">
                      Cordialmente, <br /> <br />
                      CLAUDIA MARIA SALAZAR CASTAÑO <br />
                      Gerente
                    </Typography>
                  </td>
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
          <Button size="small" onClick={handlePrint} sx={{border: '1px solid blue'}}>
            IMPRIMIR 
          </Button>
        </CardActions>
      </Grid>
    </>
  );
}
