import protective_gloves from "@/assets/protectivesImgs/image.svg";
import safety_glasses from "@/assets/protectivesImgs/image-1.svg";
import ear_protection from "@/assets/protectivesImgs/image-2.svg";
import mask_protection from "@/assets/protectivesImgs/image-3.svg";
import knee_pads from "@/assets/protectivesImgs/image-4.svg";
import safety_shoes from "@/assets/protectivesImgs/image-5.svg";
import coverall from "@/assets/protectivesImgs/image-6.svg";
import hi_vis_jacket from "@/assets/protectivesImgs/image-7.svg";
import safety_harness from "@/assets/protectivesImgs/image-8.svg";
import face_shield from "@/assets/protectivesImgs/image-9.svg";
import hard_hat from "@/assets/protectivesImgs/image-10.svg";
import welding_helmet from "@/assets/protectivesImgs/image-11.svg";
import ColumnsHandler from "../ui/ColumnsHandler";

const headerImgs: Record<string, string> = {
  protective_gloves,
  safety_glasses,
  ear_protection,
  mask_protection,
  knee_pads,
  safety_shoes,
  coverall,
  hi_vis_jacket,
  safety_harness,
  face_shield,
  hard_hat,
  welding_helmet,
};

export default function ViolationsTableHeader({
  columns,
  setColumns,
}: {
  columns: string[];
  setColumns: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <thead>
      <tr className="border border-grayBorder">
        <th className="px-4 py-2 border border-grayBorder">
          <ColumnsHandler columns={columns} setColumns={setColumns} />
        </th>
        <th className="text-grayFont px-4 py-2 border border-grayBorder">
          Workers
        </th>
        {columns.map((key) => (
          <th key={key} className="px-4 py-2">
            <img className="min-w-20 m-auto" src={headerImgs[key]} alt={key} />
          </th>
        ))}
      </tr>
    </thead>
  );
}
