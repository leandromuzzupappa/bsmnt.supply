import { IconsProps } from "@data/interfaces/Icons";

export default function EyeIcon({ className, selfRef }: IconsProps) {
  return (
    <span ref={selfRef} className={className}>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        width="109px"
        height="26px"
        viewBox="0 0 110 28"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <g className="cls-1">
            <g>
              <path
                id="ojito-todo"
                className="cls-3"
                d="m54.76,26.77c30.25,0,54.76-5.99,54.76-13.39S85.01,0,54.76,0,0,5.99,0,13.39s24.52,13.39,54.76,13.39Z"
                stroke="#fff"
              />
              <g>
                <path
                  id="ojito"
                  className="cls-3"
                  d="m54.76,26.77c7.54,0,13.64-5.99,13.64-13.39S62.3,0,54.76,0s-13.64,5.99-13.64,13.39,6.11,13.39,13.64,13.39Z"
                  stroke="#fff"
                />
                <path
                  id="pupila"
                  className="cls-4"
                  d="m54.76,15.85c1.39,0,2.51-1.1,2.51-2.46s-1.12-2.46-2.51-2.46-2.51,1.1-2.51,2.46,1.12,2.46,2.51,2.46Z"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}
