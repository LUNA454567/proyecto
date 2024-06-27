import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import FormPropsTextFieldsConstancia from '../forms/formContanciaCredito';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 550,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'auto', // Enables vertical scrolling if content is too large
  pt: 2,
  px: 4,
  pb: 3,
};

// MODAL
export default function ModalConstanciaCredito({ openModal }) {
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
        <Box sx={{ ...style, width: 400 }}>
          <Box component="section" sx={{ p: 0.5, border: '0px dashed grey' }}>
            {/* TITLE */}
            <h2>CONSTANCIA CRÉDITO</h2>
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
          <Box component="section" sx={{ p: 2 }}>
            <FormPropsTextFieldsConstancia />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
