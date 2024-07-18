export type ViolationsTableData = {
  worker: {
    fullName: string;
    role: string;
    avatar: string;
    companyImg: string;
  };
  violations: Record<string, number>;
  // {
  //   protective_gloves: number;
  //   safety_glasses: number;
  //   ear_protection: number;
  //   mask_protection: number;
  //   knee_pads: number;
  //   safety_shoes: number;
  //   coverall: number;
  //   hi_vis_jacket: number;
  //   safety_harness: number;
  //   face_shield: number;
  //   hard_hat: number;
  //   welding_helmet: number;
  // };
};

export type ViolationsTableColumn = {
  name: string;
  image: string;
};

export type Violation = {
  id: number;
  image: string;
  comment: string;
  date: Date;
};
