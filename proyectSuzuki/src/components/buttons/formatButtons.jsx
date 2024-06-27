import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormatButtons({
  handleModalDia,
  handleModalCredito,
  handleModalCambioFecha,
  handleModalFinaval,
}) {
  return (
    <Stack spacing={0.5} direction="row" justifyContent="flex-end">
      <Button
        type="button"
        variant="contained"
        size="large"
        sx={{
          mb: 2,
          bgcolor: '#0050a0',
          alignItems: 'center',
          fontSize: '12px',
        }}
        onClick={handleModalDia}
      >
        CONSTANCIA DÍA
      </Button>

      <Button
        type="button"
        variant="contained"
        size="large"
        sx={{
          mb: 2,
          bgcolor: '#0050a0',
          alignItems: 'center',
          fontSize: '12px',
        }}
        onClick={handleModalCredito}
      >
        CONSTANCIA CREDITO
      </Button>

      <Button
        type="button"
        variant="contained"
        size="large"
        sx={{
          mb: 2,
          bgcolor: '#0050a0',
          alignItems: 'center',
          fontSize: '12px',
        }}
        onClick={handleModalCambioFecha}
      >
        SOLICITUD CAMBIO DE FECHA
      </Button>

      <Button
        type="button"
        variant="contained"
        size="large"
        sx={{
          mb: 2,
          bgcolor: '#0050a0',
          alignItems: 'center',
          fontSize: '12px',
        }}
        onClick={handleModalFinaval}
      >
        CONSTANCIA CREDITO FINAVAL
      </Button>
    </Stack>
  );
}
