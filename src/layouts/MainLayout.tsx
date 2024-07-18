import { ReactElement, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: ReactElement }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }
  return (
    <div className="flex flex-row">
      <div style={{ width: isSidebarOpen ? "16%" : "6%" }}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div
        className="flex flex-col"
        style={{ width: isSidebarOpen ? "calc(84%" : "94%" }}
      >
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
