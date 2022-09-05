import React from "react";

import { motion } from "framer-motion";

import { AnimatedChildren } from "@/layouts";

import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  callback: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  callback,
  children,
}) => {
  return (
    <AnimatedChildren>
      {isOpen && (
        <motion.div
          className={styles.background}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.container}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.body}>{children}</div>
            <footer className={styles.footer}>
              <span onClick={handleClose}>Cancel</span>
              <span onClick={callback}>Apply</span>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatedChildren>
  );
};
