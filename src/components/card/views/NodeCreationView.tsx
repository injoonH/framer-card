import React from "react";

import { AddRelatedContentButton } from "@/components/card/elements";
import {
  RelatedContentsEntry,
  RelatedContentsEntryProps,
} from "@/components/card/entry";

import { Divider, ImageInput, Textarea } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";
import { Modal } from "@/components/modal";
import Text from "@/components/text";

import styles from "./nodeCreationView.module.scss";

export const NodeCreationView: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [contents, setContents] = React.useState<RelatedContentsEntryProps[]>(
    []
  );

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [relTitle, setRelTitle] = React.useState<string>("");
  const [relUrl, setRelUrl] = React.useState<string>("");

  return (
    <>
      <Container.center>
        <ImageInput />
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
      <div className={styles.addRelatedContentButtonWrapper}>
        <AddRelatedContentButton onClickHandler={() => setIsModalOpen(true)} />
      </div>
      <Container.stack>
        {contents.map((entry, idx) => (
          <RelatedContentsEntry
            key={idx}
            type={entry.type}
            title={entry.title}
            url={entry.url}
            isAnchor={false}
            onClickHandler={() => {
              // TODO: Pop from contents
            }}
          />
        ))}
      </Container.stack>

      <Button.condition
        condition={title.length > 0 && description.length > 0}
        onClickHandler={() => {
          // TODO: Navigate to LinkCreationView
        }}
      >
        {title.length === 0
          ? "Name Required"
          : description.length === 0
          ? "Description Required"
          : "Create Idea"}
      </Button.condition>

      <Modal
        isOpen={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
          setRelTitle("");
          setRelUrl("");
        }}
        callback={() => {
          // TODO: Get the type of related content (e.g., youtube, instagram, etc.)
          // POST /urlType
          // Push to contents
        }}
      >
        <div className={styles.modal}>
          <input
            type="text"
            placeholder="Title"
            value={relTitle}
            onChange={(event) => setRelTitle(event.target.value)}
          />
          <input
            type="url"
            placeholder="URL"
            value={relUrl}
            onChange={(event) => setRelUrl(event.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};
