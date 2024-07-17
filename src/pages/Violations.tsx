import { getViolationsTableData } from "@/api/getViolations";
import ViolationsTable from "@/components/violations/ViolationsTable";
import { ViolationsTableData } from "@/types/apiTypes";
import { Input, Select } from "@mantine/core";
import { useState, useEffect } from "react";
import searchIcon from "@/assets/icons/searchIcon.svg";
import DateRangeInput from "@/components/ui/DateRangeInput";

export default function Violations() {
  const [tableData, setTableData] = useState<ViolationsTableData[] | null>(
    null
  );

  useEffect(() => {
    getViolationsTableData().then((data) => setTableData(data));
  }, []);

  return (
    <div className="bg-grayBgLight p-6 space-y-4 w-full h-full">
      <div className="flex flex-row justify-between items-center">
        <h1>P.P.E Violations Table</h1>
        <div className="flex flex-row items-center gap-3">
          <Input
            placeholder="Search workers ..."
            w={"130px"}
            leftSection={<img src={searchIcon} />}
            size="sm"
            radius={"sm"}
            // w='300px'
          />
          <DateRangeInput />
          <Select
            placeholder="All contractors"
            data={["contractor1", "contractor2"]}
            defaultValue={"contractor1"}
            size="sm"
            radius={"sm"}
          />
        </div>
      </div>
      {tableData ? (
        <ViolationsTable tableData={tableData} />
      ) : (
        <div className="flex justify-center items-center">NO DATA TO SHOW</div>
      )}
    </div>
  );
}
