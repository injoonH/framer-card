import React from "react";

import Card from "@/components/card";
import { CardViewState, NodeInfo } from "@/components/card/views";

import { AnimatedChildren } from "@/layouts";

import { NodeType } from "@/types";

import { v4 as uuidv4 } from "uuid";

import nodes from "@/data/nodes.json";

export const Home: React.FC = () => {
  const [isCardActive, setIsCardActive] = React.useState<boolean>(false);
  const [cardViewState, setCardViewState] = React.useState<CardViewState>();
  const [cardKey, setCardKey] = React.useState<string>(uuidv4());

  const getCardView = React.useCallback(() => {
    switch (cardViewState) {
      case CardViewState.NodeInfo:
        // TODO: GET node data from server
        const nodeData = nodes.results[0] as NodeType;
        return <NodeInfo {...nodeData} />;
      default:
        return <div>Default</div>;
    }
  }, [cardViewState]);

  const buttonStyle = {
    margin: "1em",
    padding: "1em",
  };

  return (
    <>
      <button
        onClick={() => {
          setIsCardActive(true);
          setCardViewState(CardViewState.NodeInfo);
        }}
        style={buttonStyle}
      >
        NodeInfo
      </button>
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
