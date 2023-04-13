import { TYPE_BACKGROUND_COLORS } from "../constants/style";

export const getNodeStyleByType = (_type: string) => {
  return _type ? {
    overflow: 'visible',
    backgroundColor: TYPE_BACKGROUND_COLORS[_type],
  } : {}
};
