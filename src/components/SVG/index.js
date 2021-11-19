export const GridSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
        stroke={props.stroke} // active #6379F4 gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z"
        stroke={props.stroke} // active #6379F4 gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 16.333H16.3333V24.4997H24.5V16.333Z"
        stroke={props.stroke} // active #6379F4 gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
        stroke={props.stroke} // active #6379F4 gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M14 22.1663V5.83301"
        stroke={props.stroke} // #3A3D42 // red #FF5B37
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
        stroke={props.stroke} // #3A3D42 // red #FF5B37
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M14 5.83366L14 22.167"
        stroke={props.stroke} // green #1EC15F gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1667 14.0003L14 22.167L5.83333 14.0003"
        stroke={props.stroke} // green #1EC15F gray 3A3D42
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M14 5.83301V22.1663"
        stroke={props.stroke} // #3A3D42
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 14H22.1667"
        stroke={props.stroke} // #3A3D42
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PersonSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M1 17C1 14 5 14 7 12C8 11 5 11 5 6C5 2.667 6.333 1 9 1C11.667 1 13 2.667 13 6C13 11 10 11 11 12C13 14 17 14 17 17"
        stroke={props.stroke} // #A9A9A9
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EmailSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M22 5H2V19H22V5Z"
        stroke={props.stroke} // #A9A9A9
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6L12 13L21 6"
        stroke="#A9A9A9"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LockSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M19 11H5V21H19V11Z"
        stroke={props.stroke} // #A9A9A9
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9"
        stroke={props.stroke} // #A9A9A9
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LogoutSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5"
        stroke={props.stroke} // #3A3D42
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 19.8337L24.5 14.0003L18.6667 8.16699"
        stroke={props.stroke} // #3A3D42
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 14H10.5"
        stroke={props.stroke} // #3A3D42
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
