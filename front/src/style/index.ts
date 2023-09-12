import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: { mode },
    components: {
      MuiRating: { defaultProps: { precision: 0.5 } },
      MuiAppBar: { styleOverrides: { root: { padding: 0 } } },
      MuiPaper: { styleOverrides: { root: { padding: '16px 24px' } } },
    },
  });
};

export default getTheme;
