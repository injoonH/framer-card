import { RelatedContentsEntryProps } from "@/components/card/entry";

import { AuthorType } from "@/types";

export type NodeType = {
  id: number;
  title: string;
  description: string;
  imageSource: string;
  linkedNodesCount: number;
  contents: RelatedContentsEntryProps[];
  author: AuthorType;
};
