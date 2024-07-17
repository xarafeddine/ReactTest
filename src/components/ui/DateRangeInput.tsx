import { Button, Input, Popover, Select } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";

export default function DateRangeInput() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [dateStr, setDateStr] = useState("");

  function handleDateStr(dateRange: [Date | null, Date | null]) {
    const [date1, date2] = dateRange;
    const dateString =
      !date1 && !date2
        ? ""
        : `${date1?.toLocaleDateString() || ""} . ${
            date2?.toLocaleDateString() || ""
          }`;
    setDateStr(dateString);
  }
  return (
    <>
      <Popover position="right" withArrow shadow="md">
        <Popover.Target>
          <Input
            placeholder="Enter a date"
            size="sm"
            radius={"sm"}
            value={dateStr}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <div className="flex flex-col gap-y-4 p-3">
            <Select
              label="Date range"
              placeholder="Pick value"
              data={["Custom", "Auto"]}
              defaultValue={"Custom"}
              w={"130px"}
              classNames={{ label: "text-grayFont text-lg" }}
            />
            <DatePicker
              type="range"
              value={dateRange}
              onChange={setDateRange}
            />
            <div className="self-end flex flex-row items-center gap-x-3">
              <Button
                className="text-grayFont border-none bg-white hover:bg-red-500"
                onClick={() => {
                  setDateRange([null, null]);
                  handleDateStr([null, null]);
                }}
              >
                Cancel
              </Button>

              <Button
                className="bg-green-500 border-green-800 rounded-sm"
                onClick={() => handleDateStr(dateRange)}
              >
                Apply
              </Button>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
