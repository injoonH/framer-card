import React from "react";
import { text } from "stream/consumers";

import styles from "./textarea.module.scss";

interface TextareaProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  maxLength?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  text,
  setText,
  placeholder,
  maxLength,
}) => {
  return (
    <div className={styles.container}>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {maxLength && (
        <div>
          {text.length}/{maxLength}
        </div>
      )}
    </div>
  );
};
