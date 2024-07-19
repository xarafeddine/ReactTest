export default function MaxViewIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="34"
      height="30"
      viewBox="0 0 34 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="33"
        height="29"
        rx="1.5"
        fill="white"
        stroke="#D8D8D8"
      />
      <path
        d="M21 7H25V11M19 13L25 7M13 23H9V19M9 23L15 17M21 23H25V19M19 17L25 23M13 7H9V11M9 7L15 13"
        stroke="#C4C4C4"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
