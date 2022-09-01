import React from "react";

import styles from "./rectButton.module.scss";

interface RectButtonProps {
  children: React.ReactNode;
  onClickHandler: () => void;
}

export const RectButton: React.FC<RectButtonProps> = ({
  children,
  onClickHandler,
}) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {children}
    </button>
  );
};
