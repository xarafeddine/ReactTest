import englishIcon from "@/assets/countriesIcons/english.svg";
import franceIcon from "@/assets/countriesIcons/france.svg";
import nederlandsIcon from "@/assets/countriesIcons/nederlands.svg";
import spainIcon from "@/assets/countriesIcons/spain.svg";
import germanyIcon from "@/assets/countriesIcons/germany.svg";
import { Popover } from "@mantine/core";
import { useState } from "react";

const languages: Record<string, { name: string; logo: string }> = {
  EN: { name: "English", logo: englishIcon },
  FR: { name: "Français", logo: franceIcon },
  NL: { name: "Nederlands", logo: nederlandsIcon },
  ES: { name: "Español", logo: spainIcon },
  DE: { name: "Deutsch", logo: germanyIcon },
};

export default function LanguagesDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  return (
    <Popover position="left" withArrow shadow="md" >
      <Popover.Target>
        <img
          src={languages[selectedLanguage].logo}
          alt={selectedLanguage}
          className="object-cover cursor-pointer"
        />
      </Popover.Target>
      <Popover.Dropdown p={3} className="rounded-sm">
        {Object.entries(languages).map(([key, value]) => (
          <div
            className="flex flex-row items-center gap-3 hover:bg-grayBgLight bg-white p-3 cursor-pointer"
            onClick={() => setSelectedLanguage(key)}
          >
            <img src={value.logo} alt={key} />
            <span
              className={key !== selectedLanguage ? "text-grayFont":"text-black"}
            >{`${value.name} (${key})`}</span>
          </div>
        ))}
      </Popover.Dropdown>
    </Popover>
  );
}
