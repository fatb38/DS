import a from "react";
import { Radio as i } from "antd";
import l from "styled-components";
import r from "./theme.js";
const c = l(i)`
    font-weight: ${r.fontWeight.default};

    // Uncheked
    .ant-radio {
        .ant-radio-inner {
            border: ${r.borderWidth} solid ${r.borderColor.default};
            background-color: ${r.backgroundColor.default};
        }

        .ant-radio-inner:after {
            transform: scale(0.5);
            visibility: hidden;
            background-color: ${r.bulletColor.default};
        }
    }

    &.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: ${r.borderWidth} solid ${r.borderColor.disabled};
        background-color: ${r.backgroundColor.disabled};

        &:after {
            background-color: ${r.bulletColor.disabled};
        }
    }

    &.ant-radio-wrapper-danger .ant-radio {
        .ant-radio-inner {
            border: ${r.borderWidth} solid ${r.borderColor.danger.default};
            background-color: ${r.backgroundColor.danger.default};

            &:after {
                background-color: ${r.bulletColor.danger.default};
            }
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${r.borderColor.danger.hover};
            background-color: ${r.backgroundColor.danger.hover};

            &:after {
                background-color: ${r.bulletColor.danger.hover};
            }
        }
    }

    &.ant-radio-wrapper-danger.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: ${r.borderWidth} solid ${r.borderColor.danger.default};
        background-color: ${r.backgroundColor.danger.default};

        &:after {
            background-color: ${r.bulletColor.danger.default};
        }
    }

    &:not(.ant-radio-wrapper-danger):not(.ant-radio-wrapper-disabled) {
        .ant-radio-checked .ant-radio-inner {
            border-color: ${r.borderColor.checked};
            background-color: ${r.backgroundColor.checked};
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${r.borderColor.hover};
            background-color: ${r.backgroundColor.hover};

            &:after {
                background-color: ${r.bulletColor.hover};
            }
        }
    }

    .ant-radio-checked .ant-radio-inner:after {
        visibility: visible;
    }

    // Focus
    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus + .ant-radio-inner {
        border-style: dashed;
    }

    // active

    &:not(.ant-radio-wrapper-danger) {
        .ant-radio-disabled + span {
            color: ${r.color.disabled};
        }
    }

    .ant-radio-disabled {
        color: ${r.color.disabled};
    }

    &.ant-radio-wrapper-danger {
        .ant-radio {
            &.ant-radio-disabled + span {
                color: ${r.color.danger.disabled};
            }
        }
    }

    .ant-radio-checked + span {
        font-weight: ${r.fontWeight.checked};
    }
`, f = a.forwardRef((d, e) => {
  let { className: o, danger: n, ...t } = d;
  return a.createElement(c, { ref: e, className: n ? (o || "") + " ant-radio-wrapper-danger" : o, ...t });
});
export {
  f as default
};
//# sourceMappingURL=Radio.js.map
