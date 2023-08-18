import n, { createGlobalStyle as i, css as r } from "styled-components";
import t, { headerTheme as o } from "./theme.js";
const s = n.div`
    box-sizing: border-box;
    min-width: ${t.optionHeight}px;
    width: ${t.optionHeight}px;
    height: ${t.optionHeight}px;
    padding: ${t.optionHeight / 4}px;

    div {
        width: ${t.optionHeight / 2}px;
        height: ${t.optionHeight / 2}px;
        border-radius: 2px;
    }
`, a = n.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
`, c = i`
    &.kit-header-select-droppdown {
        .ant-select-dropdown {
            font-family: ${o.fontFamily};
            font-weight: ${o.fontWeight};
            color: ${o.itemsColor};

            .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
                border-radius: ${o.borderRadius} 0 0 ${o.borderRadius};
                min-height: ${o.optionHeight}px;
                font-weight: ${o.fontWeight};
                color: ${o.itemsColor};
            }

            .ant-select-item-group {
                color: ${o.groupsColor};
                font-weight: ${o.groupsFontWeight};
            }
        }
        .kit-select-dropdown-content {
            background-color: ${o.dropdownBgColor};
            background: red !important;
            padding-left: 0;
            padding-bottom: 0;

            .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
                background: ${o.selectedOptionBg};
                font-weight: ${o.fontWeight};
                color: ${o.itemsColor};
            }
            .ant-select-item.ant-select-item-option-active {
                color: ${o.selectedItemColor};
            }
        }

        .kit-select-dropdown-bottom {
            .kit-select-dropdown-content {
                border-radius: 0 0 ${o.borderRadius} ${t.borderRadius} ;
            }

            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content {
                border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;
            }
        }

        .kit-select-dropdown-top {
            .kit-select-dropdown-content {
                border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;
            }

            &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content {
                border-radius: 0 0 ${o.borderRadius} ${o.borderRadius} ;
            }
        }
    }


    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${t.fontFamily};
        font-weight: ${t.fontWeight};
        color: ${t.itemsColor};
        ;
        .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
            border-radius: ${t.borderRadius};
            border: none;
            min-height: ${t.optionHeight}px;
            font-weight: ${t.fontWeight};
            color: ${t.itemsColor};

            .ant-select-item-option-content {
                display: flex;
                align-items: center;
            }
        }


        .ant-select-item-group {
            color: ${t.groupsColor};
            font-weight: ${t.groupsFontWeight};
        }
    }

    .kit-select-dropdown-content {
        background-color: ${t.dropdownBgColor};
        padding-left: 10px;
        padding-bottom: 10px;
        overflow: hidden;

        .ant-select-item.ant-select-item-option {
            padding: 0;
            margin: 0;
            border: none;
            background: transparent;

            &:not(:last-child) {
                margin-bottom: 5px;
            }

            .kit-icon {
                box-sizing: border-box;
                height: ${t.optionHeight}px;
                width: ${t.optionHeight}px;
                text-align: center;
            }
        }
        .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
            background: ${t.selectedOptionBg};
            font-weight: ${t.fontWeight};
            color: ${t.itemsColor};
        }

        .ant-select-item.ant-select-item-option-disabled {
            opacity: .5;
        }

        .ant-select-item.ant-select-item-option-active {
            color: ${t.selectedItemColor};
        }
    }

    .kit-select-dropdown-bottom {
        .kit-select-dropdown-content {
            border-radius: 0 0 ${t.borderRadius} ${t.borderRadius} ;
            transform: translateY(-5px);
        }

        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content {
            border-radius: ${t.borderRadius} ${t.borderRadius} 0 0 ;
        }
    }

    .kit-select-dropdown-top {
        .kit-select-dropdown-content {
            border-radius: ${t.borderRadius} ${t.borderRadius} 0 0 ;
            transform: translateY(5px);
        }

        &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content {
            border-radius: 0 0 ${t.borderRadius} ${t.borderRadius} ;
        }
    }
`, p = r`
    &.ant-select.ant-select-compact-item:not(.ant-select-compact-last-item) {
        margin-inline-end: 0px;
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) {
        .ant-select-selector {
            box-shadow: none;
        }
    }

    &.ant-select-open {
        &:not(.ant-select-compact-item) {
            &.ant-select-bottom .ant-select-selector {
                border-radius: ${(e) => e.theme.borderRadius} ${(e) => e.theme.borderRadius} 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 ${(e) => e.theme.borderRadius} ${(e) => e.theme.borderRadius};
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom .ant-select-selector {
                border-radius: ${(e) => e.theme.borderRadius} 0 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 0 ${(e) => e.theme.borderRadius};
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
        padding: 8px 10px;

        .ant-select-selection-item,
        .ant-select-selection-placeholder {
            display: flex;
            align-items: center;
            font-weight: ${(e) => e.theme.selectionFontWeight};
            color: ${(e) => e.theme.selectionColor};

            & .anticon,
            & .kit-icon {
                background-color: transparent;
                height: ${t.optionHeight};
            }
        }

        .ant-select-arrow {
            color: ${(e) => e.theme.selectionColor};
        }

        &.ant-select:not(.ant-select-customize-input).ant-select-disabled {
            .ant-select-selector {
                background-color: ${(e) => e.theme.disabledBgColor};
                color: ${(e) => e.theme.disabledColor};

                .ant-select-selection-item {
                    color: ${(e) => e.theme.disabledColor};
                }
            }
            .ant-select-arrow {
                color: ${(e) => e.theme.disabledColor};
            }

            .anticon {
                color: ${(e) => e.theme.disabledColor};
            }
        }

        &.ant-header-action-select {
            font-weight: ${(e) => e.theme.headerSelectionFontWeight};
            color: ${(e) => e.theme.selectionColor};
        }

        .ant-select-selection-item {
            color: ${(e) => e.theme.selectionColor};
        }
    }
`;
export {
  c as DropDownStyle,
  p as KitSelectStyle,
  s as StyledBadge,
  a as StyledLabel
};
