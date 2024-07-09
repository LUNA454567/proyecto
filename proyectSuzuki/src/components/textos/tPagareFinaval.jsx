import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/joy/Grid';
import '../style/printStyles.css';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import Table from '@mui/joy/Table';
import { Typography } from '@mui/material';
import { fetchBillByNumber } from '../../services/apiService';
import searchTerm  from '../search/search';

export default function TPagareFinaval() {
  const contentRef = useRef();
  const [billData, setBillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchTerm = 'searchTerm';
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  useEffect(() => {
    console.log('useEffect triggered');
    const getBillData = async () => {
      try {
        console.log('Fetching data...');
        const data = await fetchBillByNumber{searchTerm};
        console.log('Data fetched:', data);
        setBillData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bill data:', error);
        setLoading(false);
      }
    };

    getBillData();
  }, []);

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
            margin: '3px',
            padding: 0.3,
            // border: '3px dashed grey',
            width: '100%',
          }}
          // className="scrollable-container"
          ref={contentRef}
        >
          <TableContainer>
            {/* <Box style={{ textAlign: 'center' }}>
              <h2>
                <b> PAGARE No.5891015543 </b>
              </h2>
            </Box> */}

            <Table aria-label="basic table">
              <thead></thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: '90px',
                      // border: '3px dashed purple',
                      wordWrap: 'break-word',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                      textAlign: 'justify',
                    }}
                  >
                    <Typography variant="subtitle1" fontSize={10}>
                      PAGARE No.{billData.NRO_PAGARE} <br /> SUMA ADEUDADA POR
                      CONCEPTO DE CAPITAL <br />
                      Por Valor de: ($_______________) Valor en letras: <br />{' '}
                      TASA DE INTERÉS REMUNERATORIA EFECTIVA ANUAL: <br /> PLAZO
                      DE PAGO (MENSUAL): _______________________ <br /> FECHA DE
                      PAGO DE LA PRIMERA CUOTA: ___DE__DE 202 ___ <br /> FECHA
                      DE VENCIMIENTO FINAL: ____________________ <br /> VALOR
                      SEGURO DE VIDA:__________________________ <br /> <br /> Yo
                      (nosotros) ___________________________________________ -,
                      identificado (s) como aparece al pie de mi (nuestras)
                      firma (s) Y ___________________________________________
                      identificado (s) como aparece al pie de mi (nuestras)
                      firma (s) declaro (amos) que debo (emos) y me (nos) obligo
                      (amos) a pagar incondicional, solidaria e indivisiblemente
                      en dinero efectivo a la orden de{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b>, sociedad comercial
                      identificada con Nit No. 891410137-2, de quien represente
                      sus derechos o de cualquier otro tenedor legítimo de éste
                      pagaré, en sus oficinas de la ciudad de __________, el día
                      _____ del mes de _____ del año._______, la suma de
                      ______________________________________________________________________________
                      ($____________________) Moneda Legal. Sobre el capital
                      reconoceré (mos) intereses moratorios a la tasa máxima
                      legal permitida, liquidados a partir de la fecha de
                      diligenciamiento de este título y hasta cuando se haga
                      efectivo el pago total. Todos los gastos e impuestos que
                      cause este título valor son de mí (nuestro) cargo,
                      incluido el impuesto de timbre, cuyo valor también faculto
                      a <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o a cualquier otro
                      tenedor legítimo para incluirlo en este título. También
                      son de mi cargo los gastos y costos de cobranza
                      extrajudicial y/o judicial, incluidos los honorarios de
                      abogado que estimo (amos) en un veinte por ciento (20%) de
                      las sumas adeudadas por todo concepto, conforme al
                      artículo 782 del Código de Comercio Colombiano.{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o cualquier otro
                      tenedor legítimo queda autorizado para declarar vencido el
                      plazo total o de las cuotas que constituyan el saldo de lo
                      debido y exigir su pago total inmediato de la obligación,
                      incluido capital, intereses remuneratorios sobre el saldo
                      insoluto del crédito a la tasa efectiva anual indicada en
                      el presente título valor, los intereses moratorios, la
                      comisión pactada en el presente título valor por cobro
                      judicial y/o extrajudicial, primas de seguros y demás
                      accesorios ya sea judicial o extrajudicialmente, cuando el
                      deudor entre en mora o incumpla una cualquier de las
                      obligaciones derivadas del presente documento, en los
                      siguientes casos: a) Por mora en el pago del capital y/o
                      intereses de cualquier obligación que directa o
                      indirectamente, conjunta o separadamente, tenga(mos) para
                      con <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> o cualquier otro
                      tenedor legítimo; b) Si en forma conjunta o separada
                      fuere(mos) perseguido(s) judicialmente por cualquier
                      persona y en ejercicio de cualquier acción; c) Por giro de
                      cheque a favor de <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o
                      de cualquier otro tenedor legítimo, sin provisión de
                      fondos o devueltos por cualquier causa; d) Por muerte de
                      uno cualquiera de los deudores. En este caso,{' '}
                      <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> o cualquier otro
                      tenedor legítimo tendrá el derecho de exigir la totalidad
                      de (los) créditos y sus intereses y gastos de cobranza a
                      cualesquiera de los herederos del(los) Deudor(es)
                      Fallecido(s), sin necesidad de demandar a todos; e) Por la
                      iniciación de trámite Concursal, Concordato, Oferta de
                      Cesión de Bienes o liquidatario de cualquier naturaleza y
                      de cualquiera de los deudores. Si fueran demandado (os) o
                      fueren perseguido (os) o demandado (os) bienes por
                      cualquier persona en ejercicio de cualquier acción, me
                      (nos) obligo (amos) a notificar a{' '}
                      <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> por cualquiera de
                      estas acciones que pueden perjudicar el normal recaudo. f)
                      Por falta de actualización del avalúo del bien dado en
                      garantía Prendaria. g) Si la (s) garantía (s) constituida
                      (s) a favor de <b> SUZUKI MOTOR DE COLOMBIA S.A.</b> o de
                      cualquier otro tenedor legítimo, sufriere (n) desmejora,
                      deterioro o deprecio por cualquier causa. h) Por ser
                      vinculado cualquiera de los deudores, por parte de las
                      autoridades competentes, a cualquier tipo de investigación
                      por delitos evidenciados en el código penal en el capítulo
                      V -del lavado de Activos-o sea (n) incluido(s) en listas
                      para el control y prevención de lavado de activos y la
                      financiación del terrorismo administradas por cualquier
                      autoridad nacional o extranjera, tales como la Oficina de
                      Control de Activos en el Exterior (OFAC) del Departamento
                      del Tesoro de los Estados Unidos de América y la emitida
                      por el concejo de seguridad de las naciones unidas (ONU),
                      o condenado(s) por parte de las autoridades competentes en
                      cualquier tipo de proceso judicial relacionado con la
                      comisión de cualquier hecho punible. i) Si a juicio de{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o de cualquier otro
                      tenedor legítimo, los balances, informes o documentos
                      presentados por cualquiera de los aquí firmantes,
                      contienen información incompleta o inexactitudes o no son
                      veraces. j) Si cualquiera de los aquí firmantes
                      incumple(n) alguna(s) de las obligaciones establecidas en
                      los títulos de deuda y/o en otros documentos derivados de
                      cualquier acto o contrato suscrito a favor de
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o de cualquier otro
                      tenedor legítimo. <br /> <br /> En el evento de prórroga u
                      Otrosí al presente título suscrito por uno cualquiera de
                      los deudores, subsistirá la solidaridad e indivisibilidad
                      establecida entre todos los suscriptores del título. En
                      caso de prórroga, novación o modificación de la obligación
                      a mi (nuestro) cargo contenida en éste título valor,
                      manifiesto (festamos) desde ahora que acepto (amos)
                      expresamente que continúe vigentes todas y cada una de las
                      garantías que para tal efecto se hayan presentado, sean
                      reales o personales, garantías que se entenderán ampliadas
                      a las nuevas obligaciones que pueden surgir conforme a lo
                      previsto en el artículo 1708 del Código Civil. En caso de
                      acción judicial me (nos) adhiero (adherimos) al
                      nombramiento de secuestre que haga el Acreedor. Si la
                      presente obligación se encuentra garantizada con prenda,
                      yo (nosotros) nos obligamos a presentar a{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> cada 3 años, contados
                      a partir de la fecha de emisión del primer avalúo del bien
                      dado en garantía, una actualización del mismo elaborada
                      por un avaluador autorizado por{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b>o por cualquier otro
                      tenedor legítimo. Si así no lo hiciere (mos){' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o cualquier otro
                      tenedor legítimo queda facultado para efectuar dicho
                      trámite a costa de cualquiera de los aquí firmantes, o
                      para declarar vencido el plazo de la obligación u
                      obligaciones garantizadas, por cuanto se considera que la
                      falta de actualización del avalúo constituye una desmejora
                      de la garantía. De conformidad con lo dispuesto en la Ley
                      2213 de 2022 y/o aquellas que la modifiquen, adicionen o
                      aclaren, declaro (mos) conocer previa y expresamente que{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> podrá solicitar que
                      la(s) notificación(es) personal(es) que fuera(n)
                      necesaria(s) para la ejecución del presente pagaré ante
                      instancias judiciales se realicen por medio de mensajes de
                      datos a la(s) dirección(es) de correo electrónico
                      diligenciada(s) en el apartado de firmas del presente
                      título y/o cualquier otro medio de comunicación. Sin
                      perjuicio de lo anterior,{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> podrá solicitar la(s)
                      notificación(es) personal(es) a las direcciones de correo
                      electrónico que conozca por cualquier otro medio, por
                      ejemplo, pero sin limitarse, a las que hubiesen sido
                      suministradas por nosotros a entidades como Cámaras de
                      Comercio, Operadores de Información y/o cualquier otra
                      Entidad encargada de la administración de datos personales
                      de acuerdo con lo dispuesto en el Código General del
                      Proceso, Ley 1437 de 2011, Ley 1581 de 2012 y las demás
                      disposiciones que las complementen, modifiquen o
                      adicionen. Para constancia firmo (amos) en la ciudad de
                      ___________---, de conformidad con lo establecido en el
                      Artículo 622 del Código de Comercio, autorizo(amos)
                      expresa e irrevocablemente a{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o a cualquier tenedor
                      legítimo para llenar el presente Pagaré en los espacios
                      dejados en blanco, en cualquier tiempo, sin previo aviso y
                      de acuerdo con las siguientes instrucciones: 1) El valor
                      del título será igual al monto de todas las sumas de
                      dinero que en razón de cualquier obligación o crédito, de
                      cualquier origen, incluyendo, sin restringirse a ello,
                      créditos de cualquier naturaleza, capital e intereses en
                      los términos de Ley, comisiones y gastos de cobranza
                      ocasionados por los anteriores conceptos, o que por
                      cualquier otra obligación, cualquiera de los firmantes
                      le(s) esté(mos) adeudando a 28/5/24, 3:19 p.m. 1/2 cargo
                      mio (nuestro) y a favor de{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o a cualquier tenedor
                      legítimo, conjunta o separadamente, directa o
                      indirectamente el día en que sea llenado, incluido el
                      valor del impuesto de timbre que se genere, obligaciones
                      que asumo (imos) como propias y me (nos) comprometo(emos)
                      a pagar solidaria y mancomunadamente. Para estos efectos,
                      habrá de entenderse, que por el solo hecho de entrar en
                      mora, en una cualquiera de las obligaciones a mi(nuestro)
                      cargo para con <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o
                      cualquier tenedor legítimo o por haber incurrido en
                      cualquiera de las causales de aceleración establecidas,{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> o cualquier tenedor
                      legítimo podrá declarar de plazo vencido todas las
                      obligaciones que tenga(mos) para con él y por ende llenar
                      el presente pagaré con los valores resultantes de todas
                      las obligaciones. 2) El nombre de cada uno de los deudores
                      será el que figure en el documento de identidad de la
                      persona natural o en el certificado de existencia y
                      representación legal de la persona jurídica, seguido del
                      nombre de su representante legal. 3) La ciudad será
                      aquella en la cual se haya otorgado cualquiera de las
                      obligaciones respaldadas con el presente Pagaré. 4) La
                      fecha de vencimiento será la del día en que sea llenado.{' '}
                      <br /> <br />{' '}
                      <b>
                        AUTORIZACIÓN PARA LA CONSULTA, REPORTE Y PROCESAMIENTO
                        DE DATOS CREDITICIOS, FINANCIEROS, COMERCIALES, DE
                        SERVICIOS Y DE TERCEROS PAÍSES EN LA CENTRAL DE
                        INFORMACIÓN CIFIN Y A CUALQUIER OTRA ENTIDAD PÚBLICA O
                        PRIVADA DE CENTRALES DE RIESGO.
                      </b>{' '}
                      En mi calidad de titular de información, actuando libre y
                      voluntariamente, autorizo de manera expresa e irrevocable
                      a <b>SUZUKI MOTOR DE COLOMBIA S.A.</b>, o a quien
                      represente sus derechos, a consultar, solicitar,
                      suministrar, reportar, procesar y divulgar toda la
                      información que se refiera a mi comportamiento crediticio,
                      financiero, comercial, de servicios y de terceros países
                      de la misma naturaleza, a la Central de Información CIFIN
                      o a cualquier otra entidad pública o privada, nacional,
                      extranjera o multilateral que administre o maneje bases de
                      datos, o a cualquier otra Entidad Financiera de Colombia,
                      o del exterior o de carácter multilateral, o a quien
                      represente sus derechos. Así mismo, autorizo a compartir
                      mi información con las filiales o vinculadas de{' '}
                      <b>SUZUKI MOTOR DE COLOMBIA S.A.</b> Conozco que el
                      alcance de esta autorización implica que el comportamiento
                      frente a mis obligaciones será registrado con el objeto de
                      suministrar información suficiente y adecuada al mercado
                      sobre el estado de mis obligaciones, comerciales,
                      crediticias, de servicios y la proveniente de terceros
                      países de la misma naturaleza. En consecuencia, quienes se
                      encuentren afiliados y/o tengan acceso a la Central de
                      Información –CIFIN o a cualquier otra entidad pública o
                      privada, nacional, extranjera o multilateral, que
                      administre o maneje bases de datos podrán conocer esta
                      información, de conformidad con la legislación y
                      jurisprudencia aplicable. La información podrá ser
                      igualmente utilizada para efectos estadísticos. Mis
                      derechos y obligaciones así como la permanencia de mi
                      información en las bases de datos corresponden a lo
                      determinado por el ordenamiento jurídico aplicable del
                      cual, por ser de carácter público, estoy enterado. En caso
                      de que, en el futuro, el autorizado en este documento
                      efectúe, a favor de un tercero, una venta de cartera o una
                      cesión a cualquier título de las obligaciones a mi cargo,
                      los efectos de la presente autorización se extenderán a
                      éste en los mismos términos y condiciones. Así mismo,
                      autorizo a la Central de Información a que, en su calidad
                      de operador, ponga mi información a disposición de otros
                      operadores nacionales o extranjeros, en los términos que
                      establece la ley, siempre y cuando su objeto sea similar
                      al aquí establecido. Declaro (amos) que en mi (nuestro)
                      poder ha quedado copia de este instrumento <br /> <br />{' '}
                      Para constancia se firma en _________________ a los
                      _________ días del mes de ________ del año _______________{' '}
                      <br />
                      <br /> EL (LOS) DEUDOR (ES) <br /> <br /> Firma:
                    </Typography>
                  </td>
                </tr>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // border: '1px dashed red',
                    marginTop: '27px',
                  }}
                >
                  <Table>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          {' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          Nombre del deudor:
                        </span>
                        <br />
                        CC:
                        <br />
                        Representante Legal:
                        <br />
                        NIT:
                        <br />
                        Dirección:
                        <br />
                        Correo electrónico:
                        <br />
                        Télefono:
                        <br />
                        Ciudad de domicilio:
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
                  <Table></Table>
                </Box>
                {/* segundo */}
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // border: '1px dashed red',
                    marginTop: '3px',
                  }}
                >
                  <Table>
                    <tr>
                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <span style={{ marginRight: '20px' }}>
                          <br /> EL (LOS) CODEUDOR (ES) <br /> <br /> Firma:{' '}
                          <br /> <br /> <br />{' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          Nombre del deudor:
                        </span>
                        <br />
                        CC:
                        <br />
                        Representante Legal:
                        <br />
                        NIT:
                        <br />
                        Dirección:
                        <br />
                        Correo electrónico:
                        <br />
                        Télefono:
                        <br />
                        Ciudad de domicilio:
                      </TableCell>

                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <Box
                          sx={{
                            border: '1px solid black',
                            width: '70px',
                            height: '100px',
                            marginLeft: '65px',
                            marginTop: '57px',
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
                          <br /> <br /> Firma: <br /> <br /> <br />{' '}
                          {/* Reducido el margen para adaptarse mejor */}
                          Nombre del deudor:
                        </span>
                        <br />
                        CC:
                        <br />
                        Representante Legal:
                        <br />
                        NIT:
                        <br />
                        Dirección:
                        <br />
                        Correo electrónico:
                        <br />
                        Télefono:
                        <br />
                        Ciudad de domicilio:
                      </TableCell>

                      <TableCell sx={{ padding: '8px', fontSize: '10px' }}>
                        <Box
                          sx={{
                            border: '1px solid black',
                            width: '70px',
                            height: '100px',
                            marginLeft: '65px',
                            marginTop: '57px',
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
