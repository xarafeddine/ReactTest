import { ReactElement } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};
export default MainLayout;
