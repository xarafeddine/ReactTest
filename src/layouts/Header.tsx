import burgerIcon from "@/assets/icons/burger.svg";
import BellIcon from "@/components/icons/BellIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import TextScalingIcon from "@/components/icons/TextScalingIcon";
import LanguagesDropdown from "@/components/ui/LanguagesDropdown";
import ProfileDropdown from "@/components/ui/ProfileDropdown";

export default function Header({
  isSidebarOpen,
  toggleSidebar,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div className="flex flex-row items-center gap-4">
        {!isSidebarOpen && (
          <img
            className="cursor-pointer"
            onClick={toggleSidebar}
            src={burgerIcon}
            alt="burger icon"
          />
        )}
        <h1 className="test-xl">Overview</h1>
      </div>

      <div className="flex flex-row items-center gap-6">
        <TextScalingIcon />
        <MoonIcon />
        <BellIcon />
        <LanguagesDropdown />
        <ProfileDropdown />
      </div>
    </div>
  );
}
