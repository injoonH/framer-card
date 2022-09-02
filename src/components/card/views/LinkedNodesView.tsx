import React from "react";

import { LinkedNodeEntry, NodeEntry } from "@/components/card/entry";
import { CardViewState } from "@/components/card/views";
import { Divider } from "@/components/atom";
import Container from "@/components/container";
import Text from "@/components/text";

import { LinkedNodesType } from "@/types";

export const LinkedNodesView: React.FC<
  LinkedNodesType & {
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    setCardViewState: React.Dispatch<React.SetStateAction<CardViewState>>;
  }
> = ({
  id,
  title,
  imageSource,
  linkedNodes,
  setCurrentId,
  setCardViewState,
}) => {
  return (
    <>
      <NodeEntry
        id={id}
        title={title}
        imageSource={imageSource}
        linkedNodesCount={linkedNodes.length}
      />

      <Divider />

      <Text.subtitle>Connected Ideas</Text.subtitle>
      <Container.stack>
        {linkedNodes.map((entry) => (
          <LinkedNodeEntry
            key={entry.id}
            title={entry.title}
            description={entry.description}
            imageSource={entry.imageSource}
            linkedNodesCount={entry.linkedNodesCount}
            onClickListener={() => {
              setCurrentId(entry.id);
              setCardViewState(CardViewState.NodeInfo);
            }}
          />
        ))}
      </Container.stack>
    </>
  );
};
