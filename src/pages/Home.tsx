import React from "react";

import Card from "@/components/card";
import {
  CardViewState,
  LinkedNodesView,
  LinkInfoView,
  NodeInfoView,
} from "@/components/card/views";

import { AnimatedChildren } from "@/layouts";

import { LinkedNodesType, LinkType, NodeType } from "@/types";

import { v4 as uuidv4 } from "uuid";

import links from "@/data/links.json";
import linkedNodes from "@/data/linkedNodes.json";
import nodes from "@/data/nodes.json";

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
      case CardViewState.LinkInfo:
        // TODO: Get /link/:id
        const allLinkData = links.results as LinkType[];
        const linkData = allLinkData.find((link) => link.id === currentId);
        if (linkData)
          return (
            <LinkInfoView
              {...linkData}
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
      {Array(3)
        .fill(null)
        .map((_, idx) => (
          <div>
            <button
              key={idx}
              style={buttonStyle}
              onClick={() => {
                setIsCardActive(true);
                setCardViewState(CardViewState.NodeInfo);
                setCurrentId(idx + 1);
              }}
            >
              Node {idx + 1}
            </button>
            <button
              key={idx}
              style={buttonStyle}
              onClick={() => {
                setIsCardActive(true);
                setCardViewState(CardViewState.LinkInfo);
                setCurrentId(idx + 1);
              }}
            >
              Edge {idx + 1} - {((idx + 1) % 3) + 1}
            </button>
          </div>
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
