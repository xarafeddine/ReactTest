import { Popover } from "@mantine/core";
import ViolationDropdown from "../violations/ViolationDropdown";

export default function Circle({ num }: { num: number }) {
  const bg_color = num < 5 ? "#F8CC23" : num < 9 ? "orange" : "#EF3C3C";
  const font_color = num < 5 ? "#000000" : "#FFFFFF";

  return (
    <>
      <Popover width={450} position="right" withArrow shadow="md">
        <Popover.Target>
          <div
            style={{ backgroundColor: bg_color, color: font_color }}
            className="m-auto w-9 h-9 flex justify-center items-center pt-1 rounded-full"
          >
            {num}
          </div>
        </Popover.Target>
        <Popover.Dropdown py={0}>
          <ViolationDropdown numberOfViolations={num} />
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
