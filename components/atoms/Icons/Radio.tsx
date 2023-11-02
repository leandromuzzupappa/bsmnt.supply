import { IconsProps } from "@data/interfaces/Icons";

export default function RadioIcon({ className, selfRef }: IconsProps) {
  return (
    <span ref={selfRef} className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="XMLID 1">
            <g id="Group_2">
              <path
                id="Vector"
                d="M11.7812 11.9999H22.9715C22.9715 18.0637 17.9613 22.9796 11.7812 22.9796V11.9999Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M11.7811 1.02026V12H0.59082C0.59082 5.93621 5.60106 1.02026 11.7811 1.02026Z"
                fill="white"
              />
            </g>
          </g>
          <path
            id="Vector_3"
            d="M11.7811 22.9797C17.9614 22.9797 22.9714 18.0639 22.9714 12C22.9714 5.93605 17.9614 1.02026 11.7811 1.02026C5.60089 1.02026 0.59082 5.93605 0.59082 12C0.59082 18.0639 5.60089 22.9797 11.7811 22.9797Z"
            stroke="white"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </span>
  );
}
