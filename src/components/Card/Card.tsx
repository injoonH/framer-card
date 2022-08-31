import React from "react";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import { motion } from "framer-motion";

import classNames from "classnames";

import styles from "@/components/Card/card.module.scss";

interface CardProps {
  isActive: boolean;
  deactivate: () => void;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ isActive, deactivate, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const cardMotion = isMobile
    ? {
        initial: { y: "calc(100% + 4em)" },
        animate: { y: 0 },
        exit: { y: "calc(100% + 4em)" },
      }
    : {
        initial: { x: "calc(100% + 4em)" },
        animate: { x: 0 },
        exit: { x: "calc(100% + 4em)" },
      };

  if (!isActive) return null;

  return (
    <motion.div
      className={classNames({
        [styles.card]: true,
        [isMobile ? styles.cardBottom : styles.cardRight]: true,
      })}
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
