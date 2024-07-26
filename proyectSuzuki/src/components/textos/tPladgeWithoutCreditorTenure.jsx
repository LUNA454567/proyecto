import React, { useContext, useRef, useState, useEffect } from 'react';
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
import { Context } from '../../context/context.jsx';
import { Link } from 'react-router-dom';
import { fetchBillByNumber } from '../../services/apiService';
import { useParams } from 'react-router-dom';

export default function TreplacePladgeWithoutCreditorTenure() {
  const { id } = useParams();
  console.log(id, 'idddd');

  const contentRef = useRef(); // Crear el ref
  const [borderAxis] = React.useState('xBetween');
  const [billData, setBillData] = useState(null);
  console.log(billData, 'aquii dataaaaaaaa');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTerm = 'searchTerm';

  const { nameLegalRepresentative, idNumber, cityExpedition } =
    useContext(Context);

  const handlePrint = useReactToPrint({
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

  // if (billData) {
  //   console.log('No data available');
  //   return <p>No data available hola</p>;
  // }

  // console.log('Data available:', billData);

  return (
    <>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* <Button
            variant="text"
            color="primary"
            component={Link}
            to="/viewGenerationCredits/viewGenerateFormats/5891015543"
          >
            VOLVER{' '}
          </Button> */}
        </Box>
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
          <TableContainer
            style={{
              textAlign: 'center',
              fontSize: '15px',
              border: '2px solid red',
            }}
          >
            <Box
              style={{
                textAlign: 'center',
                fontSize: '15px',
                border: '2px solid red',
              }}
            >
              <h2>
                <b> PRENDA SIN TENENCIA DEL ACREEDOR </b>
              </h2>
            </Box>

            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <TableCell
                    sx={{
                      padding: '8px',
                      textAlign: 'justify',
                      fontSize: '10px',
                    }}
                  >
                    Entre los suscritos a saber {billData[0].CL_NOMBRE}, mayor
                    de edad, domiciliado en {billData[0].CL_CIUEXP} en{' '}
                    {billData[0].CL_DIRECCION}, identificado con la cédula de
                    ciudadanía No. {billData[0].CL_NROID} expedida en{' '}
                    {billData[0].CL_CIUEXP} , obrando en su propio nombre e
                    interés, de una parte, quien en adelante se denominará EL
                    DEUDOR y de la otra, {nameLegalRepresentative}, mayor de edad, domiciliado
                    en {billData[0].CIUDAD} en {billData[0].DIR_ALMACEN},
                    identificado con la cédula de ciudadanía No.{idNumber} expedida en
                    {cityExpedition}, obrando en nombre y representación en calidad de
                    REPRESENTANTE LEGAL de SUZUKI MOTOR DE COLOMBIA S.A. con NIT
                    891.410.137-2, entidad domiciliada en Pereira y en este caso
                    sucursal{' '}
                    {billData[0].CIUDAD}, todo lo cual acredita con el
                    Certificado expedido por la Cámara de Comercio, que presenta
                    y hace parte integral del presente documento, quien en
                    adelante se denominará EL ACREEDOR, se ha celebrado un
                    Contrato de Prenda Comercial Abierta de Primer Grado sin
                    tenencia de EL ACREEDOR, contenido en las siguientes
                    cláusulas : PRIMERA: EL DEUDOR constituye a favor de EL
                    ACREEDOR, derecho de Prenda Abierta sin Tenencia para
                    garantizar al ACREEDOR, el cumplimiento de obligaciones de
                    crédito hasta por la suma de UN MILLON SETECIENTOS CINCO MIL
                    DOSCIENTOS CINCUENTA Y CUATRO PESOS MCTE. ($
                    {billData[0].VLR_PAGARE}) MCTE. SEGUNDA : La Prenda Abierta
                    sin Tenencia que por este documento se constituye por parte
                    de EL DEUDOR a favor de EL ACREEDOR, conforme a los Art.
                    1207 y s,s, del código de comercio, recae sobre un automotor
                    ({billData[0].CLASE}) de su exclusiva propiedad, el cual se
                    especifica y detalla a continuación:
                  </TableCell>
                </tr>

                <tr>
                  <Table
                    borderAxis={borderAxis}

                    // style={{ border: '4px dashed purple', width: '100%' }}
                  >
                    <tbody>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>CERTIFICADO INDIVIDUAL:</td>
                        <td>{billData[0].CERT_INDIVIDUAL}</td>
                        <td>MODELO:</td>
                        <td>{billData[0].AMODELO}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>MARCA:</td>
                        <td>{billData[0].MARCA}</td>
                        <td>CLASE:</td>
                        <td>{billData[0].CLASE}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>COLOR:</td>
                        <td>{billData[0].COLOR}</td>
                        <td>N°. CHASIS:</td>
                        <td>{billData[0].CHASIS}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>N°. MOTOR:</td>
                        <td>{billData[0].MOTOR} CC</td>
                        <td>LINEA:</td>
                        <td>{billData[0].LINEA}</td>
                      </tr>
                      <tr style={{ textAlign: 'center ', fontSize: '10px' }}>
                        <td>PLACA N°:</td>
                        <td>{billData[0].PLACA} CC</td>
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
                    TERCERA: Sobre el indicado automotor, EL DEUDOR conserva la
                    tenencia del vehículo a nombre del ACREEDOR en calidad de
                    prenda. CUARTA: El gravamen de Prenda mencionada garantiza
                    al ACREEDOR todas las obligaciones que por cualquier causa
                    tuviere y llegare a contraer EL DEUDOR para con EL ACREEDOR,
                    cuyas fechas de vencimiento sean posteriores al día 6 de
                    Abril de 2024, pero advirtiendo que la caución prendaria se
                    extiende no solamente a la suma debida, sino también a los
                    intereses de la obligación u obligaciones contraídos, los
                    cuales quedarán garantizados igualmente por la prenda.
                    QUINTA: Los créditos respectivos pueden constar en cualquier
                    clase de títulos valores en los que firme EL DEUDOR como
                    girador, aceptante, endosante, suscriptor u ordenante,
                    directa o indirectamente, individual o conjuntamente, con
                    otras firmas o en cualquier otro documento proveniente del
                    DEUDOR a favor de EL ACREEDOR. SEXTA: Para los efectos
                    legales correspondientes se toma como fecha de vencimiento
                    de la obligación asegurada por medio de la prenda aquí
                    constituida, el día de su vencimiento, esto es el{billData[0].FVTO_PAG}. Sin perjuicio de lo anterior,la obligación global
                    se vencerá anticipadamente cuando quiera que se presente las
                    siguientes eventualidades:A.- Por el simple retraso en el
                    pago de uno o más instalamentos por pagar del título valor o
                    documento otorgado por EL DEUDOR a favor de EL ACREEDOR. En
                    este caso, bastará EL ACREEDOR presentar ante el respectivo
                    Juez, este documento de prenda y otros títulos valores o
                    documentos en que consten las deudas correspondientes. B.-
                    Por no poner a disposición de EL ACREEDOR el vehículo dado
                    en prenda dentro de las 24 horas siguientes a la
                    comunicación fehaciente, dirigida a la residencia registrada
                    ante EL ACREEDOR por EL DEUDOR, en la cual solicita la
                    presentación del automotor pignorado para su inspección. Y
                    C.- Por incumplimiento de cualquiera de las obligaciones
                    contraídas en el presente contrato.<br></br> Todo lo anterior sin
                    menoscabo de las acciones civiles y penales a que tenga
                    derecho EL ACREEDOR. PARÁGRAFO: No obstante el vencimiento
                    establecido para la obligación asegurada, la Prenda
                    conservará su vigencia mientras existan obligaciones
                    pendientes de pago, sean directas o indirectas a cargo de EL
                    DEUDOR y a favor de EL ACREEDOR y mientras esta no cancele
                    en forma expresa y escrita el gravamen prendario que por
                    medio de este contrato se constituye. SÉPTIMA: Son
                    obligaciones especiales de EL DEUDOR: a) Pagar la totalidad
                    de los gastos originados con ocasión la prenda del vehículo
                    y del cobro, así como los impuestos de timbre, papel sellado
                    que cause el contrato, gastos de matrícula, licencia de
                    circulación, placas, registro de la prenda, etc. B) Pagar la
                    totalidad de las sumas que resulten de la imposición de
                    multas y sanciones por infracciones de policía o de
                    tránsito, indemnizaciones a terceros por daños ocasionados
                    en el manejo del vehículo y en general, la totalidad de los
                    gastos que en una u otra forma puedan derivarse del vehículo
                    objeto de la prenda. C) Permitir al ACREEDOR el derecho de
                    inspección sobre el estado del vehículo dado en prenda, para
                    cuyo efecto presentará la motocicleta en el sitio que
                    indique EL ACREEDOR, cada vez que este así lo requieran. D)
                    Mantener en perfecto estado de funcionamiento ejecutando a
                    su costa las revisiones periódicas y las reparaciones
                    necesarias. E) Informar al ACREEDOR, cualquier cambio de
                    domicilio o residencia dentro de los 10 días siguientes a la
                    fecha en que se realice. F) EL DEUDOR está obligado a
                    gestionar lo pertinente de este contrato ante la respectiva
                    Oficina de Tránsito, debiendo entregar al ACREEDOR fotocopia
                    de la Tarjeta de Propiedad en que obre la misma constancia y
                    entregar el original del presente documento de prenda
                    debidamente sellado por la Oficina de Tránsito respectiva.
                    OCTAVA: En caso de mora de EL DEUDOR en el pago de
                    cualquiera de las cuotas o de su interés, o si usare el
                    vehículo a juicio de EL ACREEDOR en forma prejudicial o
                    peligrosa a sus intereses, o si la motocicleta fuere
                    perseguida judicialmente, por vía administrativa o por
                    terceros, o si causaren daños a terceros con el vehículo, y
                    en general si EL DEUDOR dejare de cumplir cualquiera de las
                    obligaciones a su cargo derivadas del presente contrato,
                    podrá EL ACREEDOR proceder a exigir el pago de la totalidad
                    de los saldos pendientes, sin consideración a los plazos
                    convenidos. De optar EL ACREEDOR por la facultad anterior,
                    será obligación de EL DEUDOR restituir inmediatamente el
                    vehículo, y en caso contrario, podrá EL ACREEDOR tomarlo en
                    cualquier lugar que se encuentre bajo la responsabilidad y a
                    costa del comprador, en tanto las autoridades judiciales
                    resuelvan. NOVENA: No podrá EL DEUDOR oponerse en ningún
                    caso a la toma del vehículo, en forma alguna, ni ejercitar
                    retención sobre el mismo, ni alegar u oponerse por mejoras,
                    reparaciones, adiciones, etc., ya que a éstas se extiende la
                    prenda. Para los efectos anteriores podrá EL ACREEDOR obrar
                    por si, o recurrir a las autoridades judiciales,
                    administrativas o de circulación, para que mediante la
                    simple presentación de este documento, y sin necesidad de
                    acompañar otra prueba le presenten la 25/7/24, 12:13 p.m.
                    1/2 protección para recuperar la tenencia del vehículo
                    mencionado. DECIMA: Sin perjuicio de otras acciones civiles
                    y penales podrá EL ACREEDOR tomar las medidas preventivas
                    que considere necesarias para garantizar el pago de los
                    perjuicios causados haciendo efectivo para ello los títulos
                    valores o documentos aceptados por EL DEUDOR, hasta la
                    concurrencia del valor de los créditos. Y en el evento de
                    que el valor comercial del vehículo no cubra lo adeudado, EL
                    ACREEDOR con el título valor (pagaré) podrá perseguir otros
                    bienes hasta la cancelación total de las deudas. DECIMA
                    PRIMERA: EL DEUDOR queda facultado para cancelar el total de
                    la obligación u obligaciones en cualquier tiempo antes del
                    vencimiento de la última cuota, mediante pago del saldo de
                    la deuda y los intereses causados hasta la fecha de dicho
                    pago. DECIMA SEGUNDA: El vehículo pignorado deberá
                    permanecer dentro del territorio de la República de
                    Colombia. Para salir del país se requiere autorización
                    escrita y expresa del ACREEDOR. DECIMA TERCERA: Por el sólo
                    hecho de iniciar EL ACREEDOR acción judicial, policiva o
                    administrativa pagará EL DEUDOR a EL ACREEDOR una suma
                    equivalente al (20%) del valor del préstamo por agencias en
                    derecho, exigible con la sola iniciación de la respectiva
                    actuación. DECIMA CUARTA: EL DEUDOR desde ahora acepta
                    cualquier traspaso o cesión que EL ACREEDOR hiciere de los
                    instrumentos a su cargo, así como de la prenda con todas las
                    consecuencias que la ley señale. DECIMA QUINTA: El bien dado
                    en prenda podrá ser enajenado por EL DEUDOR, pero solo se
                    verificará la tradición de él adquiriente, cuando EL
                    ACREEDOR lo autorice o esté cubierto en su totalidad el
                    crédito, debiendo hacerse constar el respectivo hecho con el
                    presente documento, en nota suscrita por EL ACREEDOR. En
                    Caso de autorización de EL ACREEDOR los adquirientes están
                    obligaos a respetar el contrato de prenda. DECIMA SEXTA: EL
                    DEUDOR se compromete a mantener el vehículo dado en prenda
                    en normal estado de funcionamiento y conservación. DECIMA
                    SÉPTIMA: Acuérdese como lugar de cumplimiento de las
                    obligaciones la ciudad de MANIZALES. Para efecto, sus
                    obligaciones y responsabilidades son las mismas de un
                    Depositario. AUTORIZACION: EL ACREEDOR PRENDARIO autoriza
                    expresamente a SUZUKI MOTOR DE COLOMBIA S.A. para que esta
                    prenda pueda ser registrada en comfecamaras y se obtenga
                    certificado de la misma.
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
                    Para constancia se firma en MANIZALES, el día 6 de Abril de 2024.

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
                        
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          ACREEDOR PRENDARIO 
                        </span>
                        <br />
                        SUZUKI MOTOR DE COLOMBIA S.A
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
                          DEUDOR PRENDARIO

                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          NOMBRE:____________________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          CEDULA:_____________________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          DIRECCIÓN:__________________________________
                        </span>
                        <br />
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          TEL:_________________________________________
                        </span>
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
