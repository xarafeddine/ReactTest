import ppeFullLogo from "@/assets/images/ppeFullLogo.svg";
import ppeLogo from "@/assets/images/ppeLogo.svg";
import burgerIcon from "@/assets/icons/burger.svg";
import { MENU } from "@/types/constants";

import SidebarItem from "@/components/ui/SidebarItem";

export default function Sidebar({
  isDesktop,
  isSidebarOpen,
  toggleSidebar,
}: {
  isDesktop: boolean;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  const logo = isSidebarOpen ? ppeFullLogo : ppeLogo;
  return (
    <div
      className={`flex shrink-0 flex-col h-screen gap-y-5 py-5 ${
        isDesktop ? "border border-grayBorder" : ""
      }`}
    >
      <div className="flex flex-row justify-around gap-x-3 items-center px-5">
        <img
          style={{ width: isSidebarOpen ? "" : "5rem", minWidth: "2rem" }}
          src={logo}
          alt="ppe logo"
        />
        {isDesktop && isSidebarOpen && (
          <img
            className="cursor-pointer"
            onClick={toggleSidebar}
            src={burgerIcon}
            alt="burger icon"
          />
        )}
      </div>

      {MENU.map((group) => (
        <div
          key={group.title}
          className={`flex flex-col text-sm font-medium ${
            isSidebarOpen ? "items-start px-4" : "items-center"
          }`}
        >
          {isSidebarOpen ? (
            <div className="my-2 text-grayFontLight">{group.title}</div>
          ) : (
            group.title && <div className="bg-grayBorder h-[1px] w-full"></div>
          )}

          {group.items.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
