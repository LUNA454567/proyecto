import NavigationBar from '../nav/navigationBar';
import ButtonsSection from '../buttons/buttons';
import Grid from '@mui/material/Grid';

export default function CardGenerateFormats() {
  return (
    <>
      <Grid container spacing={0}>
        {/* NAVBAR */}
        <Grid item xs={12}>
          {/* <NavigationBar /> */}
        </Grid>
        {/* HEADER INFO */}
        <Grid item xs={12}>
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
    </>
  );
}
