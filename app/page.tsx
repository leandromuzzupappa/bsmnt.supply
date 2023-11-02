import { Marquee } from "@atoms/Marquee/Marquee";
import { Hero } from "@organisms/Hero/Hero";
import { ProductGrid } from "@/components/organisms/ProductGrid/ProductGrid";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Marquee text="—  A man can't have enough basement swag" />
      <ProductGrid />
    </main>
  );
}
