import { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

type Props = { login: string; onLogout: () => void };

const Header = ({ login, onLogout }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ maxHeight: '56px' }}>
      <Box sx={{ marginLeft: 'auto', py: 1, px: 3 }}>
        {/* TODO could be feature maybe */}
        <Tooltip title="Профиль">
          <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
            <Avatar alt={login} src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          keepMounted
          sx={{ mt: 5 }}
          anchorEl={anchorElUser}
          onClose={handleCloseMenu}
          open={Boolean(anchorElUser)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {/* TODO could be feature maybe*/}
          <MenuItem onClick={onLogout}>
            <Typography textAlign="center">Выйти</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
};

export default Header;
