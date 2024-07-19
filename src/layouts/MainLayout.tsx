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
    <div className="bg-grayBgLight flex flex-row min-h-screen">
      {!isDesktop(width) && (
        <Drawer size={270} opened={opened} onClose={close}>
          <Sidebar
            isInDrawer
            isSidebarOpen={true}
            toggleSidebar={toggleSidebar}
          />
        </Drawer>
      )}
      {!isMobile(width) && (
        
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
      )}
      <div
        className="flex flex-col h-full w-full"
        style={{
          paddingLeft: isMobile(width)
            ? "0px"
            : isSidebarOpen
            ? "15rem"
            : "5rem",
        }}
      >
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
