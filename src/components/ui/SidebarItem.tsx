import { Link } from "react-router-dom";

export default function SidebarItem({
  item,
  isSidebarOpen,
}: {
  item: {
    title: string;
    icon: React.FC<{ color?: string; className?: string }>;
    path: string;
  };
  isSidebarOpen: boolean;
}) {
  const isActive = window.location.pathname === item.path;

  return (
    <Link to={item.path} className="w-full px-2">
      {isSidebarOpen ? (
        <div
          className={`flex flex-row items-center p-3 gap-x-2 ${
            isActive && "bg-blueLight rounded-md"
          }`}
          w-full
        >
          <item.icon
            className="pb-1 w-5 h-5"
            color={isActive ? "#FFFFFF" : undefined}
          />
          {/* <img className="pb-1 w-5" src={item.icon} alt={item.icon} /> */}
          <div className={`${isActive ? "text-white" : "text-grayFont"}`}>
            {item.title}
          </div>
        </div>
      ) : (
        <div className="p-3">
          <item.icon
            className="m-auto w-6 h-6"
            color={isActive ? `#42a4df` : undefined}
          />
        </div>
      )}
    </Link>
  );
}
