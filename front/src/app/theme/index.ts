import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: { mode },
    components: {
      MuiStack: { styleOverrides: { root: { flexDirection: 'row', alignItems: 'center' } } },
      MuiFormHelperText: { styleOverrides: { root: { margin: 0, position: 'absolute', bottom: '-20px' } } },
    },
  });
};

export default getTheme;
