import React from "react";

import classNames from "classnames";

import styles from "./roundIcon.module.scss";

interface IconProps {
  icon: JSX.Element;
}

const FilledIcon: React.FC<
  IconProps & { backgroundColor?: string; color?: string }
> = ({ icon, backgroundColor, color }) => {
  return (
    <div
      className={classNames({ [styles.icon]: true })}
      style={{ backgroundColor, color }}
    >
      {icon}
    </div>
  );
};

const OutlinedIcon: React.FC<IconProps> = ({ icon }) => {
  return (
    <div
      className={classNames({
        [styles.icon]: true,
        [styles.outlinedIcon]: true,
      })}
    >
      {icon}
    </div>
  );
};

export const RoundIcon = {
  filled: FilledIcon,
  outlined: OutlinedIcon,
};
