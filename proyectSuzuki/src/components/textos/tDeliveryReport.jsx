import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css'; // Asegúrate de importar el archivo CSS aquí
import Table from '@mui/joy/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody, TableContainer } from '@mui/material';
import Alert from '@mui/joy/Alert';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from '@mui/material';
import { useState } from 'react';

export default function TdeliveryReport() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <Grid item xs={8}>
        <Box
          sx={{ margin: '5px', padding: 0.1, border: '0px dashed grey' }}
          className="scrollable-container"
        >
          <Box
            component="section"
            className="print-container"
            sx={{
              p: 0.5,
              borderRadius: 10,
              border: '0px dashed grey',
            }}
          >
            <Box
              component="section"
              className="print-margin-top" // Aplica la clase aquí
              sx={{ fontSize: '13px', border: '5px dashed pink' }}
            >
              <TableContainer>
                <table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        colSpan={12}
                        sx={{
                          padding: '8px',
                          textAlign: 'center',
                          border: '5px dashed pink',
                        }}
                      >
                        <h2>
                          <b> CONTRATO DE COMPRAVENTA No 5891015543 </b>
                        </h2>
                      </TableCell>{' '}
                    </TableRow>

                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{ padding: '8px', textAlign: 'justify' }}
                      >
                        En todos los contratos de adquisición de bienes muebles
                        y prestación de servicios mediante el sistema de
                        financiación, excepción hecha de los relativos a
                        alimentos, vestuarios, drogas, atención hospitalaria y
                        educativa, se entenderá pactada la facultad de
                        retractación de cualquiera de las partes, dentro de los
                        dos (2) días hábiles siguientes a la entrega del bien
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{ padding: '8px', textAlign: 'justify' }}
                      >
                        En el evento en que cualquiera de las partes haga uso de
                        la facultad de retractación, se resolverá el contrato y
                        por consiguiente, las partes restablecerán las cosas al
                        estado en que se encontraban antes de su celebración. La
                        facultad de retractación es irrenunciable.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{
                          padding: '8px',
                          textAlign: 'justify',
                          fontSize: '14px',
                        }}
                      >
                        <b>
                          “Por expresa instrucción de la Superintendencia de
                          Industria y Comercio, se informa a la parte deudora
                          que durante el período de financiación la tasa de
                          interés no podrá ser superior a 1.5 veces el interés
                          bancario corriente que certifica la Superintendencia
                          Bancaria.
                        </b>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{ padding: '8px', textAlign: 'justify' }}
                      >
                        <b>
                          Cuando el interés cobrado supere dicho límite, el
                          acreedor perderá todos los intereses. En tales casos,
                          el consumidor podrá solicitar la inmediata devolución
                          de las sumas que haya cancelado por concepto de los
                          respectivos intereses.
                        </b>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{ padding: '8px', textAlign: 'justify' }}
                      >
                        <b>
                          Se reputarán también como intereses las sumas que el
                          acreedor reciba del deudor sin contraprestación
                          distinta al crédito otorgado, aun cuando las mismas se
                          justifiquen por concepto de honorarios, comisiones u
                          otros semejantes. También se incluirán dentro de los
                          intereses las sumas que el deudor pague por concepto
                          de servicios vinculados directamente con el crédito,
                          tales como costos de administración, estudio del
                          crédito, papelería, cuotas de afiliación, etc.
                          (artículo 68 de la ley 45 de 1990).”
                        </b>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan="2"
                        sx={{ padding: '8px', textAlign: 'justify' }}
                      >
                        <b>
                          Interés: Sin perjuicio de lo dispuesto por el artículo
                          717 del código civil, el interés corresponde a la
                          renta que se paga por el uso del capital durante un
                          periodo determinado.
                        </b>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan={12}
                        sx={{
                          padding: '8px',
                          textAlign: 'center',
                          border: '5px dashed pink',
                        }}
                      >
                        Este documeto hace parte integral de la factura de venta
                        N°.5891015543
                      </TableCell>{' '}
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <TableContainer sx={{ marginLeft: '80px' }}>
                          <TableRow>
                            <TableCell sx={{ padding: '8px' }}>
                              <TableCell
                                colSpan="2"
                                sx={{
                                  padding: '30px',
                                  marginTop: '18',
                                  textAlign: 'center',
                                }}
                              >
                                <b>
                                  {' '}
                                  _____________________________ <br /> GIRADOR{' '}
                                  <br />
                                </b>
                              </TableCell>
                            </TableCell>
                          </TableRow>
                        </TableContainer>
                      </TableCell>
                      <TableCell>
                        <table>
                          <TableRow>
                            <TableCell sx={{ padding: '8px' }}>
                              <TableCell
                                colSpan="2"
                                sx={{
                                  padding: '40px',
                                  marginTop: '18',
                                  textAlign: 'center',
                                }}
                              >
                                <b>
                                  {' '}
                                  _____________________________ <br /> ACEPTADA{' '}
                                  <br />
                                </b>
                              </TableCell>
                            </TableCell>
                          </TableRow>
                        </table>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
