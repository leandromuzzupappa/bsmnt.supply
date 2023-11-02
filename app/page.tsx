import { Hero } from "@molecules/Hero/Hero";
import { Marquee } from "@/components/atoms/Marquee/Marquee";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Marquee text="—  A man can't have enough basement swag" />
    </main>
  );
}
