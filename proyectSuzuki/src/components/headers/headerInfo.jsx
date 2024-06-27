import Box from '@mui/joy/Box';
// import Alert from '@mui/joy/Alert';
import Alert from '@mui/material/Alert';

export default function HeaderInfo({ text, variant, color, severity }) {
  return (
    <>
      <Alert variant={variant} sx={{ mb: 0 }} severity={severity}>
        {text}
      </Alert>
    </>
  );
}
