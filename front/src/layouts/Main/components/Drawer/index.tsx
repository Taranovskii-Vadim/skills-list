import { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { getLinks } from 'src/routes';
import { NavLink } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  justifyContent: 'space-between',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  justifyContent: 'space-between',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexShrink: 0,
  width: drawerWidth,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

type Props = { children: ReactNode };

const Drawer = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledDrawer variant="permanent" open={open}>
        <List sx={{ pt: '80px' }}>
          {getLinks().map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <NavLink to={item.to} style={{ textDecoration: 'none', color: 'initial' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <DrawerFooter>
          <IconButton onClick={handleDrawerToggle}>{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
        </DrawerFooter>
      </StyledDrawer>
      <Box component="main" sx={{ flexGrow: 1, px: 3, py: '80px' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Drawer;
