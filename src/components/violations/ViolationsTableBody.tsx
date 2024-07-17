import { ViolationsTableData } from "@/types/apiTypes";
import Circle from "../ui/Circle";

export default function ViolationsTableBody({
  data,
}: {
  data: ViolationsTableData[];
}) {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="border border-grayBorder">
          <td className="text-grayFontLight text-sm text-center px-4 py-2 border border-grayBorder">
            {index}
          </td>
          <td className="text-center px-4 py-2 border border-grayBorder">
            <div className="flex flex-row justify-between items-center min-w-56">
              <div className="flex flex-row items-center gap-3">
                <img src={row.worker.avatar} alt={row.worker.avatar} />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-grayFont text-[15px]">
                    {row.worker.fullName}
                  </p>
                  <p className="text-grayFontLight text-sm">
                    {row.worker.role}
                  </p>
                </div>
              </div>
              <div>
                <img src={row.worker.companyImg} alt={row.worker.companyImg} />
              </div>
            </div>
          </td>
          {Object.values(row.violations).map((value, idx) => (
            <td key={idx} className="text-center px-4 py-2">
              {value === 0 ? <>-</> : <Circle num={value} />}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
