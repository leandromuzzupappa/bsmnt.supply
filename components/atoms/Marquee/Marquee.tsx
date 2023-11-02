import styles from "./Marquee.module.css";

interface MarqueeProps {
  text: string;
}

export const Marquee = ({ text }: MarqueeProps) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeInner}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};
