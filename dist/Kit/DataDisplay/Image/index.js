import i from "react";
import { Image as d } from "antd";
import t from "styled-components";
import r from "./theme.js";
const b = t(d)`
    border-radius: ${(e) => e.$rounded ? r.borderRadius : 0}px;
    border: ${(e) => e.$bordered ? "1px solid " + r.borderColor : "none"};

    + .ant-image-mask {
        border-radius: ${(e) => e.$rounded ? r.borderRadius : 0}px;
        border: ${(e) => e.$bordered ? "1px solid " + r.borderColor : "none"};
    }
`, p = ({ rounded: e, bordered: a, ...m }) => i.createElement(b, { $rounded: e, $bordered: a, ...m }), o = p;
o.PreviewGroup = d.PreviewGroup, o.displayName = "KitImage";
export {
  o as KitImage
};
