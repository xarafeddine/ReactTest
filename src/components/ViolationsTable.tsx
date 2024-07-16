import Table from "./reusable/Table";

export default function ViolationsTable() {
  const data = [
    { Name: "John Doe", Age: 28, Occupation: "Developer" },
    { Name: "Jane Smith", Age: 32, Occupation: "Designer" },
    { Name: "Sam Johnson", Age: 45, Occupation: "Manager" },
  ];
  return (
    <div className="bg-[#F2F2F2] p-5 space-y-4">
      <h1>P.P.E Violations Table</h1>
      <Table data={data} />
    </div>
  );
}
