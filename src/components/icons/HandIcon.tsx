export default function HandIcon({
  color,
  className,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1001_526"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="13"
        height="13"
      >
        <rect
          x="3.80933"
          y="3.80957"
          width="11.4286"
          height="11.4286"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_1001_526)">
        <path
          d="M9.89311 15.2381C10.4725 15.2381 11.0023 15.1289 11.4826 14.9105C11.9626 14.6924 12.3752 14.4008 12.7203 14.0358C13.0657 13.6707 13.3336 13.252 13.5241 12.7796C13.7145 12.3075 13.8098 11.8175 13.8098 11.3096V8.21433C13.8098 8.04767 13.7523 7.90687 13.6374 7.79195C13.5222 7.67671 13.3812 7.61909 13.2145 7.61909C13.0479 7.61909 12.9071 7.67671 12.7922 7.79195C12.6769 7.90687 12.6193 8.04767 12.6193 8.21433V10.9524H12.3812C11.9844 10.9524 11.6471 11.0913 11.3693 11.3691C11.0915 11.6469 10.9526 11.9842 10.9526 12.381H10.4764C10.4764 11.9048 10.6312 11.4862 10.9407 11.1253C11.2503 10.764 11.651 10.5516 12.1431 10.4881V5.35719C12.1431 5.19052 12.0857 5.04957 11.9707 4.93433C11.8555 4.81941 11.7145 4.76195 11.5479 4.76195C11.3812 4.76195 11.2404 4.81941 11.1255 4.93433C11.0103 5.04957 10.9526 5.19052 10.9526 5.35719V9.04767H10.4764V4.40481C10.4764 4.23814 10.4188 4.09719 10.3036 3.98195C10.1887 3.86703 10.0479 3.80957 9.88121 3.80957C9.71454 3.80957 9.57375 3.86703 9.45883 3.98195C9.34359 4.09719 9.28597 4.23814 9.28597 4.40481V9.04767H8.80978V5.11909C8.80978 4.95243 8.75216 4.81148 8.63692 4.69624C8.522 4.58132 8.38121 4.52386 8.21454 4.52386C8.04787 4.52386 7.90708 4.58132 7.79216 4.69624C7.67692 4.81148 7.6193 4.95243 7.6193 5.11909V9.52386H7.14311V6.54767C7.14311 6.381 7.08565 6.24005 6.97073 6.12481C6.85549 6.00989 6.71454 5.95243 6.54787 5.95243C6.38121 5.95243 6.24041 6.00989 6.12549 6.12481C6.01026 6.24005 5.95264 6.381 5.95264 6.54767V11.3096C5.95264 11.8175 6.04994 12.3096 6.24454 12.7858C6.43883 13.262 6.71057 13.6807 7.05978 14.042C7.40899 14.4029 7.82375 14.6924 8.30407 14.9105C8.78407 15.1289 9.31375 15.2381 9.89311 15.2381Z"
          fill={color || "#C4C4C4"}
        />
      </g>
      <circle cx="10" cy="10" r="9.5" stroke={color || "#C4C4C4"} />
    </svg>
  );
}
