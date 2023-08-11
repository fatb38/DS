import p from "react";
import { Space as r } from "antd";
import { theme as t } from "./theme.js";
const l = { small: t.smallGap, middle: t.middleGap, large: t.largeGap }, o = (a) => {
  let { size: e, ...i } = a;
  return a = p.useMemo(() => typeof e == "string" ? l[e] : e, [e]), p.createElement(r, { size: a, ...i });
}, m = o;
m.displayName = "KitSpace", m.Compact = r.Compact;
export {
  m as KitSpace
};
