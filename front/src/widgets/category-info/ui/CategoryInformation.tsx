import { useEffect } from 'react';
import { Paper, Stack, Typography } from '@mui/material';

import { Backdrop } from '@shared/ui';

import { Category, useCategory } from '@entities/category';

type Key = keyof Category;

const LABELS: Record<Key, string> = {
  author: 'Автор',
  name: 'Наименование',
  description: 'Описание',
  createdAt: 'Дата создания',
  numberOfSkills: 'Количество навыков',
  updatedAt: 'Дата последнего обновления',
};

type Props = { id: string };

const CategoryInformation = ({ id }: Props) => {
  const { data, loading, fetchData } = useCategory();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <Paper sx={{ position: 'relative', p: 3 }}>
      <Backdrop open={loading} />
      {data ? (
        <>
          {Object.keys(data).map((key) => (
            // TODO move as sep component, markup does have depend on position in object
            // TODO also this is about S in SOLID
            <Stack key={key} direction="row" alignItems="center" sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
              <Typography sx={{ width: '280px' }}>{LABELS[key as Key]}:</Typography>
              <Typography>{data[key as Key]}</Typography>
            </Stack>
          ))}
        </>
      ) : null}
    </Paper>
  );
};

export default CategoryInformation;
