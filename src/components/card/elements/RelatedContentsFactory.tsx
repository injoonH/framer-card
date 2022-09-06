import React from "react";
import { IoAddOutline, IoGlobeOutline } from "react-icons/io5";

import {
  RelatedContentsEntry,
  RelatedContentsEntryProps,
} from "@/components/card/entry";

import Container from "@/components/container";
import { Modal } from "@/components/modal";

import styles from "./relatedContentsFactory.module.scss";

interface RelatedContentFactoryProps {
  contents: RelatedContentsEntryProps[];
  setContents: React.Dispatch<
    React.SetStateAction<RelatedContentsEntryProps[]>
  >;
}

export const RelatedContentsFactory: React.FC<RelatedContentFactoryProps> = ({
  contents,
  setContents,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [relTitle, setRelTitle] = React.useState<string>("");
  const [relUrl, setRelUrl] = React.useState<string>("");

  return (
    <>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
        <IoGlobeOutline />
        <span>Add New Content (Optional)</span>
        <IoAddOutline />
      </button>

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
