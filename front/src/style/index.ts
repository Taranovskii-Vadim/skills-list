import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({ palette: { mode } });
};

export default getTheme;
