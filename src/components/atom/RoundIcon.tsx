import React from "react";

import styles from "./roundIcon.module.scss";

interface RoundIconProps {
  icon: JSX.Element;
}

export const RoundIcon: React.FC<RoundIconProps> = ({ icon }) => {
  return <div className={styles.iconWrapper}>{icon}</div>;
};
