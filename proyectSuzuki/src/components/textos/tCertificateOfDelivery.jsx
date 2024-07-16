import React, { useRef, useState, useEffect  } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css'; // Asegúrate de importar el archivo CSS aquí
import Table from '@mui/joy/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody, TableContainer } from '@mui/material';
import Alert from '@mui/joy/Alert';
import { Typography } from '@mui/material';
import { fetchBillByNumber } from '../../services/apiService';
//se añade
import { useParams } from 'react-router-dom';

import CardActions from '@mui/material/CardActions';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import logoHorizontal from '../../assets/img/logo.png';

export default function TcertificateOfDelivery() {
    //se añade
    const { id } = useParams();
    console.log(id, 'idddd');

  const [selectedDate, setSelectedDate] = useState(new Date());

  const contentRef = useRef(); // Crear el ref
  const [billData, setBillData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchTerm = 'searchTerm';
  const handlePrint2 = useReactToPrint({
    content: () => contentRef.current,
  });

  useEffect(() => {
    console.log('useEffect triggered witg searchTerm', searchTerm);
    const getBillData = async () => {
      try {
        const dataResponse = await fetchBillByNumber(id);
        console.log('aquiiiiiiiiii:', id, dataResponse);
        //se añade
        setBillData(dataResponse.warehouse_GetBillByNumber_R);
      } catch (error) {
        console.error('Error fetching data:', error);
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
                border: '0px dashed grey',
                 
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
                <b> ACTA DE ENTREGA </b>
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
                          <table style={{ marginLeft: '30px', width: '100%' }}>
                            <tr>
                              <td
                                style={{
                                  padding: '8px',
                                }}
                              >
                                <td
                                  colSpan="2"
                                  style={{
                                    padding: '10px',
                                    marginTop: '18px',
                                     fontSize: '10px'

                                    // textAlign: 'center',
                                  }}
                                >
                                  <b>
                                    {' '}
                                    PROPIETARIO: {billData[0].CL_NOMBRE}
                                    <br />
                                    MARCA: {billData[0].MARCA}
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
                                    FACTURA No: {billData[0].NRO_PAGARE}
                                    <br />
                                    CERTIE INDIVIDUAL: {billData[0].CERT_INDIVIDUAL}
                                    <br />
                                    CERTIFICADO DE EMISIÓN DE GASES: {billData[0].CERT_GASES} <br />
                                  </b>
                                </td>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td>
                          <table style={{ width: '100%' }}>
                            <tr>
                              <td
                                style={{
                                  padding: '8px',
                                  // border: '2px dashed grey',
                                  marginRight: '38px',
                                  fontSize: '10px'
                                }}
                              >
                                <td>
                                  <b>
                                    {' '}
                                    CEDULA: {billData[0].CL_NROID}
                                    <br />
                                    MANUAL DE MANTENIMIENTO:  UNO 
                                    <br />
                                    MANUAL DE GARANTIA:  UNO 
                                    <br />
                                    HERRAMIENTA:  UNO 
                                    <br />
                                    ESPEJOS:  DOS 
                                    <br />
                                    BATERIA:  UNO 
                                    <br />
                                    LLAVES:  DOS 
                                    <br />
                                    ESTADO MECANICO:  BUENO 
                                    <br />
                                    ESTADO DE PINTURA:  BUENO 
                                    <br /> <br />
                                  </b>
                                </td>
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
                      textAlign: 'justify',
                      fontSize: '10px'
                    }}
                  >
                    Recibí de parte de SUZUKI MOTOR DE COLOMBIA S.A. sociedad
                    identificada con el NIt. No. 891.410.137-2, toda la
                    información, clara, oportuna, verificable, especifica y
                    suficiente referente al equipamiento de la motocicleta que
                    adquiero, en cuanto a dispositivos de seguridad activa y
                    pasiva tal y como lo establecen el Decreto 567 del 25 de
                    Julio de 2018 y la Resolución 39 del 01 de febrero de 2019
                    ambas expedidas por la Agencia Nacional de Seguridad Vial.
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: '90px',
                      // border: '3px dashed purple',
                      wordWrap: 'break-word',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      fontSize={10}
                    >
                      OBSERVACIONES:__________________________________________________________________________________________________________________________________________________________________________________________________________________________
                    </Typography>
                  </td>
                </tr>

                <tr style={{ border: '3px dashed red' }}>
                  <td
                    style={{
                      width: '90px',
                      // border: '3px dashed purple',
                      textAlign: 'center',
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
                          fontSize: '10px'
                        }}
                      >
                        <b>
                          _____________________________ <br /> PERSONA QUE
                          RECIBE <br />
                          Ciudad: {billData[0].CIUDAD} 
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
                          fontSize: '10px'
                          // border: '4px dashed grey',
                        }}
                      >
                        <b>
                          _____________________________ <br /> PERSONA QUE
                          ENTREGA <br />
                          {billData[0].FECHA_PAGARE} 
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
          <Button
            size="small"
            onClick={handlePrint2}
            sx={{ border: '1px solid blue' }}
          >
            IMPRIMIR
          </Button>
        </CardActions>
      </Grid>
    </>
  );
}
