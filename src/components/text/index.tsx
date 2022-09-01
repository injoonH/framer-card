import React from "react";

import styles from "./text.module.scss";

const Paragraph: React.FC<{ children: string }> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

const Subtitle: React.FC<{ children: string }> = ({ children }) => {
  return <h3 className={styles.subtitle}>{children}</h3>;
};

export default {
  paragraph: Paragraph,
  subtitle: Subtitle,
};
