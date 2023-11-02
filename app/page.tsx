import { Hero } from "@molecules/Hero/Hero";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
