import { useEffect } from 'react';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ImageIcon from '@mui/icons-material/Image';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

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

  return (
    <List sx={{ width: '100%' }}>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary="Jan 9, 2014" />
          <Rating max={10} value={item.rate} />
        </ListItem>
      ))}
    </List>
  );
};

export default Skills;
