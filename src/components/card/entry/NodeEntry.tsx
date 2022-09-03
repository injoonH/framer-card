import React from "react";
import { IoGitCommitOutline } from "react-icons/io5";

import { LinkCount } from "@/components/card/elements";

import { RoundImg } from "@/components/atom";

import styles from "./nodeEntry.module.scss";

interface NodeEntryProps {
  id: number;
  title: string;
  imageSource: string;
  linkedNodesCount: number;
}

export const NodeEntry: React.FC<NodeEntryProps> = ({
  id,
  title,
  imageSource,
  linkedNodesCount,
}) => {
  return (
    <div className={styles.entry}>
      <RoundImg src={imageSource} size="6rem" />
      <div className={styles.detailsContainer}>
        <div className={styles.nodeId}>Idea {id}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.linkCountWrapper}>
        <LinkCount count={linkedNodesCount} />
      </div>
    </div>
  );
};
