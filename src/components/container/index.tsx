import React from "react";

import styles from "./container.module.scss";

const Center: React.FC<{
  children: React.ReactNode;
  column?: boolean;
}> = ({ children, column }) => {
  return (
    <div
      className={styles.center}
      style={column ? { flexDirection: "column" } : undefined}
    >
      {children}
    </div>
  );
};

const Stack: React.FC<{
  children: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
}> = ({ children, gap, style }) => {
  return (
    <div className={styles.stack} style={{ gap, ...style }}>
      {children}
    </div>
  );
};

export default {
  center: Center,
  stack: Stack,
};
