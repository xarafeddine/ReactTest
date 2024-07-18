export default function WorkBagIcon({
  color,
  className,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill={color || "#C4C4C4"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4717 3H11.4717V1.5C11.4717 0.6675 10.8042 0 9.97168 0H6.97168C6.13918 0 5.47168 0.6675 5.47168 1.5V3H2.47168C1.63918 3 0.97918 3.6675 0.97918 4.5L0.97168 12.75C0.97168 13.5825 1.63918 14.25 2.47168 14.25H14.4717C15.3042 14.25 15.9717 13.5825 15.9717 12.75V4.5C15.9717 3.6675 15.3042 3 14.4717 3ZM9.97168 3H6.97168V1.5H9.97168V3Z"
        fill={color || "#C4C4C4"}
      />
    </svg>
  );
}