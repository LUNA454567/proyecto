// import Tabs from '@mui/joy/Tabs';
// import TabList from '@mui/joy/TabList';
// import Tab from '@mui/joy/Tab';
// import TabPanel from '@mui/joy/TabPanel';
// import TPagareFinaval from '../textos/tPagareFinaval'; // Ajusta la importación

// export default function PrintFormats({
//   handleModalNameLegalRepresentativeConsChange,
//   handleModalPrintPagare,
//   handleModalPrintPrenda,
//   handleModalPrintCompraventa,
//   handleModalPrintActaEntrega,
//   handleModalPrintConfirmacionFact,
// }) {
//   return (<>

//   <hr />
//     <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ mt: 1, px: 0 }}>
//       <TabList sx={{ py: 0 }}>
//         <Tab
//           onClick={handleModalNameLegalRepresentativeConsChange}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           PAGARE FINAVAL
//         </Tab>
//         <Tab
//           onClick={handleModalPrintPagare}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           PAGARE
//         </Tab>
//         <Tab
//           onClick={handleModalPrintPrenda}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           GENERAR PRENDA
//         </Tab>
//         <Tab
//           onClick={handleModalPrintCompraventa}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           COMPRAVENTA
//         </Tab>
//         <Tab
//           onClick={handleModalPrintActaEntrega}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           ACTA DE ENTREGA
//         </Tab>
//         <Tab
//           onClick={handleModalPrintConfirmacionFact}
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           CONFIRMACION DE FACTURA
//         </Tab>
//         <Tab
//           component={Link}
//           to="/viewGenerateCredits"
//           sx={{ fontSize: '13px', textAlign: 'center' }}
//         >
//           REGRESAR
//         </Tab>
//       </TabList>
//       <TabPanel value={0}>
//         <TPagareFinaval />
//       </TabPanel>
//       <TabPanel value={1}>
//         <b>Second</b> tab panel
//       </TabPanel>
//       <TabPanel value={2}>
//         <b>Third</b> tab panel
//       </TabPanel>
//       <TabPanel value={3}>
//         <b>Fourth</b> tab panel
//       </TabPanel>
//       <TabPanel value={4}>
//         <b>Fifth</b> tab panel
//       </TabPanel>
//       <TabPanel value={5}>
//         <b>Sixth</b> tab panel
//       </TabPanel>
//     </Tabs>
//     </>
//   );
// }

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TPagareFinaval from '../textos/tPagareFinaval';
import TPagare from '../textos/tPagare';
import TPledgeGeneration from '../textos/tPledgeGeneration';
import TCompraventa from '../textos/tTrading'
import TcertificateOfDelivery from '../textos/tCertificateOfDelivery';
import TinvoiceConfirmation from '../textos/tInvoiceConfirmation';
import { Link } from 'react-router-dom';
// import

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
        <Tab label=" GENERAR PRENDA" />
        <Tab label="COMPRAVENTA" />
        <Tab label="ACTA DE ENTREGA" />
        <Tab label="CONFIRMACION DE FACTURA" />
        
       
      </Tabs>
      <TabPanel value={value} index={0}>
        <TPagareFinaval />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TPagare/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TPledgeGeneration/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TCompraventa/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TcertificateOfDelivery/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TinvoiceConfirmation/>
      </TabPanel>
      
    </Box>
  );
}
