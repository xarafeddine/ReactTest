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
    <div className="flex flex-row items-center justify-between py-3 px-5">
      <div className="flex flex-row items-center gap-4">
        {!isSidebarOpen && (
          <img
            className="cursor-pointer pb-1"
            onClick={toggleSidebar}
            src={burgerIcon}
            alt="burger icon"
          />
        )}
        <h1 className="test-width={'5rem'}xl">Overview</h1>
      </div>

      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-col gap-y-1 sm:flex-row items-center gap-x-5">
          <TextScalingIcon className="cursor-pointer w-8 h-8" />
          <MoonIcon className="my-[3px] cursor-pointer w-5 h-5" />
          <BellIcon className="my-[3px] cursor-pointer w-5 h-5" />
        </div>
        <LanguagesDropdown />
        <ProfileDropdown />
      </div>
    </div>
  );
}
