import * as React from "react"
export  const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    transform="scale(2)"
    {...props}
  >
    <rect width="100%" height="100%" fill={props.fill} />
    <path
      fill="none"
      stroke="hsla(258.5,59.4%,59.4%,1)"
      strokeLinecap="square"
      d="M3.25 10h13.5M10 3.25v13.5"
    />
  </svg>
)

