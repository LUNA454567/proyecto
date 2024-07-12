// import BoxSystemProps from './components/cards/cardIndex';

// import BoxSystemProps2 from './components/cards/cardGenerateFormats';
import FormatGenerationCredits from './views/viewGenerationCredits';
// import FormatGenerationDocuments from './components/forms/formatGenerationDocuments';
import { Route, Routes } from 'react-router-dom';
import viewGenerateFormats from './views/viewGenerateFormats';
import viewGenerationCredits from './views/viewGenerationCredits';
import viewReplaceFormConstanceUpToday from './views/viewReplaceFormConstanceUpToday';
import viewReplaceFormCreditStatement from './views/viewReplaceFormCreditStatement';
import viewReplaceFormChangeDate from './views/viewReplaceFormChangeDate';
import viewReplaceFormConstanceFinaval from './views/viewReplaceFormConstanceFinaval';

// import DownloadButton from './components/buttons/downloadButton';
import PrintButton from './components/buttons/downloadButton';
import TPagareFinaval from './components/textos/tPagareFinaval';
import { ContextProvider } from './context/context';
 
export const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          {/* RUTAS SIN PROTECCIÓN */}
          <Route path="/" element={<FormatGenerationCredits />}></Route>
          {/* se debe añadir el id para que funcione y lo tenga anclado */}
          <Route path="/viewGenerateFormats/:id" Component={viewGenerateFormats} />
          <Route
            path="/viewGenerationCredits"
            Component={viewGenerationCredits}
          />
          <Route
            path="/viewReplaceFormConstanceUpToday"
            Component={viewReplaceFormConstanceUpToday}
          />
          <Route
            path="/viewReplaceFormCreditStatement"
            Component={viewReplaceFormCreditStatement}
          />
          <Route
            path="/viewReplaceFormChangeDate"
            Component={viewReplaceFormChangeDate}
          />
          <Route
            path="/viewReplaceFormConstanceFinaval"
            Component={viewReplaceFormConstanceFinaval}
          />
          <Route path="/DownloadButton" Component={PrintButton} />
          <Route path="/tPagareFinaval" Component={TPagareFinaval} />
        </Routes>
      </ContextProvider>
    </>
  );
};
