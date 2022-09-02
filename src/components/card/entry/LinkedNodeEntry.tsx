import React from "react";
import { IoChevronForward, IoGitCommitOutline } from "react-icons/io5";

import { RoundImg } from "@/components/atom";

import styles from "./linkedNodeEntry.module.scss";

interface LinkedNodeEntryProps {
  title: string;
  description: string;
  imageSource: string;
  linkedNodesCount: number;
  onClickListener: () => void;
}

export const LinkedNodeEntry: React.FC<LinkedNodeEntryProps> = ({
  title,
  description,
  imageSource,
  linkedNodesCount,
  onClickListener,
}) => {
  return (
    <div className={styles.entry} onClick={onClickListener}>
      <RoundImg src={imageSource} size="5rem" />
      <div className={styles.detailsContainer}>
        <div>
          <span className={styles.title}>{title}</span>
          <div className={styles.linkCountWrapper}>
            <IoGitCommitOutline />
            <span>{linkedNodesCount}</span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <IoChevronForward />
    </div>
  );
};
