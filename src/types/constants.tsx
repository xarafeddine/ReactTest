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
