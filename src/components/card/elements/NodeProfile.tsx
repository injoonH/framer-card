import React from "react";

import { LinkCount } from "@/components/card/elements";

import { RoundImg } from "@/components/atom";

import { NodeProfileType } from "@/types";

import styles from "./nodeProfile.module.scss";
import Button from "@/components/button";
import Container from "@/components/container";

export const NodeProfile: React.FC<
  NodeProfileType & {
    navigateToNodeInfo: () => void;
  }
> = ({ id, title, imageSource, linkedNodesCount, navigateToNodeInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <RoundImg src={imageSource} size="10rem" />
      </div>
      <div className={styles.nodeId}>Idea {id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.linkCountWrapper}>
        <LinkCount count={linkedNodesCount} />
      </div>
      <Container.center>
        <Button.learnMore onClickHandler={navigateToNodeInfo} />
      </Container.center>
    </div>
  );
};
