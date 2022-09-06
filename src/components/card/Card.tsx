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
  animate: { x: number } | { y: number; top?: number };
  exit: { x: string } | { y: string };
  drag: "x" | "y";
  dragConstraints: { top: number } | { left: number };
}

const Card: React.FC<CardProps> = ({ isActive, deactivate, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [cardMotion, setCardMotion] = React.useState<Motion>();
  const [cardHeight, setCardHeight] = React.useState<string>("100%");
  const [isFull, setIsFull] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCardMotion(
      isMobile
        ? {
            initial: { y: "calc(100% + 4em)" },
            animate: { y: 0, top: isFull ? 0 : undefined },
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
  }, [isMobile, isFull]);

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = isMobile ? info.offset.y : info.offset.x;
    if (offset > 70) {
      if (isFull) setIsFull(false);
      else deactivate();
    }
    if (isMobile && offset < -70) setIsFull(true);
  };

  if (!isActive) return null;

  return (
    <motion.div
      className={classNames({
        [styles.card]: true,
        [isMobile ? styles.cardBottom : styles.cardRight]: true,
        [styles.cardFull]: isFull,
      })}
      style={{ height: cardHeight }}
      dragSnapToOrigin
      {...cardMotion}
      onAnimationComplete={() => {
        if (!isFull) setCardHeight("40%");
      }}
      onDragStart={() => setCardHeight("100%")}
      onDragEnd={onDragEnd}
    >
      <header className={styles.cardHeader}>
        <IoArrowBack />
        <div />
        <IoClose onClick={deactivate} />
      </header>
      <main className={styles.cardMain}>{children}</main>
    </motion.div>
  );
};

export default Card;
