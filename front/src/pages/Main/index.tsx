import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { Dispatch, RootState } from 'src/store/types';
import { fetchCategories } from 'src/store/categories/actions';

import Tabs from 'src/components/Tabs';
import Skills from 'src/components/Skills';

const Main = () => {
  const dispatch = useDispatch<Dispatch>();
  const { isLoading, data } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Grid container spacing={3} sx={{ m: 0, width: '100%', pr: 3 }}>
      <Grid item xs={12} sx={{ pt: 0 }}>
        {!isLoading ? (
          <Tabs items={data.map(({ id, title }) => ({ label: title, node: <Skills categoryId={id} /> }))} />
        ) : (
          <div>loading...</div>
        )}
      </Grid>
    </Grid>
  );
};

export default Main;
