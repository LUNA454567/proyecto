import NavigationBar from '../nav/navigationBar';
import ButtonsSection from '../buttons/buttons';
import FormatGeneration from '../forms/formatGenerationCredits';

import FormatGenerationDocuments from '../forms/formatGenerationDocuments';
import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';

export default function CenteredBox() {
  return (
    <>
      <Grid container spacing={0}>
        {/* NAVBAR */}
        <Grid item xs={12}>
          <NavigationBar />
        </Grid>
        {/* HEADER INFO */}
        <Grid item xs={12}>
          {/* <FormatGeneration /> */}
        </Grid>
        {/* BUTTONS */}
        <Grid item xs={12}>
          {/* <ButtonsSection /> */}
        </Grid>
        {/* FORMULARIO */}
        <Grid item xs={12}>
          {/* AQUI VA EL FORMULARIO */}
        </Grid>
      </Grid>

      {/* <Link to="pledge-generation">
        Haz clic para ver la página sobre nosotros
      </Link> */}
    </>
  );
}
