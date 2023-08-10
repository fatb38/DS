import e, { useState as x } from "react";
import w from "styled-components";
import y from "/builds/dev/design-system/node_modules/classnames/index.js";
import t from "./theme.js";
import v from "./ColorBar.js";
import { EditOutlined as C, EyeOutlined as E } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import { KitButton as N } from "../../General/Button/index.js";
import { KitTypography as c } from "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import { KitCheckbox as z } from "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import { KitTag as K } from "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
const B = w.div`
    display: grid;
    padding: ${t.cardPadding}px;
    font-family: 'Inter';

    background: ${t.backgroundColor};
    border-radius: ${t.borderRadius}px;
    box-shadow: ${t.shadow};
    min-width: 248px;
    width: 248px;
    border: 1px solid transparent;

    &:not(.kit-card-disabled):hover {
        border: 1px solid ${t.hoverBorderColor};
    }

    &:not(.kit-card-disabled) {
        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: ${t.selectIconFontSize};
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${t.selectIconColor};
        }
    }

    &.kit-card-disabled {
        background: ${t.disabledBackgroundColor};
        pointer-events: none;

        .kit-card-data {
            .kit-card-data-title,
            .kit-card-data-desc,
            .kit-card-data-footer {
                color: ${t.diabledTextColor};
            }
        }

        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: ${t.selectIconFontSize};
            background: ${t.disabledBackgroundColor};
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${t.diabledTextColor};
        }
    }

    &.kit-card-vertical {
        grid-template:
            'picto picto'
            'select colors'
            'content content';
        grid-template-columns: max-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-bottom: ${t.itemsMargin}px;
        }

        .kit-card-image,
        .kit-card-icon,
        .kit-card-icon .kit-icon {
            width: 100%;
            height: 80px;
        }

        .kit-card-select {
            grid-auto-columns: min-content;
            column-gap: 8px;
            margin-right: 8px;
            display: flex;
            flex-direction: row;
        }
    }

    &.kit-card-horizontal {
        grid-template: 'select picto colors content';
        grid-template-columns: min-content min-content min-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-right: ${t.itemsMargin}px;
        }

        .kit-card-select {
            grid-auto-rows: min-content;
            row-gap: 8px;
        }

        .kit-card-image,
        .kit-card-icon .kit-icon {
            width: 64px;
        }

        .kit-card-icon .kit-icon {
            height: 64px;
        }

        .kit-card-colorbar {
            height: 60px;
            flex-basis: 1fr;
        }
    }

    .kit-card-select,
    .kit-card-image,
    .kit-card-picto,
    .kit-card-colorbar {
        flex: 0 0 auto;
    }

    .kit-card-select {
        grid-area: select;
        display: grid;
    }

    .kit-card-image {
        grid-area: picto;
        height: 64px;
        border-radius: ${t.borderRadius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${t.imageBorderColor};

        .kit-card-image-image {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .kit-card-icon {
        grid-area: picto;
        height: 64px;
        width: 64px;
        border-radius: ${t.borderRadius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${t.imageBorderColor};

        &.noBorder {
            border-color: transparent;
        }

        .anticon {
            font-size: 2rem;
            text-align: center;
            width: 100%;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .kit-icon {
            padding: 0px;
        }
    }

    .kit-card-colorbar {
        grid-area: colors;
    }

    .kit-card-data {
        grid-area: content;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        > :not(:last-child) {
            margin-bottom: 5px;
        }

        .kit-card-description-container {
            position: relative;
        }

        .kit-card-data-title {
            font-size: ${t.text.title.fontSize}px;
            font-weight: ${t.text.title.fontWeight};
            color: ${t.text.title.color};
        }
        .kit-card-data-desc {
            font-size: ${t.text.description.fontSize}px;
            font-weight: ${t.text.description.fontWeight};
            color: ${t.text.description.color};

            .ant-typography-expand {
                visibility: hidden;
            }
        }
        .kit-card-data-footer {
            font-size: ${t.text.footer.fontSize}px;
            font-weight: ${t.text.footer.fontWeight};
            color: ${t.text.footer.color};
        }

        .kit-card-description-collexp {
            color: ${t.text.description.color};

            &:hover {
                color: ${t.text.description.moreLessHoverColor};
            }

            &.kit-card-description-collapse {
                float: right;
            }

            &.kit-card-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
`, S = (i) => {
  if (console.log(i), !i)
    return null;
  let r = !1, a = {}, d = "kit-card-icon";
  switch (i.type.displayName) {
    case "KitImage":
      a = { preview: { mask: e.createElement(E, null) }, width: "100%", height: "100%", rootClassName: (i.props.rootClassName || "") + " kit-card-image-image" }, d = "kit-card-image";
      break;
    case "KitIcon":
      r = !0, a = { on: !0 };
      break;
    case "KitAvatar":
      break;
    default:
      return null;
  }
  var s = e.cloneElement(i, a);
  return e.createElement("div", { className: d + " " + (r ? "noBorder" : "") }, s);
}, T = (i, r) => i ? i.map((a) => e.cloneElement(a, { type: "default", diasbled: r, className: `${a.props.className || ""} kit-card-select-button` })) : null, I = (i, r, a) => y(a, "kit-card-wrapper", { "kit-card-vertical": i, "kit-card-horizontal": !i, "kit-card-disabled": r }), P = ({ vertical: i, disabled: r, colors: a, picture: d, title: s, description: h, extrainfo: f, tags: m, actions: b, onSelectChange: n, onEdit: l, ...g }) => {
  const [p, k] = x(!1), [u, $] = x(!1);
  return e.createElement(B, { className: I(i, r, g.className || ""), ...g }, (n || l) && e.createElement("div", { className: "kit-card-select" }, n && e.createElement(z, { onChange: (o) => n && n(o), disabled: r }), l && e.createElement(N, { className: "kit-card-select-button", onClick: () => l && l(), disabled: r }, e.createElement(C, null)), T(b, r)), S(d), a && e.createElement(v, { colors: a, vertical: !i, className: "kit-card-colorbar" }), e.createElement("div", { className: "kit-card-data" }, e.createElement(c.Text, { className: "kit-card-data-title", ellipsis: { rows: 1, tooltip: !0 } }, s), e.createElement("div", { className: "kit-card-description-container" }, e.createElement(c.Paragraph, { className: "kit-card-data-desc", ellipsis: !p && { rows: 2, expandable: !0, onEllipsis: () => $(!0) } }, h, p && e.createElement(c.Link, { className: "kit-card-description-collexp kit-card-description-collapse", onClick: (o) => {
    o.stopPropagation(), k(!1);
  } }, "Less")), u && !p && e.createElement(c.Link, { className: "kit-card-description-collexp kit-card-description-expand", onClick: (o) => {
    o.stopPropagation(), k(!0);
  } }, "More")), e.createElement(c.Text, { className: "kit-card-data-footer" }, f), m && e.createElement("div", { className: "kit-card-tags" }, m.map((o) => e.createElement(K, { key: o, color: "blue" }, o)))));
};
P.displayName = "KitCard";
export {
  P as KitCard
};
//# sourceMappingURL=index.js.map
