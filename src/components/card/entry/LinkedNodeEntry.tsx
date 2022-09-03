import React from "react";
import { IoChevronForward } from "react-icons/io5";

import { LinkCount } from "@/components/card/elements";

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
          <LinkCount count={linkedNodesCount} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <IoChevronForward />
    </div>
  );
};
