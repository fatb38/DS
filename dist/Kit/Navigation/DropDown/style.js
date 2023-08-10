import { createGlobalStyle as n } from "styled-components";
import o from "../../DataEntry/Select/theme.js";
const e = n`
    &.ant-dropdown .ant-dropdown-menu {
        background-color: ${o.dropdownBgColor};
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${o.fontFamily};
        font-weight: ${o.fontWeight};
        color: ${o.selectionColor};

        .ant-dropdown-menu-item, .ant-dropdown-menu-item-option, .ant-dropdown-menu-item-option-selected {
            background: transparent;
            border-radius: 0;
            border: none;
            min-height: ${o.optionHeight}px;
            font-weight: ${o.fontWeight};
            color: ${o.selectionColor};

            &:hover {
                background: ${o.selectedOptionBg};
                font-weight: ${o.fontWeight};
                color: ${o.selectionColor};
            }

            a {
                font-weight: ${o.fontWeight} !important;
            }
        }
    }
    &.ant-dropdown-placement-top .ant-dropdown-menu
    &.ant-dropdown-placement-topLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-topRight .ant-dropdown-menu {
        border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;

        .ant-dropdown-menu-item:first-child {
            border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;
        }
    }

    &.ant-dropdown-placement-bottom .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomRight .ant-dropdown-menu {
        border-radius: 0 0 ${o.borderRadius} ${o.borderRadius} ;

        .ant-dropdown-menu-item:last-child {
            border-radius: 0 0 ${o.borderRadius} ${o.borderRadius} ;
        }
    }
`;
export {
  e as DropDownStyle
};
//# sourceMappingURL=style.js.map
