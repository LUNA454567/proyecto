import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

// Custom style for the modal
import FormPropsTextFieldsFecha from '../forms/changeDateForm';
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // Adjusts the width of the modal
  maxWidth: 600, // Maximum modal width
  maxHeight: '80%', // Maximum modal height
  overflowY: 'auto', // Enables vertical scrolling if content is too large
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// MODAL
export default function ModalCambioFecha({ openModal }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(openModal);
  };

  const handleClose = () => {
    setOpen(openModal);
  };

  return (
    <>
      <Modal
        open={handleOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 400 }}>
          <Box component="section" sx={{ p: 0.5, border: '0px dashed grey' }}>
            {/* TITLE */}
            <h2>SOLICITUD CAMBIO FECHA</h2>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 15,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="section" sx={{ p: 1 }}>
            {/* FORM */}
            <FormPropsTextFieldsFecha />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
