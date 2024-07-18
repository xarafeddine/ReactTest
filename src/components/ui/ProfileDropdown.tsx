import { Popover } from "@mantine/core";
import companyLogo from "@/assets/images/companyLogo.svg";
import arrowDownIcon from "@/assets/icons/arrowDown.svg";
import SettingsIcon from "../icons/SettingsIcon";
import PoliciesIcon from "../icons/PoliciesIcon";
import LogoutIcon from "../icons/LogoutIcon";

export default function ProfileDropdown() {
  return (
    <Popover position="left" withArrow shadow="md">
      <Popover.Target>
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <img src={companyLogo} alt={companyLogo} />
          <h1 className="text-grayFont">BESIX Group</h1>
          <img src={arrowDownIcon} alt={arrowDownIcon} />
        </div>
      </Popover.Target>
      <Popover.Dropdown p={0} className="rounded-md">
        <div className="flex flex-col divide-y divide-grayBorder">
          <div className="flex flex-col gap-2 p-4">
            <h1 className="text-black font-semibold">BESIX Group</h1>
            <h1 className="text-grayFontLight">besix.group@besix.be</h1>
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row items-center gap-3 px-3 py-2 hover:bg-grayBgLight cursor-pointer">
              <SettingsIcon  />
              <h1 className="text-black pt-1">Profile settings</h1>
            </div>
            <div className="flex flex-row items-center gap-3 px-3 py-2 hover:bg-grayBgLight cursor-pointer">
              <PoliciesIcon />
              <h1 className="text-black pt-1">Our Policies</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row items-center gap-3 px-3 py-2 hover:bg-grayBgLight cursor-pointer">
              <LogoutIcon />
              <h1 className="text-black pt-1">Log out</h1>
            </div>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
