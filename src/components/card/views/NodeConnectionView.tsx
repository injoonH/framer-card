import React from "react";
import { IoAdd } from "react-icons/io5";

import { LinkedNodeEntry, NodeEntry } from "@/components/card/entry";

import { SearchBar } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";

import { LinkedNodesType } from "@/types";

import styles from "./nodeConnectionView.module.scss";

export const NodeConnectionView: React.FC<LinkedNodesType> = ({
  id,
  title,
  imageSource,
  linkedNodes,
}) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [selectedNodeId, setSelectedNodeId] = React.useState<number>();

  return (
    <>
      <NodeEntry
        id={id}
        title={title}
        imageSource={imageSource}
        linkedNodesCount={linkedNodes.length}
      />

      <div className={styles.searchBarWrapper}>
        <SearchBar
          text={searchText}
          setText={setSearchText}
          onSubmitHandler={() => {
            // TODO: Search
          }}
          placeholder="Search Ideas"
        />
      </div>

      <button
        className={styles.createButton}
        onClick={() => {
          // TODO: Navigate
        }}
      >
        <IoAdd />
        <span>Create New Idea</span>
      </button>

      <Container.stack>
        {linkedNodes.map((entry) => (
          <LinkedNodeEntry
            key={entry.id}
            title={entry.title}
            description={entry.description}
            imageSource={entry.imageSource}
            linkedNodesCount={entry.linkedNodesCount}
            onClickListener={() =>
              setSelectedNodeId(
                entry.id === selectedNodeId ? undefined : entry.id
              )
            }
            isSelected={entry.id === selectedNodeId}
          />
        ))}
      </Container.stack>

      <Button.condition
        condition={selectedNodeId !== undefined}
        onClickHandler={() => {}}
      >
        {selectedNodeId ? "Connect an Idea" : "Select an Idea"}
      </Button.condition>
    </>
  );
};
