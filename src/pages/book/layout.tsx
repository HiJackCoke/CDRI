import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
    </div>
  );
}

export default Layout;
