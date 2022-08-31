import React from "react";

import Card from "@/components/card";

import { AnimatedChildren } from "@/layouts";

import { v4 as uuidv4 } from "uuid";

export const Home: React.FC = () => {
  const [isCardActive, setIsCardActive] = React.useState<boolean>(false);
  const [cardState, setCardState] = React.useState<number>(0);
  const [cardKey, setCardKey] = React.useState<string>(uuidv4());

  const getCardView = React.useCallback(() => {
    switch (cardState) {
      case 1:
        return <div>One</div>;
      case 2:
        return <div>Two</div>;
      default:
        return <div>Default</div>;
    }
  }, [cardState]);

  return (
    <>
      {Array(2)
        .fill(null)
        .map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsCardActive(true);
              setCardState(idx + 1);
            }}
            style={{
              padding: "1em",
            }}
          >
            Open {idx + 1}
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
