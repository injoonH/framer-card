import React from "react";
import { IoAdd } from "react-icons/io5";

import { LinkedNodeEntry, NodeEntry } from "@/components/card/entry";
import { CardViewState } from "@/components/card/views";

import { SearchBar } from "@/components/atom";
import Button from "@/components/button";
import Container from "@/components/container";

import { DestNodeType, LinkedNodesType } from "@/types";

import styles from "./nodeConnectionView.module.scss";

export const NodeConnectionView: React.FC<
  LinkedNodesType & {
    destNodeInfo: React.MutableRefObject<DestNodeType>;
    setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
  }
> = ({
  id,
  title,
  imageSource,
  linkedNodes,
  destNodeInfo,
  setCardViewState,
}) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [selectedNodeId, setSelectedNodeId] = React.useState<number>();
  const [filteredInfoList, setFilteredInfoList] = React.useState<
    {
      id: number;
      title: string;
      description: string;
      imageSource: string;
      linkedNodesCount: number;
    }[]
  >(linkedNodes);

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
          onSubmitHandler={() =>
            setFilteredInfoList(
              linkedNodes.filter(
                (entry) =>
                  entry.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  entry.description
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              )
            )
          }
          placeholder="Search Ideas"
        />
      </div>

      <button
        className={styles.createButton}
        onClick={() => setCardViewState(CardViewState.NodeCreation)}
      >
        <IoAdd />
        <span>Create New Idea</span>
      </button>

      <Container.stack>
        {filteredInfoList.map((entry) => (
          <LinkedNodeEntry
            key={entry.id}
            title={entry.title}
            description={entry.description}
            imageSource={entry.imageSource}
            linkedNodesCount={entry.linkedNodesCount}
            onClickListener={() => {
              if (entry.id === selectedNodeId) {
                setSelectedNodeId(undefined);
                destNodeInfo.current = {
                  id: null,
                  title: "",
                };
              } else {
                setSelectedNodeId(entry.id);
                destNodeInfo.current = {
                  id: entry.id,
                  title: entry.title,
                  imageSource: entry.imageSource,
                  linkedNodesCount: entry.linkedNodesCount,
                };
              }
            }}
            isSelected={entry.id === selectedNodeId}
          />
        ))}
      </Container.stack>

      <Button.condition
        condition={selectedNodeId !== undefined}
        onClickHandler={() => {
          setCardViewState(CardViewState.LinkCreation);
        }}
      >
        {selectedNodeId ? "Connect an Idea" : "Select an Idea"}
      </Button.condition>
    </>
  );
};
