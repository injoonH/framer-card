import React from "react";
import { GiStack } from "react-icons/gi";

export const useStack = <T>(): [
  React.MutableRefObject<T[]>,
  (item: T) => void,
  () => T | undefined,
  () => void
] => {
  const stack = React.useRef<T[]>([]);
  const pushStack = (item: T): void => {
    stack.current.push(item);
  };
  const popStack = (): T | undefined => stack.current.pop();
  const emptyStack = (): void => {
    stack.current = [];
  };
  return [stack, pushStack, popStack, emptyStack];
};
