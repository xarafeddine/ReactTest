import { getViolationDetails } from "@/api/getViolations";
import { Violation } from "@/types/apiTypes";
import { useEffect, useState } from "react";
import clockIcon from "@/assets/icons/clock.svg";

export default function ViolationDropdown({
  numberOfViolations,
}: {
  numberOfViolations: number;
}) {
  const [data, setData] = useState<Violation[] | null>(null);
  useEffect(() => {
    getViolationDetails(numberOfViolations).then((data) => {
      console.log(data);
      setData(data);
    });
  }, [numberOfViolations]);

  return (
    <div className="divide-y-2 max-h-[35rem] overflow-auto">
      {data !== null &&
        data.map((violation, idx) => {
          return (
            <div
              key={`${idx}_${violation.id}`}
              className="flex flex-col gap-3 py-4"
            >
              <img
                className="rounded-lg"
                src={violation.image}
                alt={violation.image}
              />
              <div className="flex flex-row justify-between items-center">
                <p className="text-grayFontLight">Comment</p>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <img className="min-w-4 pb-1" src={clockIcon} alt={clockIcon} />

                  <div className="text-grayFont">
                    {violation.date.toLocaleDateString()}
                  </div>
                  <div className="text-grayFont">
                    {violation.date.getHours()}:{violation.date.getMinutes()}
                  </div>
                  <div>#{violation.id}</div>
                </div>
              </div>
              <div className="border border-grayBorder rounded-md bg-grayBg p-2">
                {violation.comment}
              </div>
            </div>
          );
        })}
    </div>
  );
}
