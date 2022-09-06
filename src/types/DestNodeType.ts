import { RelatedContentsEntryProps } from "@/components/card/entry";

export type DestNodeType = {
  id: number | null;
  title: string;
  description?: string;
  imageSource?: string;
  imageFile?: File;
  contents?: RelatedContentsEntryProps[];
  linkedNodesCount?: number;
};
