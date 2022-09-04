import React from "react";

import styles from "@/components/atom/roundImg.module.scss";

interface RoundImgProps {
  src: string;
  alt?: string;
}

export const RoundImg: React.FC<RoundImgProps> = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};
