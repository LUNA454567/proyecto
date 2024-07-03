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
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { Context } from '../../context/context.jsx';

export default function TreplaceFormCreditStatement() {
  const contentRef = useRef(); // Crear el ref
  const [borderAxis] = React.useState('xBetween');
  const { walletEmail, whatsappNumber, name, id, cellphone, email } =
    useContext(Context);

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
                <b> CONSTANCIA DE INFORMACIÓN DE CRÉDITO RECIBIDA</b>
              </h2>
            </Box>
            <Box style={{ textAlign: 'justify', fontSize: '13px' }}>
              <h3>
                CERTIFICO QUE EN LA FECHA RECIBÍ INFORMACIÓN CLARA Y EXPRESA DEL
                CRÉDITO DIRECTO QUE ADQUIRÍ CON SUZUKI MOTOR DE COLOMBIA S.A. EN
                LOS SIGUIENTES PUNTOS:
              </h3>
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
                    <List marker="circle">
                      <ListItem>
                        Recibí información de la Facturación a crédito, he
                        firmado dicho documento como constancia de que me fue
                        explicado todos los conceptos allí descritos tales como
                        valor de la motocicleta, Iva, Impuesto al consumo (si lo
                        hubiera), seguro deudores, cobro de Aval, valor de la
                        financiación y los demás allí descritos.
                      </ListItem>
                      <ListItem>
                        Recibí información del Plan de Pagos “liquidador” (fecha
                        de vencimientos de las cuotas, número de cuotas, valor
                        de cuota). He firmado dicho documento como constancia de
                        recibido.
                      </ListItem>
                      <ListItem>
                        Recibí información en cuanto a las OPCIONES DE PAGO
                        DIFERENTE A LA CUOTA NORMAL DEL CRÉDITO como son: ABONO
                        A CAPITAL (30 días antes de la fecha de vencimiento de
                        la cuota y el valor mínimo de una cuota) con la
                        posibilidad de elegir entre las opciones: Disminución de
                        plazo o Disminución del valor de la cuota, previamente
                        autorizado en el formato para tal fin. PAGOS TOTALES:
                        para que se genere descuento en las cuotas se deberá
                        cancelar con 30 días de anticipación al vencimiento de
                        la cuota. ADELANTO DE CUOTAS. No genera descuento. Estos
                        pagos solo podré realizarlos a través de pago directo en
                        Caja de los almacenes o a través de Transacción o
                        Consignación, por los canales externos de recaudo no se
                        aplicará ni abono a capital ni pagos totales que generen
                        descuento por pago anticipado. .
                      </ListItem>
                      <ListItem>
                        Leí, entendí y firmé el pagaré que contiene: precio
                        total de la venta, valor de la cuota inicial, plazo y
                        valor de las cuotas ordinarias y cuotas extras si
                        aplica, fecha de pago de las mismas, mis obligaciones
                        como comprador y las implicaciones que trae el
                        incumplimiento de las mismas (intereses de mora,
                        reportes negativos, etc.).
                      </ListItem>
                      <ListItem>
                        He recibido los siguientes documentos: factura original
                        de la motocicleta, liquidador o plan de pagos.
                      </ListItem>
                      <ListItem>Canales de pago:</ListItem>
                    </List>
                  </TableCell>
                </tr>
              </tbody>
            </Table>
            <tr>
              <TableCell sx={{ textAlign: 'justify', fontSize: '15px' }}>
                <b>Efecty o Dimonex:</b> Convenio #110916 <br />
                <b>
                  Corresponsales BANCOLOMBIA (solo corresponsales bancarios)
                </b>{' '}
                Convenio #77327 <br />
                PSE: a través de
                <b>https://www.suzuki.com.co/</b> https://www.suzuki.com.co/
              </TableCell>
            </tr>
            <tr>
              <h2 style={{ textAlign: 'center', fontSize: '15px' }}>
                NUMEROS DE CUENTA BANCOS
              </h2>
              <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr
                    style={{
                      textAlign: 'justify',
                      fontSize: '13px',
                      borderBottom: 'none',
                    }}
                  >
                    <td
                      style={{
                        width: '40%',
                        textAlign: 'left',
                        border: 'none',
                      }}
                    >
                      NOMBRE DEL BANCO
                    </td>
                    <td
                      style={{
                        width: '30%',
                        textAlign: 'left',
                        border: 'none',
                      }}
                    >
                      TIPO
                    </td>
                    <td
                      style={{
                        width: '30%',
                        textAlign: 'left',
                        border: 'none',
                      }}
                    >
                      No. CUENTA
                    </td>
                  </tr>
                  <tr
                    style={{
                      textAlign: 'left',
                      fontSize: '13px',
                      borderBottom: 'none',
                    }}
                  >
                    <td style={{ border: 'none' }}>
                      BOGOTA SIS. NAL. DE RECAUDOS
                    </td>
                    <td style={{ border: 'none' }}>CORRIENTE</td>
                    <td style={{ border: 'none' }}>465-01926-3</td>
                  </tr>
                  <tr
                    style={{
                      textAlign: 'left',
                      fontSize: '13px',
                      borderBottom: 'none',
                    }}
                  >
                    <td style={{ border: 'none' }}>DAVIVIENDA</td>
                    <td style={{ border: 'none' }}>AHORROS</td>
                    <td style={{ border: 'none' }}>1260-0003912-6</td>
                  </tr>
                  <tr
                    style={{
                      textAlign: 'left',
                      fontSize: '13px',
                      borderBottom: 'none',
                    }}
                  >
                    <td style={{ border: 'none' }}>BBVA (CONVENIO 1690)</td>
                    <td style={{ border: 'none' }}>CORRIENTE</td>
                    <td style={{ border: 'none' }}>703-04826-4</td>
                  </tr>
                  <tr
                    style={{
                      textAlign: 'left',
                      fontSize: '13px',
                      borderBottom: 'none',
                    }}
                  >
                    <td style={{ border: 'none' }}>
                      BANCOLOMBIA (CONVENIO 1489)
                    </td>
                    <td style={{ border: 'none' }}>CORRIENTE</td>
                    <td style={{ border: 'none' }}>073-410137-13</td>
                  </tr>
                </tbody>
              </Table>
            </tr>
            <tr>
              <TableCell sx={{ textAlign: 'justify', fontSize: '15px' }}>
                Me he comprometido a enviar soportes de pago, inmediatamente
                haga la consignación o transferencia, para que sea confirmada y
                aplicada, evitando así moras y reportes negativos, a través de
                los siguientes canales: <br />
                <br />
                <b>Correo electrónico:</b> {walletEmail}
                <Box marginLeft={7} display="inline">
                  <b>Whatsapp:</b> {whatsappNumber}
                  <br /> <br />
                </Box>
                <Box>
                  Declaro que he recibido la información de forma clara y que he
                  aceptado las condiciones informadas en cuanto a mi crédito.
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
                    {name}
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
                  <td style={{ border: 'none' }}>{id}</td>
                </tr>
                <tr
                  style={{
                    textAlign: 'left',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td style={{ border: 'none' }}>Celular:</td>
                  <td style={{ border: 'none' }}>{cellphone}</td>
                </tr>
                <tr
                  style={{
                    textAlign: 'left',
                    fontSize: '15px',
                    borderBottom: 'none',
                  }}
                >
                  <td style={{ border: 'none' }}>Correo electrónico:</td>
                  <td style={{ border: 'none' }}>{email}</td>
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
