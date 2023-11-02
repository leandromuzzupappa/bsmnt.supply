import styles from "./Headline.module.css";

interface HeadlineProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  copy: {
    text: string;
    position?: "left" | "right" | "center";
    variant?: "fill" | "outline";
  }[];
  selfRef?: React.RefObject<HTMLHeadingElement>;
}

export const Headline = ({
  as = "h1",
  className,
  copy,
  selfRef,
}: HeadlineProps) => {
  const Component = as;

  return (
    <Component
      ref={selfRef}
      className={`${styles.headline} ${className || ""}`}
    >
      {copy.map((item, index) => (
        <span
          key={index}
          data-position={item.position}
          data-variant={item.variant}
        >
          {item.text}
        </span>
      ))}
    </Component>
  );
};
