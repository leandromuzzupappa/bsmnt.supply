import { Icon } from "@/components/atoms/Icons/Icon";
import { Headline } from "@/components/atoms/Headline/Headline";
import styles from "./Footer.module.css";
import { IconNames } from "@/data/enums/Icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Icon name={IconNames.FOOTER} className={styles.footerIcon} />

      <Headline
        as="h3"
        className={styles.footerTitle}
        copy={[
          {
            text: "Wear",
            variant: "fill",
            position: "right",
          },
          {
            text: "Everyday",
            variant: "outline",
          },
        ]}
      />
    </footer>
  );
};
