import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/types';
import { fetchSkills } from '../../store/skills/actions';

type Props = {
  categoryId: number;
};

const Skills = ({ categoryId }: Props) => {
  const { isLoading, data } = useSelector((state: RootState) => state.skills);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills(categoryId));
  }, [categoryId]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default Skills;
