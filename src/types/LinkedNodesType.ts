export type LinkedNodesType = {
  id: number;
  title: string;
  imageSource: string;
  linkedNodes: {
    id: number;
    title: string;
    description: string;
    imageSource: string;
    linkedNodesCount: number;
  }[];
};
