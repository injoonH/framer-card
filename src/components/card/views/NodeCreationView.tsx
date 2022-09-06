import React from "react";

import { RelatedContentsFactory } from "@/components/card/elements";
import {
  RelatedContentsEntry,
  RelatedContentsEntryProps,
} from "@/components/card/entry";
import { CardViewState } from "@/components/card/views";

import { Divider, ImageInput, Textarea } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";
import { Modal } from "@/components/modal";
import Text from "@/components/text";

import { DestNodeType } from "@/types";

import styles from "./nodeCreationView.module.scss";

interface NodeCreationViewProps {
  destNodeInfo: React.MutableRefObject<DestNodeType>;
  setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
}

export const NodeCreationView: React.FC<NodeCreationViewProps> = ({
  destNodeInfo,
  setCardViewState,
}) => {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [imageFile, setImageFile] = React.useState<File>();
  const [contents, setContents] = React.useState<RelatedContentsEntryProps[]>(
    []
  );

  return (
    <>
      <Container.center>
        <ImageInput setImageFile={setImageFile} />
      </Container.center>
      <div className={styles.titleDescription}>Idea Name</div>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="Name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Divider />

      <Text.subtitle>Description*</Text.subtitle>
      <Textarea
        text={description}
        setText={setDescription}
        placeholder="Enter description here (Required)"
        maxLength={300}
      />

      <Divider />

      <Text.subtitle>Related Contents</Text.subtitle>
      <RelatedContentsFactory contents={contents} setContents={setContents} />

      <Button.condition
        condition={title.length > 0 && description.length > 0}
        onClickHandler={() => {
          destNodeInfo.current = {
            id: null,
            title,
            description,
            imageFile,
            contents,
          };
          setCardViewState(CardViewState.LinkCreation);
        }}
      >
        {title.length === 0
          ? "Name Required"
          : description.length === 0
          ? "Description Required"
          : "Create Idea"}
      </Button.condition>
    </>
  );
};
