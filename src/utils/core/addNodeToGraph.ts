import { calculateNodeSize } from "./calculateNodeSize";
import { Graph } from "./jsonParser";

type Props = {
  graph: Graph;
  text: any;
  isEmpty?: boolean;
  type?: "string" | "number" | "boolean" | "object" | "array" | "null";
};

export const addNodeToGraph = ({ graph, text, type = "null", isEmpty = false }: Props) => {
  let id = String(graph.nodes.length + 1);
  const isParent = type === "array" || type === "object";

  /** *********************************************************
   *  CUSTOMIZE THE NODE BY _type PROP
   */
  let _textWithoutSpecialProps, _type, _typeKey, _value;

  // Text node may have a type: E.g. "_CATEGORY_|_Our pizzas"
  if (text[0] === '_' && text.includes('_|_')) {
    [_type, _value] = text.split('_|_');
    // We don't need first '_' char: "CATEGORY"
    _type = _type.slice(1);
    // Our text to show is our value: "Our pizzas"
    _textWithoutSpecialProps = _value;

  // Object node may have a '_type' property
  } else {
    [_typeKey, _type] = text[0];
    // Remove first item as it's our special _type to customize node, we don't want to render it
    _textWithoutSpecialProps = _typeKey === '_type'
      ? text.slice(1) // Remove the first element
      : text;
  }
  /** *********************************************************/

  const { width, height } = calculateNodeSize(_textWithoutSpecialProps, isParent);

  const node: NodeData = {
    id,
    text: _textWithoutSpecialProps,
    width,
    height,
    data: {
      type,
      isParent,
      isEmpty,
      childrenCount: isParent ? 1 : 0,
    },
  };

  /** *********************************************************
   *  ADD CUSTOM CONFIG
   */
  if (_type) {
    node.customize = {
      type: _type,
    };
  }
  /** *********************************************************/

  graph.nodes = graph.nodes.concat([node]);

  return id;
};
