import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./searchBar.module.scss";

interface SearchBarProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmitHandler: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  text,
  setText,
  onSubmitHandler,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={onSubmitHandler}>
        <IoSearchOutline />
      </div>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") onSubmitHandler();
        }}
      />
    </div>
  );
};
