import { IconsProps } from "@data/interfaces/Icons";

export default function UHDIcon({ className, selfRef }: IconsProps) {
  return (
    <span ref={selfRef} className={className}>
      <svg
        width="43"
        height="24"
        viewBox="0 0 43 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M40.2327 24H2.63237C1.29709 24 0.209961 22.9333 0.209961 21.6232V2.37681C0.209961 1.06667 1.29709 0 2.63237 0H40.2327C41.568 0 42.6551 1.06667 42.6551 2.37681V21.6116C42.667 22.9333 41.5798 24 40.2327 24Z"
            fill="white"
          />
          <g id="Group_2">
            <path
              id="Vector_2"
              d="M7.25266 15.003V12.9624L14.5789 7.14209H18.2539V13.1363H20.3218V15.003H18.2539V17.1711H15.3234V15.003H7.25266ZM15.3116 9.29861H15.2407L10.5259 13.0667V13.1479H15.3234V9.29861H15.3116Z"
              fill="black"
            />
            <path
              id="Vector_3"
              d="M35.8134 17.171H31.9848L27.7544 12.1855L24.8948 14.2493V17.171H21.8698V6.91016H24.8948V11.4087L30.9686 6.91016H35.0571L30.0705 10.516L35.8134 17.171Z"
              fill="black"
            />
          </g>
        </g>
      </svg>
    </span>
  );
}
