import React from "react";
import {
  IoEllipsisHorizontal,
  IoLinkOutline,
  IoReaderOutline,
} from "react-icons/io5";
import { GiGoose } from "react-icons/gi";

import { RelatedContentsFactory } from "@/components/card/elements";
import { NodeEntry, RelatedContentsEntryProps } from "@/components/card/entry";
import { CardViewState } from "@/components/card/views";

import { RoundIcon, RoundImg, Textarea } from "@/components/atom";
import Button from "@/components/button";

import { DestNodeType, NodeProfileType } from "@/types";

import styles from "./linkCreationView.module.scss";

interface LinkCreationViewProps extends NodeProfileType {
  destNodeInfo: React.MutableRefObject<DestNodeType>;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
}

export const LinkCreationView: React.FC<LinkCreationViewProps> = ({
  id,
  title,
  imageSource,
  linkedNodesCount,
  destNodeInfo,
  setCurrentId,
  setCardViewState,
}) => {
  const [description, setDescription] = React.useState<string>("");
  const [contents, setContents] = React.useState<RelatedContentsEntryProps[]>(
    []
  );

  return (
    <>
      <NodeEntry
        id={id}
        title={title}
        imageSource={imageSource}
        linkedNodesCount={linkedNodesCount}
      />

      <div className={styles.decoratorContainer}>
        <div />
        <RoundIcon.filled
          icon={<IoLinkOutline />}
          backgroundColor="#70b9e4"
          color="#ffffff"
        />
        <span>Connected to</span>
      </div>

      {destNodeInfo.current.id ? (
        <NodeEntry
          id={destNodeInfo.current.id}
          title={destNodeInfo.current.title}
          imageSource={destNodeInfo.current.imageSource ?? ""}
          linkedNodesCount={destNodeInfo.current.linkedNodesCount ?? 0}
        />
      ) : (
        <div className={styles.destNodeContainer}>
          <div className={styles.imgWrapper}>
            {destNodeInfo.current.imageFile ? (
              <RoundImg
                src={URL.createObjectURL(destNodeInfo.current.imageFile)}
              />
            ) : (
              <div className={styles.defaultImg}>
                <GiGoose />
              </div>
            )}
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.nodeId}>
              {destNodeInfo.current.id
                ? `Idea ${destNodeInfo.current.id}`
                : "New Idea"}
            </div>
            <div className={styles.title}>{destNodeInfo.current.title}</div>
          </div>
        </div>
      )}

      <div className={styles.decoratorContainer}>
        <div />
        <RoundIcon.filled
          icon={<IoReaderOutline />}
          backgroundColor="#67a775"
          color="#ffffff"
        />
        <span>Because</span>
      </div>

      <Textarea
        text={description}
        setText={setDescription}
        placeholder={`What do ${title} and ${destNodeInfo.current.title} have in common? (Required)`}
        maxLength={300}
      />

      <div className={styles.decoratorContainer}>
        <div />
        <RoundIcon.filled
          icon={<IoEllipsisHorizontal />}
          backgroundColor="#fafafa"
          color="#8a8a8a"
        />
        <span>Also</span>
      </div>

      <RelatedContentsFactory contents={contents} setContents={setContents} />

      <Button.condition
        condition={description.length > 0}
        onClickHandler={() => {
          // TODO: Navigate to newly created LinkInfoView
          // TODO: Reset navigation records
        }}
      >
        {description.length === 0 ? "Description Required" : "Create Link"}
      </Button.condition>
    </>
  );
};
