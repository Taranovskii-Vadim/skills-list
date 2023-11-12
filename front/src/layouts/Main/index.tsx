import { ComponentProps } from 'react';

import Header from './components/Header';
import Drawer from './components/Drawer';

type Props = ComponentProps<typeof Drawer>;

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    <Drawer>{children}</Drawer>
  </>
);

export default MainLayout;
