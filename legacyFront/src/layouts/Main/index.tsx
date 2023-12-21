import { ComponentProps } from "react";

import { Profile } from "src/store/profile/types";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

type Props = ComponentProps<typeof Drawer> & { profile: Profile };

const MainLayout = ({ children, profile }: Props) => (
  <>
    <Header login={profile.login} />
    <Drawer>{children}</Drawer>
  </>
);

export default MainLayout;
