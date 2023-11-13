import { ComponentProps } from 'react';

import { Profile } from 'src/store/profile/types';

import Header from './components/Header';
import Drawer from './components/Drawer';

type Props = Omit<ComponentProps<typeof Drawer>, 'role'> & { profile: Profile };

const MainLayout = ({ children, profile }: Props) => (
  <>
    <Header login={profile.login} />
    <Drawer role={profile.role}>{children}</Drawer>
  </>
);

export default MainLayout;
