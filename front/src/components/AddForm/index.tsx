import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Box, Typography, Divider, TextField, Button, Fab } from '@mui/material';

const AddForm = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            top: '50%',
            width: 600,
            left: '50%',
            boxShadow: 24,
            borderRadius: '8px',
            position: 'absolute',
            bgcolor: 'background.paper',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="h6" sx={{ p: 3 }}>
            Добавление нового навыка
          </Typography>
          <Divider />
          <Box sx={{ p: 3 }}>
            <TextField fullWidth size="small" placeholder="Наименование" sx={{ mb: 3 }} />
            <Button variant="contained" sx={{ mr: 3 }}>
              Создать
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Отменить
            </Button>
          </Box>
        </Box>
      </Modal>
      <Fab color="primary" onClick={() => setOpen(true)} sx={{ position: 'absolute', right: 24, bottom: 24 }}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddForm;
