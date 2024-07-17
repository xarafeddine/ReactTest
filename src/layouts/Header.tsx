import burgerIcon from "@/assets/icons/burger.svg";

export default function Header({
  isSidebarOpen,
  toggleSidebar,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  return (
    <div>
      {!isSidebarOpen && (
        <img
          className="cursor-pointer"
          onClick={toggleSidebar}
          src={burgerIcon}
          alt="burger icon"
        />
      )}
    </div>
  );
}
