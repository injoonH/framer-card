import React from "react";

export const useToggle = (
  initialState: boolean | (() => boolean)
): [boolean, () => void] => {
  const [state, setState] = React.useState<boolean>(initialState);
  const toggleState = () => setState((currState) => !currState);
  return [state, toggleState];
};
