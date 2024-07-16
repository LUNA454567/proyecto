import React, { useRef, useState, useEffect } from 'react';
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
import { fetchBillByNumber } from '../../services/apiService';
//se añade
import { useParams } from 'react-router-dom';

export default function TinvoiceConfirmation() {
  const contentRef = useRef(); // Crear el ref

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [billData, setBillData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchTerm = 'searchTerm';

  useEffect(() => {
    console.log('useEffect triggered with searchTerm:', searchTerm);
    const getBillData = async () => {
      try {
        const dataResponse = await fetchBillByNumber(id);
        console.log('aquiiiiiiiiii:', id, dataResponse);
        //se añade
        setBillData(dataResponse.warehouse_GetBillByNumber_R);
      } catch (error) {
        console.log('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getBillData();
  }, [id]);

  if (loading) {
    console.log('Loading data...');
    return <p>Loading...</p>;
  }

  if (!billData) {
    console.log('No data available');
    return <p>No data available</p>;
  }

  console.log('Data available:', billData);

  console.log('Rendering data:', billData);

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
                                  {billData[0].CIUDAD}
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
                    {' '}{ billData[0].NRO_PAGARE} de fecha {billData[0].FECHA_PAGARE}{' '}
                    vendida a ALBERT JHOANY TREJOS VELARDE con las siguientes
                    características:
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
                              MARCA: {billData[0].MARCA}
                              <br />
                              MODELO: {billData[0].CLASE}
                              <br />
                              MODELO: {billData[0].AMODELO}
                              <br />
                              TIPO: {billData[0].LINEA}
                              <br />
                              COLOR: {billData[0].COLOR}
                              <br />
                              MOTOR No: {billData[0].MOTOR}
                              <br />
                              CHASIS No: {billData[0].CHASIS}
                              <br />
                              PROPIETARIO: {billData[0].CL_NOMBRE}
                              <br />
                              PCC. o NIT: {billData[0].CL_NROID}
                              <br />
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
                      PROPIETARIO: {billData[0].GERENTE}
                      <br /> <br />
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
