import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@shared/ui/mui';

import { useCategory } from '@entities/category';

type Props = { id: string };

const DeleteCategoryModal = ({ id }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { deleteCategory } = useCategory();

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
      <Modal title="Подтверждение операции" open={open} onClose={handleClose}>
        <Typography sx={{ mb: 5 }}>Вы уверены что хотите удалить данную категорию?</Typography>
        <Button variant="contained" color="error" sx={{ mr: 3 }} onClick={handleDelete}>
          Подтвердить
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Отмена
        </Button>
      </Modal>
    </>
  );
};

export default DeleteCategoryModal;
