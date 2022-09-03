import React from "react";
import { IoGitCommitOutline } from "react-icons/io5";

import classNames from "classnames";

import styles from "./linkCount.module.scss";

interface LinkCountProps {
  count: number;
  onClickHandler?: () => void;
}

export const LinkCount: React.FC<LinkCountProps> = ({
  count,
  onClickHandler,
}) => {
  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        [styles.wrapperClickable]: onClickHandler !== undefined,
      })}
      onClick={onClickHandler}
      style={onClickHandler && { cursor: "pointer" }}
    >
      <IoGitCommitOutline />
      <span>{count}</span>
    </div>
  );
};
