import { SVGProps } from "react";
import { setIconColor } from "./iconColor";

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  const iconColor = setIconColor(props.color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={iconColor}
        fillRule="evenodd"
        d="M4.75 1a.75.75 0 0 1 .75.75V3h5V1.75a.75.75 0 0 1 1.5 0V3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2V1.75A.75.75 0 0 1 4.75 1M2.5 4.5V6h11V4.5zm0 9v-6h11v6zM11 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
