import { Checkbox, Popover } from "@mantine/core";
import gearIcon from "@/assets/icons/gear.svg";

import { ColumnsObj } from "@/types/constants";

export default function ColumnsHandler({
  columns,
  setColumns,
}: {
  columns: string[];
  setColumns: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <Popover position="right" withArrow shadow="md">
      <Popover.Target>
        <img className="min-w-4 m-auto" src={gearIcon} alt="" />
      </Popover.Target>
      <Popover.Dropdown className="rounded-sm">
        <Checkbox.Group
          value={columns}
          onChange={(keys) => keys.length > 0 && setColumns(keys)}
        >
          <div className="flex flex-col gap-y-2 p-1">
            <h1 className="text-grayFont">Select columns to display</h1>
            {Object.entries(ColumnsObj).map(([key, value]) => (
              <Checkbox key={key} radius={"sm"} value={key} label={value} />
            ))}
          </div>
        </Checkbox.Group>
      </Popover.Dropdown>
    </Popover>
  );
}
