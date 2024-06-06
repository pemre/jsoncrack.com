import type { NodeType } from "jsonc-parser";

export interface NodeData {
  id: string;
  customize?: CustomizeData;
  parent?: string;
  text: string | [string, string][];
  width: number;
  height: number;
  path?: string;
  data: {
    type: NodeType;
    isParent: boolean;
    isEmpty: boolean;
    childrenCount: number;
  };
}

interface CustomizeData {
  type: string;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
