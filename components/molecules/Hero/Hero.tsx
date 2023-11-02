import { Headline } from "@atoms/Headline/Headline";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Headline
        as="h1"
        className={styles.heroHeadline}
        copy={[
          { text: "Basement", variant: "fill" },
          { text: "Supply", variant: "outline", position: "center" },
        ]}
      />

      {/* <small className="bubble">EST</small>
      <small className="bubble">2K19</small> */}
    </section>
  );
};
