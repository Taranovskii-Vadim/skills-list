import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: { mode },
    components: { MuiStack: { styleOverrides: { root: { flexDirection: 'row', alignItems: 'center' } } } },
  });
};

export default getTheme;
