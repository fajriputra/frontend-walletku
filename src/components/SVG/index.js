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

export const ArrowRightSVG = (props) => {
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
        d="M5.83366 14L22.167 14"
        stroke={props.stroke} // #7E7D84
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4998 21.1501V24.9001C27.5012 25.2482 27.4299 25.5928 27.2904 25.9118C27.151 26.2308 26.9464 26.5171 26.6899 26.7525C26.4334 26.9878 26.1305 27.167 25.8007 27.2785C25.4709 27.39 25.1215 27.4315 24.7748 27.4001C20.9283 26.9822 17.2335 25.6678 13.9873 23.5626C10.9671 21.6435 8.40646 19.0828 6.48729 16.0626C4.37477 12.8016 3.0601 9.08886 2.64979 5.22512C2.61856 4.87945 2.65964 4.53107 2.77042 4.20215C2.8812 3.87323 3.05926 3.57098 3.29325 3.31465C3.52725 3.05831 3.81205 2.85351 4.12953 2.71327C4.44702 2.57304 4.79022 2.50045 5.13729 2.50012H8.88729C9.49393 2.49415 10.082 2.70897 10.542 3.10454C11.002 3.5001 11.3024 4.04943 11.3873 4.65012C11.5456 5.8502 11.8391 7.02853 12.2623 8.16262C12.4305 8.61003 12.4669 9.09626 12.3672 9.56372C12.2675 10.0312 12.0359 10.4603 11.6998 10.8001L10.1123 12.3876C11.8917 15.5171 14.4829 18.1082 17.6123 19.8876L19.1998 18.3001C19.5397 17.964 19.9687 17.7324 20.4362 17.6327C20.9037 17.533 21.3899 17.5694 21.8373 17.7376C22.9714 18.1608 24.1497 18.4543 25.3498 18.6126C25.957 18.6983 26.5115 19.0041 26.908 19.472C27.3044 19.9399 27.515 20.5371 27.4998 21.1501Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.className}
      onClick={props.onClick}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33398 5.99967V3.66634C5.33398 3.0475 5.57982 2.45401 6.0174 2.01643C6.45499 1.57884 7.04848 1.33301 7.66732 1.33301H12.334C12.9528 1.33301 13.5463 1.57884 13.9839 2.01643C14.4215 2.45401 14.6673 3.0475 14.6673 3.66634V5.99967M18.1673 5.99967V22.333C18.1673 22.9518 17.9215 23.5453 17.4839 23.9829C17.0463 24.4205 16.4528 24.6663 15.834 24.6663H4.16732C3.54848 24.6663 2.95499 24.4205 2.5174 23.9829C2.07982 23.5453 1.83398 22.9518 1.83398 22.333V5.99967H18.1673Z"
        stroke={props.stroke} // #BBBBBE
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
        stroke={props.stroke}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6L12 13L21 6"
        stroke={props.stroke}
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

export const EyeCrossedSVG = (props) => {
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
        d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
        stroke={props.stroke}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={props.stroke}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21L20 4"
        stroke={props.stroke}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
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

export const SearchSVG = (props) => {
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
        d="M15 16L20 21"
        stroke="#A9A9A9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z"
        stroke="#A9A9A9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PencilSVG = (props) => {
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
        d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
        stroke={props.stroke}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckSVG = (props) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 2.5L10.75 21.75L2 13"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DownloadSVG = (props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M26.25 18.75V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75"
        stroke="#6379F4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12.5L15 18.75L21.25 12.5"
        stroke="#6379F4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.75V3.75"
        stroke="#6379F4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseSVG = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.className}
      onClick={props.onClick}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 10.5L10.5 31.5"
        stroke={props.stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5L31.5 31.5"
        stroke={props.stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
