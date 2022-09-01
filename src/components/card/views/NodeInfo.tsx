import React from "react";
import { IoGitCommitOutline } from "react-icons/io5";

import { MetadataEntry, RelatedContentsEntry } from "@/components/card/entry";
import { Divider, RoundImg } from "@/components/atom";
import { RectButton } from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";

import { NodeType } from "@/types";

import styles from "./nodeInfo.module.scss";

export const NodeInfo: React.FC<NodeType> = ({
  id,
  title,
  description,
  imageSource,
  linkedNodesCount,
  contents,
  author,
}) => {
  return (
    <>
      <div className={styles.imgWrapper}>
        <RoundImg src={imageSource} size="20rem" />
      </div>
      <div className={styles.nodeId}>Idea {id}</div>
      <div className={styles.title}>{title}</div>
      <Container.center>
        <div
          className={styles.linkCountWrapper}
          title="the number of linked ideas"
          onClick={() => {
            // TODO: Navigate
          }}
        >
          <IoGitCommitOutline />
          <span>{linkedNodesCount}</span>
        </div>
      </Container.center>

      <Divider />

      <Text.subtitle>Description</Text.subtitle>
      <Text.paragraph>{description}</Text.paragraph>

      <Divider />

      <Text.subtitle>Related Contents</Text.subtitle>
      <Container.stack gap="0.5em">
        {contents.map((entry, idx) => (
          <RelatedContentsEntry
            key={idx}
            type={entry.type}
            title={entry.title}
            url={entry.url}
          />
        ))}
      </Container.stack>

      <Divider />

      <Text.subtitle>Author</Text.subtitle>
      <Container.stack gap="0.1em">
        <MetadataEntry tag="Name" value={author.en.name} />
        <MetadataEntry tag="Department" value={author.en.department} />
        <MetadataEntry tag="Course Level" value={author.en.courseLevel} />
      </Container.stack>

      <RectButton
        onClickHandler={() => {
          // TODO: Navigate
        }}
      >
        Connect an Idea
      </RectButton>
    </>
  );
};
