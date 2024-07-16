const Table = ({
  data,
}: {
  data: {
    Name: string;
    Age: number;
    Occupation: string;
  }[];
}) => {
  return (
      <table className="bg-white table-auto border-collapse border rounded-md border-gray-400">
        <thead>
          <tr className="border border-gray-400">
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 border border-gray-400">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border border-gray-400">
              {Object.values(row).map((value, idx) => (
                <td key={idx} className="text-center px-4 py-2 border border-gray-400">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;
