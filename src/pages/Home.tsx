import React from "react";

import Card from "@/components/card";
import {
  CardViewState,
  LinkedNodesView,
  NodeInfoView,
} from "@/components/card/views";

import { AnimatedChildren } from "@/layouts";

import { LinkedNodesType, NodeType } from "@/types";

import { v4 as uuidv4 } from "uuid";

import nodes from "@/data/nodes.json";
import linkedNodes from "@/data/linkedNodes.json";

export const Home: React.FC = () => {
  const [isCardActive, setIsCardActive] = React.useState<boolean>(false);
  const [cardViewState, setCardViewState] = React.useState<CardViewState>(
    CardViewState.NodeInfo
  );
  const [cardKey, setCardKey] = React.useState<string>(uuidv4());
  const [currentId, setCurrentId] = React.useState<number>(0);

  const getCardView = React.useCallback(() => {
    switch (cardViewState) {
      case CardViewState.NodeInfo:
        // TODO: GET /node/:id
        const allNodeData = nodes.results as NodeType[];
        const nodeData = allNodeData.find((node) => node.id === currentId);
        if (nodeData)
          return (
            <NodeInfoView {...nodeData} setCardViewState={setCardViewState} />
          );
      case CardViewState.LinkedNodes:
        // TODO: GET /linkedNodes/:id
        const allLinkedNodesData = linkedNodes.results as LinkedNodesType[];
        const linkedNodesData = allLinkedNodesData.find(
          (node) => node.id === currentId
        );
        if (linkedNodesData)
          return (
            <LinkedNodesView
              {...linkedNodesData}
              setCurrentId={setCurrentId}
              setCardViewState={setCardViewState}
            />
          );
    }
    return <div>Default</div>;
  }, [cardViewState, currentId]);

  const buttonStyle = {
    margin: "1em",
    padding: "1em",
  };

  return (
    <>
      {Array(2)
        .fill(null)
        .map((_, idx) => (
          <button
            style={buttonStyle}
            onClick={() => {
              setIsCardActive(true);
              setCardViewState(CardViewState.NodeInfo);
              setCurrentId(idx + 1);
            }}
          >
            Node {idx + 1}
          </button>
        ))}
      <AnimatedChildren>
        <Card
          key={cardKey}
          isActive={isCardActive}
          deactivate={() => {
            setCardKey(uuidv4());
            setIsCardActive(false);
          }}
        >
          {getCardView()}
        </Card>
      </AnimatedChildren>
    </>
  );
};
