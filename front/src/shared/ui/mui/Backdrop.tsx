import CircularProgress from '@mui/material/CircularProgress';
import MuiBackdrop, { BackdropProps } from '@mui/material/Backdrop';

const Backdrop = (props: BackdropProps) => (
  <MuiBackdrop {...props} style={{ opacity: 0.6 }} sx={{ position: 'absolute', backgroundColor: 'white' }}>
    <CircularProgress />
  </MuiBackdrop>
);

export default Backdrop;
