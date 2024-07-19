const sites = ["All", "Site 1", "Site 2", "Site 3", "Site 4"];

export default function SitesControler({
  site,
  setSite,
}: {
  site: number;
  setSite: (site: number) => void;
}) {
  return (
    <div className="border border-grayBorder text-[13px]">
      <div className="flex flex-row text-grayFontLight">
        <div className="bg-grayBgLight px-4 py-1">SITES</div>
        {sites.map((item, idx) => (
          <span
            key={idx}
            className={`cursor-pointer w-16 text-center py-1 hover:bg-blue-50 ${
              idx === site ? "text-blueLight" : ""
            }`}
            onClick={() => setSite(idx)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
