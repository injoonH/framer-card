import React from "react";

import styles from "./text.module.scss";

const Subtitle: React.FC<{ children: string }> = ({ children }) => {
  return <h3 className={styles.subtitle}>{children}</h3>;
};

export default {
  subtitle: Subtitle,
};
