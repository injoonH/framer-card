import React from "react";
import { IoHeart } from "react-icons/io5";

import classNames from "classnames";

import styles from "./button.module.scss";

const RectButton: React.FC<{
  children: React.ReactNode;
  onClickHandler: () => void;
}> = ({ children, onClickHandler }) => {
  return (
    <button
      className={classNames({
        [styles.button]: true,
        [styles.rect]: true,
      })}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

const LikeButton: React.FC<{
  likeCount: number;
  isLiked: boolean;
  onClickHandler: () => void;
}> = ({ likeCount, isLiked, onClickHandler }) => {
  return (
    <button
      className={classNames({
        [styles.button]: true,
        [styles.like]: true,
        [styles.likeActivated]: isLiked,
      })}
      onClick={onClickHandler}
    >
      <IoHeart />
      {likeCount}
    </button>
  );
};

const LearnMoreButton: React.FC<{ onClickHandler: () => void }> = ({
  onClickHandler,
}) => {
  return (
    <button className={styles.learnMore} onClick={onClickHandler}>
      Learn More
    </button>
  );
};

const ConditionButton: React.FC<{
  children: React.ReactNode;
  condition: boolean;
  onClickHandler: () => void;
}> = ({ children, condition, onClickHandler }) => {
  return (
    <button
      className={classNames({
        [styles.button]: true,
        [condition ? styles.rect : styles.condition]: true,
      })}
      onClick={onClickHandler}
      disabled={!condition}
    >
      {children}
    </button>
  );
};

export default {
  rect: RectButton,
  like: LikeButton,
  learnMore: LearnMoreButton,
  condition: ConditionButton,
};
