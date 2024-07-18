import { Button, Input, Popover } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";

export default function DateRangeInput() {
  const [option, setOption] = useState("custom");
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

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setOption(value);
    const endDate = new Date();
    const startDate = new Date();

    switch (value) {
      case "past_week":
        startDate.setDate(endDate.getDate() - 7);
        break;
      case "past_month":
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case "past_year":
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        break;
    }

    setDateRange([startDate, endDate]);
  };

  return (
    <>
      <Popover position="right" withArrow shadow="md">
        <Popover.Target>
          <Input
            placeholder="Enter a date"
            size="sm"
            radius={"sm"}
            w="200px"
            value={dateStr}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <div className="flex flex-col gap-y-4 p-3">
            {/* <Select
              label="Date range"
              placeholder="Pick value"
              data={["Custom", "Past week", "Past month", "Past year"]}
              defaultValue={"Custom"}
              w={"130px"}
              classNames={{ label: "text-grayFont text-lg" }}
              value={option}
              onChange={(opt) => opt && setOption(opt)}
            /> */}

            <h1 className="text-grayFont text-lg">Date range</h1>

            <select
              className="p-2 bg-white border border-grayBorder rounded-sm w-32 gap-3"
              defaultValue={"custom"}
              value={option}
              onChange={handleSelectionChange}
            >
              <option value="custom">Custom</option>
              <option value="past_week">Past Week</option>
              <option value="past_month">Past Month</option>
              <option value="past_year">Past Year</option>
            </select>
            {option === "custom" && (
              <DatePicker
                type="range"
                value={dateRange}
                onChange={setDateRange}
              />
            )}

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
