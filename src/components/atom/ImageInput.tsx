import React from "react";
import { IoImageOutline } from "react-icons/io5";

import { RoundImg } from "@/components/atom/RoundImg";

import styles from "./imageInput.module.scss";

export const ImageInput: React.FC = () => {
  const [blobUrl, setBlobUrl] = React.useState<string>();

  return (
    <label className={styles.container}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(event) => {
          if (event.target.files === null) return;
          const [imageFile] = event.target.files;
          setBlobUrl(URL.createObjectURL(imageFile));
        }}
      />
      {blobUrl ? (
        <RoundImg src={blobUrl} />
      ) : (
        <div className={styles.default}>
          <IoImageOutline />
          <span>Add Image</span>
        </div>
      )}
    </label>
  );
};
