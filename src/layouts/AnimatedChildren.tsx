import React from "react";

import { AnimatePresence, AnimatePresenceProps } from "framer-motion";

export const AnimatedChildren: React.FC<
  React.PropsWithChildren<AnimatePresenceProps>
> = ({ children, ...props }) => {
  return <AnimatePresence {...props}>{children}</AnimatePresence>;
};
