import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../../layout/Layout";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <MainLayout>
      {children}
      <Outlet />
    </MainLayout>
  );
}

export default Layout;
