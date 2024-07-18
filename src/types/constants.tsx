import HandIcon from "@/components/icons/HandIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import TwoHandsIcon from "@/components/icons/TwoHandsIcon";
import WorkBagIcon from "@/components/icons/WorkBagIcon";

export const MENU = [
  {
    title: "",
    items: [
      {
        title: "Dashbord",
        icon: HomeIcon,
        path: "/dashbord",
      },
      {
        title: "P.P.E Violations",
        icon: HandIcon,
        path: "/",
      },
    ],
  },

  {
    title: "MANAGER",
    items: [
      {
        title: "P.P.Es",
        icon: TwoHandsIcon,
        path: "/ppes",
      },
      {
        title: "Contractors",
        icon: WorkBagIcon,
        path: "/contractors",
      },
      {
        title: "Workers",
        icon: PersonIcon,
        path: "/workers",
      },
    ],
  },
];

export const ColumnsObj = {
  protective_gloves: "Protective Gloves",
  safety_glasses: "Safety Glasses",
  ear_protection: "Ear Protection",
  mask_protection: "Mask Protection",
  knee_pads: "Knee Pads",
  safety_shoes: "Safety Shoes",
  coverall: "Coverall",
  hi_vis_jacket: "Hi-Vis Jacket",
  safety_harness: "Safety Harness",
  face_shield: "Face Shield",
  hard_hat: "Hard Hat",
  welding_helmet: "Welding Helmet",
};

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

export const headerImgs = {
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
