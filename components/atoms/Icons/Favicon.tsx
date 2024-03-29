import { IconsProps } from "@data/interfaces/Icons";

export default function FavIcon({ className, selfRef }: IconsProps) {
  return (
    <span ref={selfRef} className={className}>
      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="260" height="260" fill="black" />
        <path
          d="M75.7181 141.791C76.8101 129.525 84.6732 123.619 99.5257 123.619C119.62 123.619 123.333 128.162 123.333 148.379V165.642C123.333 185.632 119.62 190.175 99.5257 190.175C84.8917 190.175 77.0286 185.632 75.7181 176.773V141.791ZM34 43.2054V224.93H74.4075V192.22C78.7759 215.844 92.9732 227.656 117.218 227.656C157.844 227.656 167.017 217.434 167.017 166.551V147.016C167.017 96.1327 158.062 85.9107 119.402 85.9107C93.1916 85.9107 80.5233 92.0439 75.4996 113.169V43.2054H34Z"
          fill="#FAFAFA"
        />
        <path d="M232 186.314H194.869V224.93H232V186.314Z" fill="#FAFAFA" />
      </svg>
    </span>
  );
}
