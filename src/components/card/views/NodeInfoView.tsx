import React from "react";
import { IoChevronForward } from "react-icons/io5";

import { LinkCount } from "@/components/card/elements";
import { MetadataEntry, RelatedContentsEntry } from "@/components/card/entry";
import { CardViewState } from "@/components/card/views";

import { Divider, RoundImg } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";

import { NodeType } from "@/types";

import styles from "./nodeInfoView.module.scss";

export const NodeInfoView: React.FC<
  NodeType & {
    setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
    preNavCallback: () => void;
  }
> = ({
  id,
  title,
  description,
  imageSource,
  contents,
  linkedNodesCount,
  author,
  setCardViewState,
  preNavCallback,
}) => {
  return (
    <>
      <div className={styles.imgWrapper}>
        <RoundImg src={imageSource} />
      </div>
      <div className={styles.nodeId}>Idea {id}</div>
      <div className={styles.title}>{title}</div>
      <Container.center>
        <div
          className={styles.linkCountWrapper}
          onClick={() => {
            preNavCallback();
            setCardViewState(CardViewState.LinkedNodes);
          }}
        >
          <LinkCount count={linkedNodesCount} />
          <IoChevronForward />
        </div>
      </Container.center>

      <Divider />

      <Text.subtitle>Description</Text.subtitle>
      <Text.paragraph>{description}</Text.paragraph>

      <Divider />

      {contents.length !== 0 && (
        <>
          <Text.subtitle>Related Contents</Text.subtitle>
          <Container.stack>
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
        </>
      )}

      <Text.subtitle>Author</Text.subtitle>
      <Container.stack gap="0.1em">
        {/* // TODO: Use i18n */}
        <MetadataEntry tag="Name" value={author.en.name} />
        <MetadataEntry tag="Department" value={author.en.department} />
        <MetadataEntry tag="Course Level" value={author.en.courseLevel} />
      </Container.stack>

      <Button.rect
        onClickHandler={() => {
          preNavCallback();
          setCardViewState(CardViewState.NodeConnection);
        }}
      >
        Connect an Idea
      </Button.rect>
    </>
  );
};
