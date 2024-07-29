export default function numeroATexto(num) {
  const unidades = [
    '',
    'UNO',
    'DOS',
    'TRES',
    'CUATRO',
    'CINCO',
    'SEIS',
    'SIETE',
    'OCHO',
    'NUEVE',
  ];
  const decenas = [
    '',
    'DIEZ',
    'VEINTE',
    'TREINTA',
    'CUARENTA',
    'CINCUENTA',
    'SESENTA',
    'SETENTA',
    'OCHENTA',
    'NOVENTA',
  ];
  const especiales = [
    'DIEZ',
    'ONCE',
    'DOCE',
    'TRECE',
    'CATORCE',
    'QUINCE',
    'DIECISEIS',
    'DIECISIETE',
    'DIECIOCHO',
    'DIECINUEVE',
  ];
  const centenas = [
    '',
    'CIEN',
    'DOCIENTOS',
    'TRESCIENTOS',
    'CUATROCIENTOS',
    'QUINIENTOS',
    'SEISCIENTOS',
    'SETECIENTOS',
    'OCHOCIENTOS',
    'NOVECIENTOS',
  ];

  if (num === 0) return 'CERO';
  if (num < 10) return unidades[num];
  if (num < 20) return especiales[num - 10];
  if (num < 100)
    return (
      decenas[Math.floor(num / 10)] +
      (num % 10 !== 0 ? ' Y ' + unidades[num % 10] : '')
    );
  if (num < 1000) {
    return (
      (num === 100 ? 'CIEN' : centenas[Math.floor(num / 100)]) +
      (num % 100 !== 0 ? ' ' + numeroATexto(num % 100) : '')
    );
  }

  if (num < 1000000) {
    return (
      (Math.floor(num / 1000) === 1
        ? 'MIL'
        : numeroATexto(Math.floor(num / 1000)) + ' MIL') +
      (num % 1000 !== 0 ? ' ' + numeroATexto(num % 1000) : '')
    );
  }

  if (num < 1000000000) {
    return (
      (Math.floor(num / 1000000) === 1
        ? 'UN MILLÓN'
        : numeroATexto(Math.floor(num / 1000000)) + ' MILLONES') +
      (num % 1000000 !== 0 ? ' ' + numeroATexto(num % 1000000) : '')
    );
  }

  return 'NÚMERO FUERA DE RANGO';
}