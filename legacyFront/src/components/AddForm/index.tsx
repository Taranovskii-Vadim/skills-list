import { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Modal, Box, Typography, Divider, TextField, Button, Fab, styled } from '@mui/material';

import { createSkill } from 'src/store/skills/actions';

// TODO add react hook form later

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type Props = { id: number };

const AddForm = ({ id }: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setOpen(false);
    setFile(undefined);
  };

  const handleSetFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.files![0];
    if (!value.type.startsWith('image/')) return;

    setFile(value);
  };

  const handleSubmit = (): void => {
    if (nameRef.current) {
      dispatch(createSkill({ categoryId: id, name: nameRef.current.value, file }));

      handleClose();
    }
  };

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
            <TextField inputRef={nameRef} fullWidth size="small" placeholder="Наименование" sx={{ mb: 3 }} />
            {file ? (
              <Box sx={{ maxHeight: '270px', overflowY: 'auto', mb: 3 }}>
                <img src={URL.createObjectURL(file)} style={{ width: '100%', borderRadius: '4px' }} />
              </Box>
            ) : null}
            <Button variant="contained" sx={{ mr: 3 }} onClick={handleSubmit}>
              Создать
            </Button>
            <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} sx={{ mr: 3 }}>
              Загрузить изображение
              <VisuallyHiddenInput type="file" onChange={handleSetFile} />
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
