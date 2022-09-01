import React from "react";

import styles from "./container.module.scss";

const Stack: React.FC<{ children: React.ReactNode; gap?: string }> = ({
  children,
  gap,
}) => {
  return (
    <div className={styles.stack} style={{ gap }}>
      {children}
    </div>
  );
};

export default {
  stack: Stack,
};
