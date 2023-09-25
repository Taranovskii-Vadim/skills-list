import { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { Dispatch, RootState } from '../../store/types';
import { fetchCategories } from '../../store/categories/actions';

import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Skills from '../../components/Skills';

const Main = () => {
  const dispatch = useDispatch<Dispatch>();
  const { isLoading, data } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={3} sx={{ m: 0, width: '100%', pr: 3 }}>
        <Grid item xs={8} sx={{ pt: 0 }}>
          {!isLoading ? (
            <Tabs items={data.map(({ id, title }) => ({ label: title, node: <Skills categoryId={id} /> }))} />
          ) : (
            <div>loading...</div>
          )}
        </Grid>
        <Grid item xs={4} sx={{ pt: 0 }}>
          <Paper>block for skills charts 1</Paper>
          <Paper sx={{ mt: 3 }}>block for skills charts 2</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
