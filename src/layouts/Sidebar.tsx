import ppeFullLogo from "@/assets/images/ppeFullLogo.svg";
import ppeLogo from "@/assets/images/ppeLogo.svg";
import burgerIcon from "@/assets/icons/burger.svg";

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  const logo = isSidebarOpen ? ppeFullLogo : ppeLogo;
  return (
    <div className="flex shrink-0 flex-col h-screen border gap-y-5 border-grayBorder py-5 px-2">
      <div className="flex flex-row justify-around items-center">
        <img src={logo} alt="ppe logo" />
        {isSidebarOpen && (
          <img
            className="cursor-pointer"
            onClick={toggleSidebar}
            src={burgerIcon}
            alt="burger icon"
          />
        )}
      </div>
      <div>khkjhjh</div>
    </div>
  );
}
