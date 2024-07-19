import avatar from "@/assets/images/avatar.svg";
import companyImg from "@/assets/images/companyImg.svg";
import worker1 from "@/assets/violationsImgs/worker_1.svg";
import worker2 from "@/assets/violationsImgs/worker_2.svg";
import { Violation, ViolationsTableData } from "@/types/apiTypes";

export function getViolationsTableData(): Promise<ViolationsTableData[]> {
  const data: ViolationsTableData[] = [
    {
      worker: {
        fullName: "Johne DABIOO",
        role: "Employee",
        avatar,
        companyImg,
      },
      site: 1,
      date: "21/04/2024",
      violations: {
        protective_gloves: 2,
        safety_glasses: 0,
        ear_protection: 0,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 1,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 3,
        hard_hat: 0,
        welding_helmet: 0,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      date: "12/04/2020",
      site: 4,
      violations: {
        protective_gloves: 3,
        safety_glasses: 2,
        ear_protection: 0,
        mask_protection: 0,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 4,
        hi_vis_jacket: 0,
        safety_harness: 3,
        face_shield: 0,
        hard_hat: 0,
        welding_helmet: 1,
      },
    },
    {
      worker: {
        fullName: "Johne DABIOO",
        role: "Employee",
        avatar,
        companyImg,
      },
      date: "12/04/2020",
      site: 1,
      violations: {
        protective_gloves: 1,
        safety_glasses: 0,
        ear_protection: 5,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 2,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 10,
        hard_hat: 3,
        welding_helmet: 0,
      },
    },
    {
      worker: {
        fullName: "Johne DABIOO",
        role: "Employee",
        avatar,
        companyImg,
      },
      site: 3,
      date: "04/07/2024",
      violations: {
        protective_gloves: 2,
        safety_glasses: 0,
        ear_protection: 0,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 1,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 3,
        hard_hat: 0,
        welding_helmet: 0,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      site: 1,
      date: "04/07/2024",
      violations: {
        protective_gloves: 3,
        safety_glasses: 2,
        ear_protection: 0,
        mask_protection: 0,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 4,
        hi_vis_jacket: 0,
        safety_harness: 3,
        face_shield: 0,
        hard_hat: 0,
        welding_helmet: 1,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      site: 1,
      date: "04/07/2024",
      violations: {
        protective_gloves: 1,
        safety_glasses: 0,
        ear_protection: 5,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 2,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 10,
        hard_hat: 3,
        welding_helmet: 0,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      site: 2,
      date: "04/07/2024",
      violations: {
        protective_gloves: 2,
        safety_glasses: 0,
        ear_protection: 0,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 1,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 3,
        hard_hat: 0,
        welding_helmet: 0,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      date: "21/06/2024",
      site: 2,
      violations: {
        protective_gloves: 3,
        safety_glasses: 2,
        ear_protection: 0,
        mask_protection: 0,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 4,
        hi_vis_jacket: 0,
        safety_harness: 3,
        face_shield: 0,
        hard_hat: 0,
        welding_helmet: 1,
      },
    },
    {
      worker: {
        fullName: "Blaise DEFLOO",
        role: "Manager",
        avatar,
        companyImg,
      },
      date: "01/06/2024",
      site: 2,
      violations: {
        protective_gloves: 1,
        safety_glasses: 0,
        ear_protection: 5,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 2,
        hi_vis_jacket: 0,
        safety_harness: 0,
        face_shield: 10,
        hard_hat: 3,
        welding_helmet: 0,
      },
    },
  ];

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
}

export function getViolationDetails(num: number): Promise<Violation[]> {
  const simples: Violation[] = [
    {
      id: 3,
      image: worker1,
      comment: `consectetur adipiscing elit, do eiusmod tempor 
incididunt ut labore et dolore magna aliqua 
adipiscingdo eiusmod tempor incididunt labore`,
      date: new Date(),
    },
    {
      id: 7,
      image: worker2,
      comment: `consectetur adipiscing elit, do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua 
  adipiscingdo eiusmod tempor incididunt labore`,
      date: new Date(),
    },
  ];
  const data = Array(num)
    .fill(0)
    .map((_, idx) => simples[idx % simples.length]);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
}
