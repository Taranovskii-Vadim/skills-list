import CircularProgress from '@mui/material/CircularProgress';
import MuiBackdrop, { BackdropProps } from '@mui/material/Backdrop';

const Backdrop = (props: BackdropProps) => (
  <MuiBackdrop {...props}>
    <CircularProgress />
  </MuiBackdrop>
);

export default Backdrop;
