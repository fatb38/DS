import r from "react";
import { Button as m } from "antd";
import { styled as s, css as h } from "styled-components";
import { primaryTheme as d, defaultTheme as u, segmentedTheme as g, segmentedGrayTheme as p, segmentedGreenTheme as $, linkTheme as k } from "./theme.js";
import { CheckCircleFilled as f } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
const v = s(m)`
    height: 40px;
    min-width: 40px;
    box-shadow: none;
    color: ${(e) => e.theme.color.default};
    background-color: ${(e) => e.theme.backgroundColor.default};
    border-color: ${(e) => e.theme.borderColor.default};
    font-weight: ${(e) => e.theme.font.weight};

    &.ant-btn.ant-btn-icon-only,
    &.ant-btn {
        .anticon {
            ${(e) => e.$bigIcon && h`
                    padding: 0;
                    font-size: ${e.theme.font.bigIconSize}px;
                `}
        }
    }

    &.ant-btn-primary.ant-btn-background-ghost {
        color: ${(e) => e.theme.backgroundColor.default};
        background-color: ${(e) => e.theme.color.default};
    }

    + .kit-btn-segmented-active-icon {
        position: absolute;
        z-index: 2;
        bottom: 6px;
        right: 5px;
        font-size: 12px;
        color: ${(e) => e.theme.color.iconCheck};
    }

    &.kit-btn-segmented {
        border-radius: 10px;

        &.kit-btn-segmented-active:not(.ant-btn-dangerous) {
            color: ${(e) => e.theme.color.active};
            background-color: ${(e) => e.theme.backgroundColor.active};
            border-color: ${(e) => e.theme.borderColor.active};
            z-index: 2;

            &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
                &:hover {
                    background-color: ${(e) => e.theme.backgroundColor.active};
                    color: ${(e) => e.theme.color.active};
                }
            }
        }

        &.kit-btn-segmented-active.ant-btn-dangerous {
            color: ${(e) => e.theme.color.danger.default};
            background-color: ${(e) => e.theme.backgroundColor.danger.active};
            border-color: ${(e) => e.theme.borderColor.danger.active};

            &:not(.ant-btn-loading):not(:disabled) {
                &:hover {
                    background-color: ${(e) => e.theme.backgroundColor.danger.active};
                }
            }
        }

        &:disabled {
            cursor: not-allowed;
        }
    }

    &.ant-btn-compact-item {
        border-radius: 0;

        &.ant-btn-compact-first-item {
            border-radius: ${(e) => e.theme.compactBorderRadius}px 0 0
                ${(e) => e.theme.compactBorderRadius}px;
        }

        &.ant-btn-compact-last-item {
            border-radius: 0 ${(e) => e.theme.compactBorderRadius}px ${(e) => e.theme.compactBorderRadius}px
                0;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${(e) => e.theme.compactBorderRadius}px;
        }
    }

    &.ant-btn-compact-vertical-item {
        border-radius: 0;

        &.ant-btn-compact-vertical-first-item {
            border-radius: ${(e) => e.theme.compactBorderRadius}px ${(e) => e.theme.compactBorderRadius}px 0
                0;
        }

        &.ant-btn-compact-vertical-last-item {
            border-radius: 0 0 ${(e) => e.theme.compactBorderRadius}px
                ${(e) => e.theme.compactBorderRadius}px;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${(e) => e.theme.compactBorderRadius}px;
        }
    }

    &:disabled,
    &.ant-btn-loading {
        color: ${(e) => e.theme.color.disabled};
        background-color: ${(e) => e.theme.backgroundColor.disabled};
        border-color: ${(e) => e.theme.borderColor.disabled};
        opacity: initial;

        &:hover {
            color: ${(e) => e.theme.color.disabled};
            background-color: ${(e) => e.theme.backgroundColor.disabled};
            border-color: ${(e) => e.theme.borderColor.disabled};
        }
    }

    &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
        &:hover {
            color: ${(e) => e.theme.color.hover};
            background-color: ${(e) => e.theme.backgroundColor.hover};
            border-color: ${(e) => e.theme.borderColor.hover};
            border-style: solid;
        }

        &:focus {
            color: ${(e) => e.theme.color.focus};
            background-color: ${(e) => e.theme.backgroundColor.focus};
            border-color: ${(e) => e.theme.borderColor.focus};
            border-style: dashed;
        }

        &:active {
            color: ${(e) => e.theme.color.active};
            background-color: ${(e) => e.theme.backgroundColor.active};
            border-color: ${(e) => e.theme.borderColor.active};
            border-style: solid;
        }
    }

    &.ant-btn-link {
        height: 22px;
        padding: 0px;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid ${(e) => e.theme.borderColor.default};

        &:disabled {
            border-bottom: none;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${(e) => e.theme.color.default};
                border-bottom: 1px dashed ${(e) => e.theme.borderColor.hover};
            }

            &:focus {
                border-bottom: 1px dashed ${(e) => e.theme.borderColor.focus};
            }

            &:active {
                border-bottom: 1px dashed ${(e) => e.theme.borderColor.active};
            }
        }
    }

    &.ant-btn-dangerous {
        box-shadow: none;
        color: ${(e) => e.theme.color.danger.default};
        background-color: ${(e) => e.theme.backgroundColor.danger.default};
        border-color: ${(e) => e.theme.borderColor.danger.default};

        &:disabled {
            color: ${(e) => e.theme.color.danger.disabled};
            background-color: ${(e) => e.theme.backgroundColor.danger.disabled};
            border-color: ${(e) => e.theme.borderColor.danger.disabled};
            opacity: initial;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${(e) => e.theme.color.danger.default};
                background-color: ${(e) => e.theme.backgroundColor.danger.hover};
                border-color: ${(e) => e.theme.borderColor.danger.hover};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:focus {
                color: ${(e) => e.theme.color.danger.default};
                background-color: ${(e) => e.theme.backgroundColor.danger.focus};
                border-color: ${(e) => e.theme.borderColor.danger.focus};
                border-style: dashed;

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:active {
                color: ${(e) => e.theme.color.danger.default};
                background-color: ${(e) => e.theme.backgroundColor.danger.active};
                border-color: ${(e) => e.theme.borderColor.danger.active};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }
        }
    }
`, C = ({ bigIcon: e, primaryModal: t, type: o, subtypeSegmented: a, isCheckedSegmented: n, isActiveSegmented: c, className: l, ...i }, b) => r.createElement("div", { style: { position: "relative", width: "fit-content" } }, r.createElement(v, { ...i, className: (l || "") + (o === "segmented" ? " kit-btn-segmented" : "") + (c ? " kit-btn-segmented-active" : ""), $bigIcon: e, ghost: t, theme: (() => {
  if (t)
    return d;
  switch (o) {
    case "primary":
      return d;
    case "link":
      return k;
    case "segmented":
      switch (a) {
        case "green":
          return $;
        case "gray":
          return p;
        default:
          return g;
      }
    default:
      return u;
  }
})(), type: (() => {
  if (t)
    return "primary";
  switch (o) {
    case "segmented":
    default:
      return "default";
    case "primary":
    case "link":
    case "default":
      return o;
  }
})(), ref: b }), o === "segmented" && n && r.createElement(f, { className: "kit-btn-segmented-active-icon" })), x = r.forwardRef(C);
x.displayName = "KitButton";
export {
  x as KitButton
};
//# sourceMappingURL=index.js.map
