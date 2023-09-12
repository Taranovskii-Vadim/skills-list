import { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const settings = ['Logout'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', minHeight: '58px', px: 3 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          keepMounted
          sx={{ mt: 5 }}
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </AppBar>
  );
};

export default Header;
