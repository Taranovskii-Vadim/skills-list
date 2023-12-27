import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';

import { useViewCategory } from '@entities/category';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '4px',
};

// TODO can take in store with get and dont pass it from page
type Props = { id: string };

const DeleteCategoryModal = ({ id }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { deleteCategory } = useViewCategory();

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    handleClose();
    deleteCategory(id, () => navigate('/categories'));
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        Удалить
      </Button>
      {/* TODO move to shared or somewhere else... */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ p: 3 }}>
            Подтверждение операции
          </Typography>
          <Divider />
          <Typography sx={{ p: 3 }}>Вы уверены что хотите удалить данную категорию?</Typography>
          <Divider />
          <Box sx={{ p: 3 }}>
            <Button variant="contained" color="error" sx={{ mr: 3 }} onClick={handleDelete}>
              Подтвердить
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Отмена
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteCategoryModal;
