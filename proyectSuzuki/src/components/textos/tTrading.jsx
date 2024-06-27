import React, { useRef, useState } from 'react';
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
import { useReactToPrint } from 'react-to-print';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Ttrading() {
  const contentRef = useRef(); // Crear el ref

  const handlePrint3 = useReactToPrint({
    content: () => contentRef.current,
  });

  // const [selectedDate, setSelectedDate] = useState(new Date());
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
            <Box style={{ textAlign: 'center', fontSize: '10px' }}>
              <h2>
                <b> CONTRATO DE COMPRAVENTA No 5891015543 </b>
              </h2>
            </Box>
            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      // border: '4px dashed blue',
                      width: '100%',
                      paddingLeft: '15px',
                      fontSize: '14px',
                      textAlign: 'justify',
                       fontSize: '10px'
                    }}
                  >
                    En todos los contratos de adquisición de bienes muebles y
                    prestación de servicios mediante el sistema de financiación,
                    excepción hecha de los relativos a alimentos, vestuarios,
                    drogas, atención hospitalaria y educativa, se entenderá
                    pactada la facultad de retractación de cualquiera de las
                    partes, dentro de los dos (2) días hábiles siguientes a la
                    entrega del bien. <br /> <br />
                    En el evento en que cualquiera de las partes haga uso de la
                    facultad de retractación, se resolverá el contrato y por
                    consiguiente, las partes restablecerán las cosas al estado
                    en que se encontraban antes de su celebración. La facultad
                    de retractación es irrenunciable.
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '15px', textAlign: 'justify' }}>
                    <Typography fontWeight="bold" fontSize="10px">
                      “Por expresa instrucción de la Superintendencia de
                      Industria y Comercio, se informa a la parte deudora que
                      durante el período de financiación la tasa de interés no
                      podrá ser superior a 1.5 veces el interés bancario
                      corriente que certifica la Superintendencia Bancaria.{' '}
                      <br /> <br />
                      Cuando el interés cobrado supere dicho límite, el acreedor
                      perderá todos los intereses. En tales casos, el consumidor
                      podrá solicitar la inmediata devolución de las sumas que
                      haya cancelado por concepto de los respectivos intereses.{' '}
                      <br /> <br />
                      Se reputarán también como intereses las sumas que el
                      acreedor reciba del deudor sin contraprestación distinta
                      al crédito otorgado, aun cuando las mismas se justifiquen
                      por concepto de honorarios, comisiones u otros semejantes.
                      También se incluirán dentro de los intereses las sumas que
                      el deudor pague por concepto de servicios vinculados
                      directamente con el crédito, tales como costos de
                      administración, estudio del crédito, papelería, cuotas de
                      afiliación, etc. (artículo 68 de la ley 45 de 1990).”{' '}
                      <br /> <br />
                      Interés: Sin perjuicio de lo dispuesto por el artículo 717
                      del código civil, el interés corresponde a la renta que se
                      paga por el uso del capital durante un periodo
                      determinado.
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      // border: '4px dashed blue',
                      width: '100%',
                      paddingLeft: '15px',
                      fontSize: '10px',
                      textAlign: 'center',
                     
                    }}
                  >
                    Este documeto hace parte integral de la factura de venta
                    N°.5891015543
                  </td>
                </tr>
                <tr style={{ border: '3px dashed red' }}>
                  <td
                    style={{
                      width: '90px',
                      // border: '3px dashed purple',
                      textAlign: 'center',
                     fontSize: '10px'
                    }}
                  >
                    <div style={{ padding: '8px', display: 'inline-block' }}>
                      <div
                        style={{
                          padding: '30px',
                          marginTop: '10px',
                          textAlign: 'center',
                          // border: '3px dashed red',
                          marginRight: '50px',
                        }}
                      >
                        <b>
                          _____________________________ <br /> PERSONA QUE
                          RECIBE <br />
                          Ciudad:
                        </b>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '8px',
                        display: 'inline-block',
                        marginLeft: '13px',
                      }}
                    >
                      <div
                        style={{
                          padding: '30px',
                          marginTop: '18px',
                          textAlign: 'center',
                          // border: '4px dashed grey',
                        }}
                      >
                        <b>
                          _____________________________ <br /> PERSONA QUE
                          ENTREGA <br />
                          Fecha:
                        </b>
                      </div>
                    </div>
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
          <Button size="small" onClick={handlePrint3} sx={{border: '1px solid blue'}}>
            IMPRIMIR 
          </Button>
        </CardActions>
      </Grid>
    </>
  );
}
