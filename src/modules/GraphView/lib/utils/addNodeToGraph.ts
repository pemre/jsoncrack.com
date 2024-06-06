import type { NodeType } from "jsonc-parser";
import type { Graph } from "src/modules/GraphView/lib/jsonParser";
import { calculateNodeSize } from "src/modules/GraphView/lib/utils/calculateNodeSize";

type Props = {
  graph: Graph;
  text: string | [string, string][];
  isEmpty?: boolean;
  type?: NodeType;
};

export const addNodeToGraph = ({ graph, text, type = "null", isEmpty = false }: Props) => {
  const id = String(graph.nodes.length + 1);
  const isParent = type === "array" || type === "object";

  /** *********************************************************
   *  CUSTOMIZE THE NODE BY _type PROP
   */
  let _textWithoutSpecialProps, _type, _typeKey, _value;

  // Text node may have a type: E.g. "_CATEGORY_|_Our pizzas"
  if (typeof text === "string" && text[0] === "_" && text.includes("_|_")) {
    [_type, _value] = text.split("_|_");
    // We don't need first '_' char: "CATEGORY"
    _type = _type.slice(1);
    // Our text to show is our value: "Our pizzas"
    _textWithoutSpecialProps = _value;

    // Object node may have a '_type' property
  } else {
    [_typeKey, _type] = text[0];
    // Remove first item as it's our special _type to customize node, we don't want to render it
    _textWithoutSpecialProps =
      _typeKey === "_type"
        ? text.slice(1) // Remove the first element
        : text;
  }
  /** *********************************************************/

  const { width, height } = calculateNodeSize(_textWithoutSpecialProps, isParent);

  const node = {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    node.customize = {
      type: _type,
    };
  }
  /** *********************************************************/

  graph.nodes.push(node);

  return id;
};
