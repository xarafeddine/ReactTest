import { ReactElement, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { isDesktop, isMobile } from "@/utils";

const MainLayout = ({ children }: { children: ReactElement }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleSidebar() {
    open();
    isDesktop(width) && setIsSidebarOpen((prev) => !prev);
  }

  const [opened, { open, close }] = useDisclosure(false);

  const { width } = useViewportSize();

  useEffect(() => {
    if (!isDesktop(width)) {
      setIsSidebarOpen(false);
    }
  }, [width]);

  return (
    <div className="flex flex-row">
      {!isDesktop(width) && (
        <Drawer size={270} opened={opened} onClose={close}>
          <Sidebar
            isDesktop={isDesktop(width)}
            isSidebarOpen={true}
            toggleSidebar={toggleSidebar}
          />
        </Drawer>
      )}
      {!isMobile(width) && (
        <div style={{ width: isSidebarOpen ? "17%" : "5%" }}>
          <Sidebar
            isDesktop={isDesktop(width)}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      )}
      <div
        className="flex flex-col"
        style={{
          width: isMobile(width) ? "100%" : isSidebarOpen ? "83%" : "95%",
        }}
      >
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
