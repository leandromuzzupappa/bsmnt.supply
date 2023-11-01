interface EyeIconProps {
  selfRef?: React.RefObject<HTMLDivElement>;
}

export default function EyeIcon({ selfRef }: EyeIconProps) {
  return (
    <div ref={selfRef}>
      <svg width="84" height="22" viewBox="0 0 84 22">
        <g id="Layer_1-2" data-name="Layer 1">
          <g className="ojito-mask">
            <g>
              <path
                id="ojito-contorno"
                stroke="#fff"
                d="m41.03,20.06c22.66,0,41.03-4.49,41.03-10.03S63.69,0,41.03,0,0,4.49,0,10.03s18.37,10.03,41.03,10.03Z"
              />
              <g id="ojito-todo">
                <path
                  id="ojito"
                  stroke="#fff"
                  d="m41.03,20.06c5.65,0,10.22-4.49,10.22-10.03S46.67,0,41.03,0s-10.22,4.49-10.22,10.03,4.58,10.03,10.22,10.03Z"
                />
                <path
                  id="pupila"
                  fill="#fff"
                  d="m41.03,11.87c1.04,0,1.88-.83,1.88-1.84s-.84-1.84-1.88-1.84-1.88.83-1.88,1.84.84,1.84,1.88,1.84Z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
