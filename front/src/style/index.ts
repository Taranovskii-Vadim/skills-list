import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: { mode },
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            marginBottom: '16px',
            ':last-child': { marginBottom: 0 },
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          },
        },
      },
      MuiRating: { defaultProps: { precision: 0.5 } },
      MuiAppBar: { styleOverrides: { root: { padding: 0 } } },
      MuiPaper: { styleOverrides: { root: { padding: '16px 24px' } } },
    },
  });
};

export default getTheme;
