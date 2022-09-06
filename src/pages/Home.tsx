import React from "react";

import Card from "@/components/card";
import {
  CardViewState,
  LinkCreationView,
  LinkedNodesView,
  LinkInfoView,
  NodeConnectionView,
  NodeCreationView,
  NodeInfoView,
} from "@/components/card/views";

import { AnimatedChildren } from "@/layouts";

import { DestNodeType, LinkedNodesType, LinkType, NodeType } from "@/types";

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

  const destNodeInfo = React.useRef<DestNodeType>({
    id: null,
    title: "",
  });

  const getCardView = React.useCallback(() => {
    switch (cardViewState) {
      case CardViewState.LinkCreation:
      case CardViewState.NodeInfo:
        // TODO: GET /node/:id
        const allNodeData = nodes.results as NodeType[];
        const nodeData = allNodeData.find((node) => node.id === currentId);
        if (nodeData === undefined) break;
        if (cardViewState === CardViewState.LinkCreation) {
          const { id, title, imageSource, linkedNodesCount } = nodeData;
          const profileData = { id, title, imageSource, linkedNodesCount };
          return (
            <LinkCreationView
              {...profileData}
              destNodeInfo={destNodeInfo}
              setCurrentId={setCurrentId}
              setCardViewState={setCardViewState}
            />
          );
        }
        return (
          <NodeInfoView {...nodeData} setCardViewState={setCardViewState} />
        );
      case CardViewState.LinkedNodes:
      case CardViewState.NodeConnection:
        // TODO: GET /linkedNodes/:id
        const allLinkedNodesData = linkedNodes.results as LinkedNodesType[];
        const linkedNodesData = allLinkedNodesData.find(
          (node) => node.id === currentId
        );
        if (linkedNodesData === undefined) break;
        if (cardViewState === CardViewState.LinkedNodes)
          return (
            <LinkedNodesView
              {...linkedNodesData}
              setCurrentId={setCurrentId}
              setCardViewState={setCardViewState}
            />
          );
        return (
          <NodeConnectionView
            {...linkedNodesData}
            destNodeInfo={destNodeInfo}
            setCardViewState={setCardViewState}
          />
        );
      case CardViewState.LinkInfo:
        // TODO: Get /link/:id
        const allLinkData = links.results as LinkType[];
        const linkData = allLinkData.find((link) => link.id === currentId);
        if (linkData === undefined) break;
        return (
          <LinkInfoView
            {...linkData}
            setCurrentId={setCurrentId}
            setCardViewState={setCardViewState}
          />
        );
      case CardViewState.NodeCreation:
        return (
          <NodeCreationView
            destNodeInfo={destNodeInfo}
            setCardViewState={setCardViewState}
          />
        );
    }
    return <div>Default</div>;
  }, [cardViewState, currentId]);

  const buttonStyle = {
    margin: "0.6em",
    padding: "1em",
  };

  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, idx) => (
          <div key={idx}>
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
            <button
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
