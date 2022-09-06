import React from "react";
import { IoLink } from "react-icons/io5";

import { CardViewState } from "@/components/card/views";

import { NodeProfile } from "@/components/card/elements";
import { MetadataEntry, RelatedContentsEntry } from "@/components/card/entry";

import { Divider, RoundIcon } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";

import { LinkType } from "@/types";

import styles from "./linkInfo.module.scss";

export const LinkInfoView: React.FC<
  LinkType & {
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
    preNavCallback: () => void;
  }
> = ({
  description,
  src,
  dest,
  contents,
  likesCount,
  isLiked,
  author,
  setCurrentId,
  setCardViewState,
  preNavCallback,
}) => {
  return (
    <>
      <div className={styles.profilesContainer}>
        <NodeProfile
          {...src}
          navigateToNodeInfo={() => {
            preNavCallback();
            setCurrentId(src.id);
            setCardViewState(CardViewState.NodeInfo);
          }}
        />
        <NodeProfile
          {...dest}
          navigateToNodeInfo={() => {
            preNavCallback();
            setCurrentId(dest.id);
            setCardViewState(CardViewState.NodeInfo);
          }}
        />
        <div className={styles.imageLinkLine}></div>
        <div className={styles.imageLinkIcon}>
          <RoundIcon.filled
            icon={<IoLink />}
            backgroundColor="#71bae5"
            color="#ffffff"
          />
        </div>
      </div>

      <Divider />

      <Text.subtitle>Description</Text.subtitle>
      <Text.paragraph>{description}</Text.paragraph>

      <Divider />

      {contents.length !== 0 && (
        <>
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
        </>
      )}

      <Text.subtitle>Author</Text.subtitle>
      <Container.stack gap="0.1em">
        {/* TODO: Use i18n */}
        <MetadataEntry tag="Name" value={author.en.name} />
        <MetadataEntry tag="Department" value={author.en.department} />
        <MetadataEntry tag="Course Level" value={author.en.courseLevel} />
      </Container.stack>

      <Button.like
        likeCount={likesCount}
        isLiked={isLiked}
        onClickHandler={() => {
          // TODO: Fetch likes
        }}
      />
    </>
  );
};
