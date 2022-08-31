import React from "react";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import { motion, PanInfo } from "framer-motion";
import classNames from "classnames";

import styles from "@/components/card/card.module.scss";

interface CardProps {
  isActive: boolean;
  deactivate: () => void;
  children: React.ReactNode;
}

interface Motion {
  initial: { x: string } | { y: string };
  animate: { x: number } | { y: number };
  exit: { x: string } | { y: string };
  drag: "x" | "y";
  dragConstraints: { top: number } | { left: number };
}

const Card: React.FC<CardProps> = ({ isActive, deactivate, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [cardMotion, setCardMotion] = React.useState<Motion>();

  React.useEffect(() => {
    setCardMotion(
      isMobile
        ? {
            initial: { y: "calc(100% + 4em)" },
            animate: { y: 0 },
            exit: { y: "calc(100% + 4em)" },
            drag: "y",
            dragConstraints: { top: 0 },
          }
        : {
            initial: { x: "calc(100% + 4em)" },
            animate: { x: 0 },
            exit: { x: "calc(100% + 4em)" },
            drag: "x",
            dragConstraints: { left: 0 },
          }
    );
  }, [isMobile]);

  const onDragEnd = React.useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
      const [velocity, offset] = isMobile
        ? [info.velocity.y, info.offset.y]
        : [info.velocity.x, info.offset.x];
      if (velocity > 30 || offset > 30) deactivate();
    },
    [isMobile]
  );

  if (!isActive) return null;

  return (
    <motion.div
      className={classNames({
        [styles.card]: true,
        [isMobile ? styles.cardBottom : styles.cardRight]: true,
      })}
      onDragEnd={onDragEnd}
      dragSnapToOrigin
      {...cardMotion}
    >
      <header className={styles.cardHeader}>
        <IoArrowBack />
        <IoClose onClick={deactivate} />
      </header>
      <main>{children}</main>
    </motion.div>
  );
};

export default Card;
