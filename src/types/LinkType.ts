import { RelatedContentsEntryProps } from "@/components/card/entry";

import { AuthorType, NodeProfileType } from "@/types";

export type LinkType = {
  id: number;
  description: string;
  src: NodeProfileType;
  dest: NodeProfileType;
  contents: RelatedContentsEntryProps[];
  likesCount: number;
  isLiked: boolean;
  author: AuthorType;
};
