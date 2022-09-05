import React from "react";
import { IoAddOutline, IoGlobeOutline } from "react-icons/io5";

import styles from "./addRelatedContentButton.module.scss";

export const AddRelatedContentButton: React.FC<{
  onClickHandler: () => void;
}> = ({ onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      <IoGlobeOutline />
      <span>Add New Content (Optional)</span>
      <IoAddOutline />
    </button>
  );
};
