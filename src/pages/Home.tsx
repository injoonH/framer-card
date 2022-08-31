import React from "react";

import Card from "@/components/Card";

import { AnimatedChildren } from "@/layouts";

import { v4 as uuidv4 } from "uuid";

export const Home: React.FC = () => {
  const [isCardActive, setIsCardActive] = React.useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsCardActive(true)}>Open Card</button>
      <AnimatedChildren>
        <Card
          key={uuidv4()}
          isActive={isCardActive}
          deactivate={() => setIsCardActive(false)}
        >
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            pariatur.
          </span>
        </Card>
      </AnimatedChildren>
    </>
  );
};
