import React from "react";
import { CustomNodeProps } from "src/components/CustomNode";
import * as Styled from "./styles";

/** *********************************************************
 *  IMPORT CUSTOMIZATION HELPERS
 */
import { getNodeStyleByType } from "../../../customize/utils/getNodeStyleByType";
import { Title } from "../../../customize/components/Title";
/** *********************************************************/

const Node: React.FC<CustomNodeProps> = ({ node, x, y }) => {
  const { text, width, height, data } = node;
  const ref = React.useRef(null);

  if (data.isEmpty) return null;

  /** *********************************************************
   *  USE CUSTOM CONFIG
   */
  const { customize } = node;
  const _type = customize?.type || '';
  /** *********************************************************/

  return (
    <Styled.StyledForeignObject width={width} height={height} x={0} y={0} ref={ref} isObject
      style={getNodeStyleByType(_type)}
    >
      {_type && <Title title={_type} />}
      {text.map((val, idx) => {
        return (
          <Styled.StyledRow
            data-key={JSON.stringify(val)}
            data-type={JSON.stringify(val[1])}
            data-x={x}
            data-y={y + idx * 17.8}
            key={idx}
          >
            <Styled.StyledKey objectKey>
              {JSON.stringify(val[0]).replaceAll('"', "")}:{" "}
            </Styled.StyledKey>
            <Styled.StyledLinkItUrl>{JSON.stringify(val[1])}</Styled.StyledLinkItUrl>
          </Styled.StyledRow>
        );
      })}
    </Styled.StyledForeignObject>
  );
};

function propsAreEqual(prev: CustomNodeProps, next: CustomNodeProps) {
  return String(prev.node.text) === String(next.node.text) && prev.node.width === next.node.width;
}

export const ObjectNode = React.memo(Node, propsAreEqual);
