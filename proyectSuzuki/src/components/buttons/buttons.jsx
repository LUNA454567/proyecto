import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';

export default function BasicButtons({
  variant,
  handleClick,
  size,
  text,
  startIcon,
  sx,
  bgcolor,
}) {
  return (
    <Box
      sx={{
        padding: '1px',
        border: '0px dashed grey',
        '&:hover': {
          bgcolor: sx?.bgcolor || 'initial', // Mantén el color de fondo original en hover si está definido, de lo contrario, usa 'initial'
          color: sx?.color || 'initial', // Mantén el color de texto original en hover si está definido, de lo contrario, usa 'initial'
        },
      }}
    >
      <Button
        variant={variant}
        size={size}
        handleClick={handleClick}
        startIcon={startIcon}
        sx={sx}
      >
        {text}
      </Button>
    </Box>
  );
}
