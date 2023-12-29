import { ReactNode } from 'react';
import { Modal as MuiModal, Box, Typography, Divider } from '@mui/material';

type Props = { title: string; open: boolean; children: ReactNode; onClose: () => void };

const Modal = ({ title, open, children, onClose }: Props) => (
  <MuiModal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '4px',
      }}
    >
      <Typography variant="h6" sx={{ p: 3 }}>
        {title}
      </Typography>
      <Divider />
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  </MuiModal>
);

export default Modal;
