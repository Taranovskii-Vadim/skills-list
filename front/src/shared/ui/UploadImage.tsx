import { ChangeEvent } from 'react';
import { Box, Button, Stack, styled } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

type Props = { file: File | undefined; onSetFile: (e: ChangeEvent<HTMLInputElement>) => void };

const UploadImage = ({ file, onSetFile }: Props) => (
  <Stack alignItems="center">
    <Box sx={{ width: '150px', height: '150px', mr: 3 }}>
      {file ? <img src={URL.createObjectURL(file)} style={{ width: '100%', borderRadius: '4px' }} /> : null}
    </Box>
    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
      Загрузить изображение
      <VisuallyHiddenInput type="file" onChange={onSetFile} />
    </Button>
  </Stack>
);

export default UploadImage;
