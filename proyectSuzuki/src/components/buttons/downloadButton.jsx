// import React from 'react';
// import { Button } from '@mui/joy';

// export default function DownloadButton() {
  // const handleDownload = () => {
    // Usa fetch para obtener el archivo
  //   fetch('components/downloadDocuments/documentPagare.pdf')
  //     .then((response) => {
  //       // Crea un blob con los datos del archivo
  //       response.blob().then((blob) => {
  //         // Crea un objeto URL para el blob
  //         const url = window.URL.createObjectURL(blob);
  //         // Crea un enlace para descargar el archivo
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.download = 'documentPagare.pdf';
  //         // Agrega el enlace al documento y simula un clic
  //         document.body.appendChild(link);
  //         link.click();
  //         // Limpia el objeto URL
  //         document.body.removeChild(link);
  //         window.URL.revokeObjectURL(url);
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error al descargar el archivo:', error);
  //     });
  // };

  // return (
  //   <Button variant="outlined" color="primary" onClick={handleDownload}>
  //     Descargar documento
  //   </Button>
  // );
// }


// }
// este


import React from 'react';
import { Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

class PrintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  

  

  
}

export default PrintButton;

