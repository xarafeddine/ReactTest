import { ViolationsTableData } from "@/types/apiTypes";
import ViolationsTableBody from "./ViolationsTableBody";
import ViolationsTableHeader from "./ViolationsTableHeader";

export default function ViolationsTable({
  tableData,
}: {
  tableData: ViolationsTableData[];
}) {
  return (
    <div className="overflow-x-auto w-full">
      <div className="overflow-y-auto h-64 w-full">
        <table className="min-w-full bg-white border-collapse border rounded-md border-grayBorder">
          <ViolationsTableHeader />
          <ViolationsTableBody data={tableData} />
        </table>
      </div>
    </div>
  );
}
