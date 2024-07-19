import { getViolationsTableData } from "@/api/getViolations";
import ViolationsTable from "@/components/violations/ViolationsTable";
import { ViolationsTableData } from "@/types/apiTypes";
import { Input, Loader } from "@mantine/core";
import { useState, useEffect } from "react";
import searchIcon from "@/assets/icons/searchIcon.svg";
import DateRangeInput from "@/components/ui/DateRangeInput";
import { isDateBetween } from "@/utils";

export default function Violations() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ViolationsTableData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const sites = ["All", "Site 1", "Site 2", "Site 3", "Site 4"];
  const [site, setSite] = useState(0);
  const [selctedContractor, setSelectedContractor] =
    useState("All Contractors");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  useEffect(() => {
    setIsLoading(true);
    getViolationsTableData()
      .then((data) => setTableData(data))
      .finally(() => setIsLoading(false));
  }, []);

  const filtredTableData =
    tableData?.filter((row) => {
      const searchFilter = row.worker.fullName.includes(search);
      const siteFilter = row.site === site;
      const roleFilter = row.worker.role === selctedContractor;
      const dateFilter = isDateBetween(row.date, ...dateRange);
      let conditions: boolean = searchFilter && dateFilter;
      if (selctedContractor !== "All Contractors")
        conditions = conditions && roleFilter;
      if (site) conditions = conditions && siteFilter;

      return conditions;
    }) || [];

  return (
    <div className="flex flex-col">
      <div className="border border-grayBorder text-[13px]">
        <div className="flex flex-row text-grayFontLight">
          <div className="bg-grayBgLight px-4 py-1">SITES</div>
          {sites.map((item, idx) => (
            <span
              key={idx}
              className={`cursor-pointer w-16 text-center py-1 hover:bg-blue-50 ${
                idx === site ? "text-blueLight" : ""
              }`}
              onClick={() => setSite(idx)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-grayBgLight p-5 space-y-4 w-full h-full">
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
            <DateRangeInput applyDateRange={setDateRange} />
            <select
              className="p-2 bg-white border border-grayBorder text-sm rounded-md w-40 gap-3"
              value={selctedContractor}
              onChange={(e) => setSelectedContractor(e.target.value)}
            >
              <option>All Contractors</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-[28rem]">
            <Loader color="blue" className="m-auto" />
          </div>
        ) : tableData ? (
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
