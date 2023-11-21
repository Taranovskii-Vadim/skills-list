import grey from '@mui/material/colors/grey';
import zIndex from '@mui/material/styles/zIndex';
import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: { mode, background: { default: grey[100] } },

    components: {
      MuiBackdrop: {
        defaultProps: {
          // TODO opacity change color also for loader
          style: { opacity: 0.6 },
        },
        styleOverrides: {
          root: {
            position: 'absolute',
            zIndex: zIndex.drawer + 1,
            // TODO change color for dark theme later
            backgroundColor: mode === 'dark' ? 'white' : 'white',
          },
        },
      },
      MuiFormHelperText: { styleOverrides: { root: { margin: 0, position: 'absolute', left: 0, bottom: '-20px' } } },
    },

    // components: {
    //   MuiListItem: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: '8px',
    //         marginBottom: '16px',
    //         ':last-child': { marginBottom: 0 },
    //         boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    //       },
    //     },
    //   },
    //   MuiFormHelperText: { styleOverrides: { root: { margin: 0, position: 'absolute', left: 0, top: 40 } } },
    //   MuiRating: { defaultProps: { precision: 0.5 } },
    //   MuiAppBar: { styleOverrides: { root: { padding: 0 } } },
    //
    // },
  });
};

export default getTheme;
