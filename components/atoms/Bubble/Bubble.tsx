import styles from "./Bubble.module.css";

interface BubbleProps {
  className?: string;
  copy: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export const Bubble = ({ className, copy, selfRef }: BubbleProps) => {
  return (
    <small ref={selfRef} className={`${styles.bubble} ${className || ""}`}>
      {copy}
    </small>
  );
};
