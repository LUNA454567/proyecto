import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/joy/Table';
import TableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { fetchBillByNumber } from '../../services/apiService';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import numeroATexto from '../../hooks/numeroATexto'; 
// Función para convertir números a texto en español


export default function TPagareFinaval() {
  const [day, setDay] = useState(null);
  const { id } = useParams();
  const contentRef = useRef();
  const [borderAxis] = useState('xBetween');
  const [billData, setBillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagareWords, setPagarerWords] = useState('');
  const [cuotaWords, setCuotaWords] = useState('');
  const [tasaeaWords, setTasaeaWords] = useState('');
  const [facturaWords, setFacturaWords] = useState('');
  const [plazoWords, setPlazoWords] = useState('');
  const [inicialWords, setInicialWords] = useState('');
  const [extrasWords, setExtrasWords] = useState('');

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  useEffect(() => {
    console.log('useEffect triggered with searchTerm:', id);
    const getBillData = async () => {
      try {
        const dataResponse = await fetchBillByNumber(id);
        console.log('aquiiiiiiiiii :', id, dataResponse);
        setBillData(dataResponse.warehouse_GetBillByNumber_R);

        if (dataResponse.warehouse_GetBillByNumber_R.length > 0) {
          let date = format(
            new Date(dataResponse.warehouse_GetBillByNumber_R[0].FVTO_CTA1),
            'd/MMMM/yyyy',
            { locale: es }
          );
          let date_day = date.split('/')[0];
          setDay(date_day);
        }

        const valueInWordsPagare = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].VLR_PAGARE
        );
        setPagarerWords(valueInWordsPagare);

        // Convertir VLR_CUOTA a texto
        const valueInWordsCuota = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].VLR_CUOTA
        );
        setCuotaWords(valueInWordsCuota);

        // Convertir TASAEA a texto
        const valueInWordsTasaea = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].TASAEA
        );
        setTasaeaWords(valueInWordsTasaea);

        // Convertir VLR_FACTURA a texto
        const valueInWordsFactura = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].VLR_FACTURA
        );
        setFacturaWords(valueInWordsFactura);

        // Convertir PLAZO a texto
        const valueInWordsPlazo = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].PLAZO
        );
        setPlazoWords(valueInWordsPlazo);

        // Convertir INICIAL a texto
        const valueInWordsInicial = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].VLR_INICIAL
        );
        setInicialWords(valueInWordsInicial);

        // Convertir INICIAL a texto
        const valueInWordsExtras = numeroATexto(
          dataResponse.warehouse_GetBillByNumber_R[0].NRO_EXTRAS
        );
        setExtrasWords(valueInWordsExtras);

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

  return (
    <>
      <Grid item xs={12}>
        <Box
          style={{
            margin: '1px',
            padding: 0.1,
            width: '100%',
          }}
          ref={contentRef}
        >
          <TableContainer>
            <Box style={{ textAlign: 'center', fontSize: '10px' }}>
              <h2>
                <b> PAGARE No.{billData[0].NRO_PAGARE} </b>
              </h2>
            </Box>

            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: '90px',
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
                      Lugar y Fecha: {billData[0].CIUDAD},{' '}
                      {billData[0].FECHA_PAGARE}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <TableCell
                    sx={{
                      padding: '8px',
                      textAlign: 'justify',
                      fontSize: '10px',
                    }}
                  >
                    Yo {billData[0].CL_NOMBRE}, mayor (es) de edad, con
                    domicilio en {billData[0].CL_CIUEXP} en{' '}
                    {billData[0].CL_DIRECCION}, identificado (a) (os) con la (s)
                    cedula (s) de ciudadanía No.(s) {billData[0].CL_NROID}{' '}
                    expedida (s) en {billData[0].CL_CIUEXP}
                    respectivamente, actuando en mí (nuestros) propio (s) nombre
                    (s), por medio del presente PAGARE hago (hacemos) constar
                    que DEBO (Debemos) y me (nos) comprometo (comprometemos) a
                    pagar a la sociedad <b>
                      SUZUKI MOTOR DE COLOMBIA S.A.
                    </b>{' '}
                    Sociedad con domicilio principal en Pereira – Risaralda, o a
                    su orden en sus oficinas de {billData[0].CIUDAD} la suma de{' '}
                    {pagareWords} PESOS MCTE.. - ($
                    {billData[0].VLR_PAGARE}) mcte. En un plazo de {plazoWords} - (
                    {billData[0].PLAZO}) meses y por {plazoWords}- ({billData[0].PLAZO}){' '}
                    cuotas mensuales, iguales y sucesivas que incluyen capital,
                    seguro colectivo de deudores e intereses remuneratorios, por
                    el valor de {cuotaWords} PESOS MCTE. (${' '}
                    {billData[0].VLR_CUOTA} ) moneda legal colombiana cada una,
                    la primera cuota será exigible el día{' '}
                    {billData[0].FVTO_CTA1}, y así sucesivamente el día de {day}{' '}
                    cada uno de los meses venideros y {billData[0].NRO_EXTRAS}{' '}
                    cuotas extras pagaderas así: . Para un total de{' '}
                    {pagareWords} PESOS MCTE. (${billData[0].VLR_PAGARE}) moneda
                    legal. Durante el plazo reconoceré (mos) intereses
                    liquidados sobre los saldos pendientes del capital a la tasa
                    de {tasaeaWords} por ciento ({billData[0].TASAEA}) Efectiva
                    Anual, pagadero mes vencido, los cuales están incluidos en
                    cada una de las cuotas pactadas. En caso de mora en el pago
                    de una o más cuotas, pagare los intereses corrientes fijados
                    por la ley y de hecho quedan vencidos todos los plazos y por
                    tanto cancelaré en forma inmediata la totalidad de las
                    cuotas restantes. La prórroga del plazo para el pago de una
                    o más cuotas vencidas o el recibo de abonos parciales o en
                    cantidad mayor a la convenida, no implica novación y en
                    general, la omisión ocasional de{' '}
                    <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> en el ejercicio de uno
                    cualquiera de los derechos derivados de este instrumentos no
                    significa renuncia ni modificación de este ni de los demás
                    derechos que por él tiene. El recibo de pago de una o más
                    cuotas no presume el pago de los intereses correspondientes
                    ni de mora, en su caso; autorizo a{' '}
                    <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> para anotar los pagos
                    en los documentos o proformas que considere menester
                    expresamente manifiesto que serán de mi cargo todos los
                    gastos y costas judiciales y extrajudiciales que se
                    causaren, incluyendo en ellas los honorarios de Abogados.
                    Así mismo manifiesto (manifestamos) que renuncio
                    (renunciamos) al derecho de ser requerido(s) judicial o
                    extrajudicialmente para ser constituido en mora. La emisión
                    del pagaré anteriormente consignado tiene como causa el
                    CONTRATO DE COMPRAVENTA CON PRENDA SIN TENENCIA DEL ACREEDOR
                    celebrado entre <b>SUZUKI MOTOR DE COLOMBIA S.A.</b>{' '}
                    sociedad con domicilio principal en la ciudad de
                    Pereira-Risaralda, quien para los efectos del presente
                    CONTRATO, se denominará la VENDEDORA por una parte y{' '}
                    {billData[0].CL_NOMBRE} mayor de edad, vecino de{' '}
                    {billData[0].CIUDAD} Residenciado en {billData[0].CL_CIUDAD}{' '}
                    en {billData[0].CL_DIRECCION}; Titular de la cédula de
                    ciudadanía No.{billData[0].CL_NROID} de{' '}
                    {billData[0].CL_CIUEXP}, quien se denominará el{' '}
                    <b>COMPRADOR</b> por la otra parte, que se contiene y se
                    rige por las siguientes cláusulas: PRIMERA: El VENDEDOR
                    entrega en calidad de venta al <b> COMPRADOR</b> un vehículo
                    motor de las siguientes características:
                  </TableCell>
                </tr>

                <tr>
                  <Table
                    borderAxis={borderAxis}

                    // style={{ border: '4px dashed purple', width: '100%' }}
                  >
                    <tbody>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>
                          <b>CLASE:</b>
                        </td>
                        <td>{billData[0].CLASE}</td>
                        <td>CHASIS N°:</td>
                        <td>{billData[0].CHASIS}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>MARCA:</td>
                        <td>{billData[0].MARCA}</td>
                        <td>MOTOR N°:</td>
                        <td>{billData[0].MOTOR}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>MODELO:</td>
                        <td>{billData[0].AMODELO}</td>
                        <td>COLOR:</td>
                        <td>{billData[0].COLOR}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>TIPO:</td>
                        <td>{billData[0].LINEA}</td>
                        <td>PLACAS N°</td>
                        <td>{billData[0].PLACA}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>CILINDRADA:</td>
                        <td>{billData[0].CILINDRAJE} CC</td>
                        <td>CERTIFICADO INDIVIDUAL:</td>
                        <td>{billData[0].CERT_INDIVIDUAL}</td>
                      </tr>
                    </tbody>
                  </Table>
                </tr>
                <tr>
                  <TableCell
                    sx={{
                      padding: '8px',
                      textAlign: 'justify',
                      fontSize: '10px',
                    }}
                  >
                    <b>SEGUNDA</b> : El precio total de esta venta es la suma de{' '}
                    {facturaWords} PESOS MCTE. (${billData[0].VLR_FACTURA})
                    moneda legal, que el
                    <b> COMPRADOR</b> pagará a la <b> VENDEDORA</b> o a su orden
                    en la ciudad de {billData[0].CIUDAD} así: a) la suma de{' '}
                    {inicialWords} PESOS
                    MCTE. (${billData[0].VLR_INICIAL}) moneda legal, valor de
                    cuota inicial que la
                    <b> VENDEDORA</b> declara recibida a satisfacción de manos
                    del comprador. b)la suma de {pagareWords} PESOS MCTE. ($
                    {billData[0].VLR_PAGARE}) moneda legal, valor del saldo del
                    precio del vehículo que el <b>COMPRADOR</b> pagará a la{' '}
                    <b> VENDEDORA</b> en {plazoWords} ({billData[0].PLAZO}) cuotas
                    mensuales iguales y sucesivas cada una de {cuotaWords} PESOS MCTE. ($
                    {billData[0].VLR_CUOTA}) moneda legal, la primera de ellas
                    el día {billData[0].FVTO_CTA1} y {billData[0].NRO_EXTRAS}{' '}
                    ({extrasWords}) cuota(s) extra(s) pagadera(s) así:
                  </TableCell>
                </tr>
                <tr>
                  <TableCell
                    sx={{
                      padding: '8px',
                      textAlign: 'justify',
                      fontSize: '10px',
                    }}
                  >
                    <b>TERCERA</b> : El otorgamiento aceptación de títulos
                    valores en cumplimiento de este <b>CONTRATO</b> no
                    constituye pago, novación ni dación en pago de este y los
                    títulos valores otorgados o aceptados lo son bajo condición
                    suspensiva del pago efectivo de ellos. <b>CUARTA</b>: La{' '}
                    <b>VENDEDORA</b> se <b>RESERVA</b> el Levantamiento de la
                    prenda sin tenencia del bien dado en venta y descrito
                    determinado en la cláusula <b>PRIMERA</b> de este contrato,
                    hasta el pago total del precio, los intereses corrientes y
                    de mora si los hubiere, y los gastos y costas judiciales y
                    extrajudiciales que eventualmente hiciere la{' '}
                    <b>VENDEDORA</b> para obtener su pago. <b>QUINTA</b>: En tal
                    virtud el <b>COMPRADOR</b> declara que: a) En el momento de
                    la firma del presente CONTRATO ya tiene recibido
                    materialmente el bien dado en venta, en perfecto estado de
                    servicio y mantenimiento y en el mismo estado se obliga a
                    conservarlo a su costa. b) Reconoce su calidad de deudor con
                    tenencia de la motocicleta hasta el cumplimiento total de
                    las obligaciones generadas por el presente <b>CONTRATO</b>.
                    c) Como deudor con tenencia de la motocicleta se obliga a
                    responder de las infracciones a las leyes y reglamentos y
                    por 5/6/24, 7:47 a.m. 1/2 los daños, perjuicios, lucro
                    cesante e indemnización de cualquier índole que resultaren o
                    tenga como causa el uso del vehículo mismo. d) Se obliga a
                    permitir la inspección del vehículo por la Vendedora en
                    cualquier momento. e) Se compromete a no trasladar el
                    vehículo fuera de la República de Colombia. f) Se obliga a
                    no vender, transformar, grabar, enajenar, modificar o
                    alterar el vehículo o cambiarle su destinación. En caso de
                    resolución del <b>CONTRATO</b>, el COMPRADOR cede a la{' '}
                    <b>VENDEDORA</b> gratuitamente las mejoras que hubiere
                    realizado al bien y expresamente renuncia al derecho de
                    retención sobre el mismo. g) Se compromete a notificar a la{' '}
                    <b>VENDEDORA</b> cualquier cambio de domicilio residencia a
                    más tardar dentro de los (10) diez días siguientes, así como
                    toda medida preventiva o de ejecución que se intente contra
                    el vehículo vendido tan pronto como tenga conocimiento de
                    ello. h) Se obliga a pagar todos los gastos de titulación
                    del bien incluyendo los impuestos, gravámenes y tasas que
                    ello generara y los requeridos por las disposiciones del
                    tránsito, como también los necesarios para mantener el
                    vehículo en normal estado de servicio. i) Igualmente se
                    obliga a presentar a la <b>VENDEDORA</b>, fotocopia de la
                    tarjeta de propiedad del vehículo donde se encuentra
                    registrada la prenda requerida para la entrega del vehículo.{' '}
                    <b>SEXTA:</b> El incumplimiento de una cualquiera de las
                    obligaciones consignadas en este contrato, parcial o
                    totalmente por parte del <b>COMPRADOR</b>, faculta a la{' '}
                    <b>VENDEDORA</b> para dar por vencido todos los plazos y
                    exigir de hecho el pago de la totalidad de lo debido en
                    forma inmediata, para lo cual bastará la sola afirmación que
                    del incumplimiento haga la <b>VENDEDORA</b> para iniciar las
                    acciones judiciales que considere pertinentes.{' '}
                    <b>PARÁGRAFO:</b> La <b>VENDEDORA</b> en el evento anterior
                    y a su juicio podrá pedir la resolución del <b>CONTRATO</b>{' '}
                    o el cumplimiento de la obligación, pero en ambos casos el{' '}
                    <b>COMPRADOR</b> se obliga a pagar a la VENDEDORA como{' '}
                    <b>CLAUSULA PENAL</b> por el incumplimiento, una suma de
                    dinero igual a la cuota inicial, más las ya pagadas. Así
                    mismo se conviene que el pago de la <b>CLAUSULA PENAL</b> no
                    extingue la obligación principal. SÉPTIMA: Las partes
                    convienen que en lo pertinente las <b>CLAUSULAS</b> del
                    PAGARE que antecede, se entiendan incorporadas al presente{' '}
                    <b>CONTRATO</b> de <b>COMPRAVENTA</b>. <b>OCTAVA:</b> La{' '}
                    <b>VENDEDORA</b> queda facultada para ceder el presente{' '}
                    <b>CONTRATO</b> sin las notificaciones y formalidades que a
                    favor de los obligados establece la Ley, puesto que estos
                    renuncian expresamente a ello. NOVENA: Con el fin de
                    garantizar el cumplimiento de la totalidad de las
                    obligaciones contenidas y generadas por este <b>PAGARE</b> y
                    el{' '}
                    <b>
                      CONTRATO DE COMPRAVENTA CON PRENDA SIN TENENCIA DEL
                      ACREEDOR
                    </b>{' '}
                    anteriormente consignado firma (n) en la calidad de
                    codeudor(es) el señor (a) - mayor(es) de edad, vecino(a)(s)
                    de - respectivamente, identificado (a)(s) con la (s)
                    cédula(s) de ciudadanía número (s) de - de ,respectivamente
                    quien responderá en forma solidaria e indivisiblemente por
                    las obligaciones aquí establecidas. En constancia se firma
                    el presente documentos en {billData[0].CIUDAD} el dia{' '}
                    {billData[0].FECHA_PAGARE}
                  </TableCell>
                </tr>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // border: '1px dashed red',
                  }}
                >
                  <Table style={{ marginRight: '2px' }}>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          _______________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          LA VENDEDORA ACREEDORA
                        </span>
                        <br />
                        SUZUKI MOTOR DE COLOMBIA S.A
                        <br />
                        REPRESENTANTE LEGAL
                        <br />
                      </TableCell>
                    </tr>
                  </Table>
                  <Table>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          _______________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          EL COMPRADOR DEUDOR
                        </span>
                        <br />
                        {billData[0].CL_NOMBRE}
                        <br />
                        C.C. No.{billData[0].CL_NROID}
                        <br />
                      </TableCell>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <Box
                          sx={{
                            border: '1px solid black',
                            width: '70px',
                            height: '100px',
                            marginLeft: '65px',
                          }}
                        >
                          <br />
                          <br />
                        </Box>
                        <Box
                          sx={{
                            marginLeft: '65px',
                          }}
                        >
                          HUELLA
                        </Box>
                      </TableCell>
                    </tr>
                  </Table>
                </Box>
                {/* segundo */}
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // border: '1px dashed red',
                    marginTop: '28px',
                  }}
                >
                  <Table>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          _______________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          DEUDOR
                        </span>
                        <br />
                        C.C. No
                        <br />
                      </TableCell>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <Box
                          sx={{
                            border: '1px solid black',
                            width: '70px',
                            height: '100px',
                            marginLeft: '65px',
                          }}
                        >
                          <br />
                          <br />
                        </Box>
                        <Box
                          sx={{
                            marginLeft: '65px',
                          }}
                        >
                          HUELLA
                        </Box>
                      </TableCell>
                    </tr>
                  </Table>
                  <Table>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          _______________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          DEUDOR
                        </span>
                        <br />
                        C.C. No.
                        <br />
                      </TableCell>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <Box
                          sx={{
                            border: '1px solid black',
                            width: '70px',
                            height: '100px',
                            marginLeft: '65px',
                          }}
                        >
                          <br />
                          <br />
                        </Box>
                        <Box
                          sx={{
                            marginLeft: '65px',
                          }}
                        >
                          HUELLA
                        </Box>
                      </TableCell>
                    </tr>
                  </Table>
                </Box>
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
