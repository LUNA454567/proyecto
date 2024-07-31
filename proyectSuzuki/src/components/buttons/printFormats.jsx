import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import TPagareFinaval from '../textos/tPagareFinaval';
import TPagare from '../textos/tPagare';
import TPledgeGeneration from '../textos/tPledgeGeneration';
import TCompraventa from '../textos/tTrading';
import TcertificateOfDelivery from '../textos/tCertificateOfDelivery';
import TinvoiceConfirmation from '../textos/tInvoiceConfirmation';
import ModalPledge from '../modals/modalsPledgeGeneration';
import ViewReplaceFormPladgeWithoutCreditorTenure from '../../views/viewReplaceFormPladgeWithoutCreditorTenure';

function TabPanel(props) {
  const { children, value, index, isModalOpen, handleCloseModal, handleShowAdditionalView,showAdditionalView } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
          {/* Agrega los componentes que quieres mostrar en el tab panel */}
          <ModalPledge
            openModal={isModalOpen}
            handleCancel={handleCloseModal}
            handleShowAdditionalView={handleShowAdditionalView}
          />
          {showAdditionalView && <ViewReplaceFormPladgeWithoutCreditorTenure />}
        </Box>
      )}
    </div>
  );
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdditionalView, setShowAdditionalView] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowAdditionalView = () => {
    setShowAdditionalView(true);
  };

  const handleButtonClick = () => {
    handleOpenModal();
    handleShowAdditionalView();
  };


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', margin: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          '& .MuiTab-root': {
            flexGrow: isLargeScreen ? 1 : 0,
          },
        }}
      >
        <Tab label="PAGARE FINAVAL" />
        <Tab label="PAGARE" />
        <Tab label="GENERAR PRENDA" onClick={handleOpenModal} />
        <Tab label="COMPRAVENTA" />
        <Tab label="ACTA DE ENTREGA" />
        <Tab label="CONFIRMACION DE FACTURA" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TPagareFinaval />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TPagare />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ModalPledge
          openModal={isModalOpen}
          handleCancel={handleCloseModal}
          handleShowAdditionalView={handleShowAdditionalView}
        />
        {showAdditionalView && <ViewReplaceFormPladgeWithoutCreditorTenure />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TCompraventa />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TcertificateOfDelivery />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TinvoiceConfirmation />
      </TabPanel>
    </Box>
  );
}
