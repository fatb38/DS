import n from "react";
import { styled as c, css as i } from "styled-components";
import { iconTheme as r } from "./theme.js";
const t = c.span`
    color: ${(o) => o.$on ? r.color.on : o.color || r.color.default};
    border-radius: ${(o) => o.$on ? r.borderRadius.on : r.borderRadius.default}px;
    background-color: ${(o) => o.$on ? r.backgroundColor.on : r.backgroundColor.default};
    padding: ${r.padding};

    ${(o) => o.$isClickable && i`
            cursor: pointer;
        `}

    &:hover {
        color: ${(o) => o.$hoverable || o.$on ? r.color.on : r.color.default};
        border-radius: ${(o) => o.$hoverable || o.$on ? r.borderRadius.on : r.borderRadius.default}px;
        background-color: ${(o) => o.$hoverable || o.$on ? r.backgroundColor.on : r.backgroundColor.default};
    }
`, $ = ({ on: o, hoverable: e, icon: a, onClick: l, ...d }) => n.createElement(t, { className: "kit-icon", $on: o, $hoverable: e, $isClickable: l !== void 0, ...d }, a);
$.displayName = "KitIcon";
export {
  $ as KitIcon
};
//# sourceMappingURL=index.js.map
