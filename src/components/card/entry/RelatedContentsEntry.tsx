import React from "react";
import {
  IoChevronForward,
  IoCloseOutline,
  IoGlobeOutline,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoReddit,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import { RoundIcon } from "@/components/atom";

import styles from "./relatedContentsEntry.module.scss";

export interface RelatedContentsEntryProps {
  type: "google" | "instagram" | "reddit" | "twitter" | "youtube" | "default";
  url: string;
  title: string;
  isAnchor?: boolean;
  onClickHandler?: () => void;
}

export const RelatedContentsEntry: React.FC<RelatedContentsEntryProps> = ({
  type,
  url,
  title,
  isAnchor = true,
  onClickHandler,
}) => {
  const [icon, setIcon] = React.useState<JSX.Element>(<IoGlobeOutline />);

  React.useEffect(() => {
    switch (type) {
      case "google":
        setIcon(<IoLogoGoogle />);
        break;
      case "instagram":
        setIcon(<IoLogoInstagram />);
        break;
      case "reddit":
        setIcon(<IoLogoReddit />);
        break;
      case "twitter":
        setIcon(<IoLogoTwitter />);
        break;
      case "youtube":
        setIcon(<IoLogoYoutube />);
        break;
      case "default":
      default:
        setIcon(<IoGlobeOutline />);
    }
  }, [type]);

  const core = (
    <>
      <div className={styles.iconWrapper}>
        <RoundIcon.outlined icon={icon} />
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.url}>{url}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </>
  );

  return isAnchor ? (
    <a className={styles.entry} href={url} target="_blank">
      {core}
      <IoChevronForward />
    </a>
  ) : (
    <div className={styles.entry} onClick={onClickHandler}>
      {core}
      <IoCloseOutline />
    </div>
  );
};
