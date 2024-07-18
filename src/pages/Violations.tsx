import { getViolationsTableData } from "@/api/getViolations";
import ViolationsTable from "@/components/violations/ViolationsTable";
import { ViolationsTableData } from "@/types/apiTypes";
import { Input } from "@mantine/core";
import { useState, useEffect } from "react";
import searchIcon from "@/assets/icons/searchIcon.svg";
import DateRangeInput from "@/components/ui/DateRangeInput";

export default function Violations() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ViolationsTableData[] | null>(
    null
  );

  const sites = ["All", "Site 1", "Site 2", "Site 3", "Site 4"];
  const [site, setSite] = useState("All");
  useEffect(() => {
    getViolationsTableData().then((data) => setTableData(data));
  }, []);

  const filtredTableData =
    tableData?.filter((row) => row.worker.fullName.includes(search)) || [];

  return (
    <div className="flex flex-col">
      <div className="border border-grayBorder text-[13px]">
        <div className="flex flex-row text-grayFontLight">
          <div className="bg-grayBgLight px-4 py-2">SITES</div>
          {sites.map((item) => (
            <span
              className={`cursor-pointer w-16 text-center py-2 hover:bg-blue-50 ${
                item === site ? "text-blueLight" : ""
              }`}
              onClick={() => setSite(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-grayBgLight p-6 space-y-4 w-full h-full">
        <div className="flex flex-row justify-between items-center">
          <h1>P.P.E Violations Table</h1>
          <div className="flex flex-row items-center gap-3">
            <Input
              placeholder="Search workers ..."
              w={"250px"}
              leftSection={<img src={searchIcon} />}
              size="sm"
              radius={"sm"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <DateRangeInput />
            {/* <Select
            placeholder="All contractors"
            data={["contractor1", "contractor2"]}
            defaultValue={"contractor1"}
            size="sm"
            radius={"sm"}
            classNames={{ input: "w-36" }}
          /> */}
            <select
              className="p-2 bg-white border border-grayBorder text-sm rounded-md w-40 gap-3"
              defaultValue={"contractor 1"}
            >
              <option value="contractor1">contractor 1</option>
              <option value="contractor2">contractor 2</option>
              <option value="contractor3">contractor 3</option>
            </select>
          </div>
        </div>
        {tableData ? (
          <ViolationsTable tableData={filtredTableData} />
        ) : (
          <div className="flex justify-center items-center">
            NO DATA TO SHOW
          </div>
        )}
      </div>
    </div>
  );
}
