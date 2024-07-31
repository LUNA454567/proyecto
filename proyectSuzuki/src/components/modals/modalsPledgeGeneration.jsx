import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormPropsTextFieldsPladgeGeneration from '../forms/pladgeForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  height: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'auto',
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalPledge({
  openModal,
  handleCancel,
  handleShowAdditionalView,
}) {
  const [open, setOpen] = useState(openModal);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    console.log('Modal cerrado.');
    setOpen(false);
    handleCancel();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <Box
          component="section"
          sx={{ p: 0.1, fontSize: '12px', textAlign: 'center' }}
        >
          <h2>DATOS DEL REPRESENTANTE LEGAL PARA LA PRENDA</h2>
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
          <FormPropsTextFieldsPladgeGeneration
            handleCancel={handleClose}
            handleShowAdditionalView={handleShowAdditionalView}
          />
        </Box>
      </Box>
    </Modal>
  );
}
