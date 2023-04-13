type CanvasDirection = "LEFT" | "RIGHT" | "DOWN" | "UP";

interface NodeData<T = any> {
  id: string;
  customize?: CustomizeData;
  parent?: string;
  disabled?: boolean;
  text?: any;
  path?: string;
  height?: number;
  width?: number;
  isParent?: string;
  ports?: PortData[];
  icon?: IconData;
  nodePadding?: number | [number, number] | [number, number, number, number];
  data?: T;
  className?: string;
  layoutOptions?: ElkNodeLayoutOptions;
  selectionDisabled?: boolean;
}

interface CustomizeData<T = any> {
  type: string;
}

interface EdgeData<T = any> {
  id: string;
  disabled?: boolean;
  text?: any;
  from?: string;
  to?: string;
  fromPort?: string;
  toPort?: string;
  data?: T;
  className?: string;
  containerClassName?: string;
  arrowHeadType?: any;
  parent?: string;
  selectionDisabled?: boolean;
}
