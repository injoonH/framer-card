import { RelatedContentsEntryProps } from "@/components/card/entry";

import { AuthorType } from "@/types";

export type NodeType = {
  id: number;
  title: string;
  description: string;
  imageSource: string;
  contents: RelatedContentsEntryProps[];
  linkedNodesCount: number;
  author: AuthorType;
};
