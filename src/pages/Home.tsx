import React from "react";

import Card from "@/components/Card";

import { useToggle } from "@/hooks";

import { AnimatedChildren } from "@/layouts";

import { v4 as uuidv4 } from "uuid";

export const Home: React.FC = () => {
  const [isCardActive, toggleIsCardActive] = useToggle(false);

  return (
    <>
      <button onClick={toggleIsCardActive}>Toggle Card</button>
      <AnimatedChildren>
        <Card
          key={uuidv4()}
          isActive={isCardActive}
          toggleIsActive={toggleIsCardActive}
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
