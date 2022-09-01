import React from "react";

import styles from "./metadataEntry.module.scss";

interface MetadataEntryProps {
  tag: string;
  value: string;
}

export const MetadataEntry: React.FC<MetadataEntryProps> = ({ tag, value }) => {
  return (
    <div className={styles.container}>
      <span className={styles.tag}>{tag}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
