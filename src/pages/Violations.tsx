import { getViolationsTableData } from "@/api/getViolations";
import ViolationsTable from "@/components/violations/ViolationsTable";
import { ViolationsTableData } from "@/types/apiTypes";
import { Input, Loader } from "@mantine/core";
import { useState, useEffect } from "react";
import searchIcon from "@/assets/icons/searchIcon.svg";
import DateRangeInput from "@/components/ui/DateRangeInput";
import { isDateBetween } from "@/utils";
import MaxViewIcon from "@/components/icons/MaxViewIcon";
import SitesControler from "@/components/ui/SitesControler";

export default function Violations() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ViolationsTableData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="flex flex-col h-full">
      <SitesControler site={site} setSite={setSite} />
      <div className="p-5 space-y-4 w-full h-full">
        <div className="flex flex-row justify-between items-center">
          <h1>P.P.E Violations Table</h1>
          <div className="flex flex-col items-end md:flex-row md:items-center gap-2">
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
            <div className="flex flex-row items-center gap-2">
              <select
                className="p-2 bg-white border border-grayBorder text-sm rounded-md w-40 gap-3"
                value={selctedContractor}
                onChange={(e) => setSelectedContractor(e.target.value)}
              >
                <option>All Contractors</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>

              <MaxViewIcon />
            </div>
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
