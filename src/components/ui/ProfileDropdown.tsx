import { Popover } from "@mantine/core";
import companyLogo from "@/assets/images/companyLogo.svg";
import arrowDownIcon from "@/assets/icons/arrowDown.svg";

export default function ProfileDropdown() {
  return (
    <Popover position="left" withArrow shadow="md">
      <Popover.Target>
        <div className="flex flex-row items-center gap-3">
          <img src={companyLogo} alt={companyLogo} />
          <h1 className="text-grayFont">BESIX Group</h1>
          <img src={arrowDownIcon} alt={arrowDownIcon} />
        </div>
      </Popover.Target>
      <Popover.Dropdown p={3} className="rounded-sm"></Popover.Dropdown>
    </Popover>
  );
}
