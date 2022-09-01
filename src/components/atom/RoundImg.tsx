import React from "react";

import styles from "@/components/atom/roundImg.module.scss";

interface RoundImgProps {
  src: string;
  alt?: string;
  size: string;
}

export const RoundImg: React.FC<RoundImgProps> = ({ src, alt, size }) => {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
    />
  );
};
