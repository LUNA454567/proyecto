import logoHorizontal from '../../assets/img/logo.png'; // Cambio en la ruta de importación
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

function NavImg() {
  return (
    <>
      <Box
        sx={{ padding: '8px', bgcolor: '#002e48', border: '0px dashed grey' }}
      >
        <img src={logoHorizontal} alt="Suzuki Logo" width={198} height={37} />
      </Box>
      <Divider sx={{ bgcolor: 'red', height: '1px' }} />
    </>
  );
}

export default NavImg;
