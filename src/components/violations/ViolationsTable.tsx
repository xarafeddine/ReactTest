import { ViolationsTableData } from "@/types/apiTypes";
import ViolationsTableBody from "./ViolationsTableBody";
import ViolationsTableHeader from "./ViolationsTableHeader";
import { useState } from "react";

import { ColumnsObj } from "@/types/constants";

const initColumns = Object.keys(ColumnsObj);
export default function ViolationsTable({
  tableData,
}: {
  tableData: ViolationsTableData[];
}) {
  const [columns, setColumns] = useState<string[]>(initColumns);
  const bodyData = tableData.map((row) => {
    const violations = columns.reduce((accu, curr) => {
      accu[curr] = row.violations[curr];
      return accu;
    }, {} as Record<string, number>);
    return { worker: row.worker, violations };
  });
  return (
    <div className="overflow-x-auto w-full">
      <div className="overflow-y-auto h-[28rem] w-full">
        <table className="min-w-full bg-white border-collapse border rounded-md border-grayBorder">
          <ViolationsTableHeader columns={columns} setColumns={setColumns} />
          <ViolationsTableBody data={bodyData} />
        </table>
      </div>
    </div>
  );
}
