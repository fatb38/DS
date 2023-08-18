import e from "react";
import n from "styled-components";
import { EyeOutlined as p } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../General/Button/index.js";
import { KitTypography as l } from "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import "../Avatar/index.js";
import "../Badge/index.js";
import "../Card/index.js";
import "./index.js";
import { KitImage as d } from "../Image/index.js";
import "../ItemList/index.js";
import "../Tooltip/index.js";
import "../Tree/index.js";
import "../Tabs/index.js";
import "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import { KitTag as c } from "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
import "../../DataEntry/DatePicker/index.js";
import "../../DataEntry/AutoComplete/index.js";
const s = n.div`
    display: grid;
    grid-template: 'icon image content tag';
    grid-template-columns: min-content min-content min-content min-content;
    align-items: center;
    max-height: 90px;

    .kit-collapse-header-icon {
        padding: 5px;
        grid-area: icon;
    }

    .kit-collapse-header-image {
        padding: 0 8px;
        margin-left: 8px;
        grid-area: image;
    }

    .kit-collapse-header-content {
        margin-left: 8px;
        grid-area: content;
        width: max-content;
        display: grid;
        grid-template: 'title' 'description';

        &.kit-collapse-header-content-rows {
            grid-row-gap: 10px;
        }

        .kit-collapse-header-content-title {
            grid-area: title;
        }

        .kit-collapse-header-content-description {
            grid-area: description;
        }
    }

    .kit-collapse-header-tag {
        margin-left: 8px;
        grid-area: tag;
    }
`, g = ({ icon: t, imageSrc: r, title: i, description: a, tagContent: o }) => e.createElement(s, null, t !== void 0 && e.createElement("div", { className: "kit-collapse-header-icon" }, t), r !== void 0 && e.createElement("div", { className: "kit-collapse-header-image", onClick: (m) => m.stopPropagation() }, e.createElement(d, { src: r, style: { maxHeight: "90px", width: "auto" }, preview: { mask: e.createElement(p, null) } })), (t = "kit-collapse-header-content", t += i !== void 0 && a !== void 0 ? " kit-collapse-header-content-rows" : "", (i !== void 0 || a !== void 0) && e.createElement("div", { className: t }, i !== void 0 && e.createElement(l.Text, { className: "kit-collapse-header-content-title", size: "large", weight: "medium", ellipsis: { rows: 1, tooltip: !0 } }, i), a !== void 0 && e.createElement(l.Text, { className: "kit-collapse-header-content-description", size: "large", weight: "regular", ellipsis: { rows: 1, tooltip: !0 } }, a))), o !== void 0 && e.createElement("div", { className: "kit-collapse-header-tag" }, e.createElement(c, null, o)));
g.displayName = "KitHeader";
export {
  g as KitHeader,
  g as default
};
