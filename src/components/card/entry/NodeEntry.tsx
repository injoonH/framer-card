import React from "react";

import { LinkCount } from "@/components/card/elements";

import { RoundImg } from "@/components/atom";

import { NodeProfileType } from "@/types";

import styles from "./nodeEntry.module.scss";

export const NodeEntry: React.FC<NodeProfileType> = ({
  id,
  title,
  imageSource,
  linkedNodesCount,
}) => {
  return (
    <div className={styles.entry}>
      <div className={styles.imageWrapper}>
        <RoundImg src={imageSource} />
      </div>
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
