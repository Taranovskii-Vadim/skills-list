import { ComponentProps } from 'react';

import Drawer from './components/Drawer';

type Props = ComponentProps<typeof Drawer>;

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Drawer>{children}</Drawer>
    </>
  );
};

export default MainLayout;
