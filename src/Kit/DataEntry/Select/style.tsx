import styled, {createGlobalStyle, css} from 'styled-components';
import theme, {headerTheme} from './theme';

export const StyledBadge = styled.div`
    box-sizing: border-box;
    min-width: ${theme.optionHeight}px;
    width: ${theme.optionHeight}px;
    height: ${theme.optionHeight}px;
    padding: ${theme.optionHeight / 4}px;

    div {
        width: ${theme.optionHeight / 2}px;
        height: ${theme.optionHeight / 2}px;
        border-radius: 2px;
    }
`;

export const StyledLabel = styled.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
`;

export const getPopupStyle = placement => {
    switch (placement) {
        case 'topLeft':
        case 'topRight':
            return {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                transform: 'translateY(15px)'
            };
        default:
            return {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                transform: 'translateY(-1px)'
            };
    }
};

export const DropDownStyle = createGlobalStyle`
    &.kit-header-select-droppdown {
        .ant-select-dropdown {
            font-family: ${headerTheme.fontFamily};
            font-weight: ${headerTheme.fontWeight};
            color: ${headerTheme.itemsColor};

            .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
                border-radius: ${headerTheme.borderRadius} 0 0 ${headerTheme.borderRadius};
                min-height: ${headerTheme.optionHeight}px;
                font-weight: ${headerTheme.fontWeight};
                color: ${headerTheme.itemsColor};
            }

            .ant-select-item-group {
                color: ${headerTheme.groupsColor};
                font-weight: ${headerTheme.groupsFontWeight};
            }
        }
        .kit-select-dropdown-content, .rc-virtual-list-holder {
            background-color: ${headerTheme.dropdownBgColor};
            background: red !important;
            padding-left: 0;
            padding-bottom: 0;

            .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
                background: ${headerTheme.selectedOptionBg};
                font-weight: ${headerTheme.fontWeight};
                color: ${headerTheme.itemsColor};
            }
            .ant-select-item.ant-select-item-option-active {
                color: ${headerTheme.selectedItemColor};
            }
        }

        .kit-select-dropdown-bottom {
            .kit-select-dropdown-content, .rc-virtual-list-holder {
                border-radius: 0 0 ${headerTheme.borderRadius} ${theme.borderRadius} ;
            }

            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
            &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
                border-radius: ${headerTheme.borderRadius} ${headerTheme.borderRadius} 0 0 ;
            }
        }

        .kit-select-dropdown-top {
            .kit-select-dropdown-content, .rc-virtual-list-holder {
                border-radius: ${headerTheme.borderRadius} ${headerTheme.borderRadius} 0 0 ;
            }

            &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
            &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
                border-radius: 0 0 ${headerTheme.borderRadius} ${headerTheme.borderRadius} ;
            }
        }
    }


    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${theme.fontFamily};
        font-weight: ${theme.fontWeight};
        color: ${theme.itemsColor};
        ;
        .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
            border-radius: ${theme.borderRadius};
            border: none;
            min-height: ${theme.optionHeight}px;
            font-weight: ${theme.fontWeight};
            color: ${theme.itemsColor};

            .ant-select-item-option-content {
                display: flex;
                align-items: center;
            }
        }


        .ant-select-item-group {
            color: ${theme.groupsColor};
            font-weight: ${theme.groupsFontWeight};
        }
    }

    .rc-virtual-list-holder {
        background-color: ${theme.dropdownBgColor};
        padding-left: 0px;
        overflow: hidden;
        border-radius: ${theme.borderRadius} ;

        .ant-select-item.ant-select-item-option {
            padding-left: 10px;
        }
    }

    .kit-select-dropdown-content {
        background-color: ${theme.dropdownBgColor};
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
                height: ${theme.optionHeight}px;
                width: ${theme.optionHeight}px;
                text-align: center;
            }
        }
        .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
            background: ${theme.selectedOptionBg};
            font-weight: ${theme.fontWeight};
            color: ${theme.itemsColor};
        }

        .ant-select-item.ant-select-item-option-disabled {
            opacity: .5;
        }

        .ant-select-item.ant-select-item-option-active {
            color: ${theme.selectedItemColor};
        }
    }

    .kit-select-dropdown-bottom {
        .kit-select-dropdown-content {
            border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius} ;
            transform: translateY(-5px);
        }

        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
            border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0 ;
        }
    }

    .kit-select-dropdown-top {
        .kit-select-dropdown-content {
            border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0 ;
            transform: translateY(5px);
        }

        &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
            border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius} ;
        }
    }
`;

export const KitSelectStyle = css`
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
                border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom .ant-select-selector {
                border-radius: ${props => props.theme.borderRadius} 0 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 0 ${props => props.theme.borderRadius};
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
        padding: 8px 10px;

        .ant-select-selection-item,
        .ant-select-selection-placeholder {
            display: flex;
            align-items: center;
            font-weight: ${props => props.theme.selectionFontWeight};
            color: ${props => props.theme.selectionColor};

            & .anticon,
            & .kit-icon {
                background-color: transparent;
                height: ${theme.optionHeight};
            }
        }

        .ant-select-arrow {
            color: ${props => props.theme.selectionColor};
        }

        &.ant-select:not(.ant-select-customize-input).ant-select-disabled {
            .ant-select-selector {
                background-color: ${props => props.theme.disabledBgColor};
                color: ${props => props.theme.disabledColor};

                .ant-select-selection-item {
                    color: ${props => props.theme.disabledColor};
                }
            }
            .ant-select-arrow {
                color: ${props => props.theme.disabledColor};
            }

            .anticon {
                color: ${props => props.theme.disabledColor};
            }
        }

        &.ant-header-action-select {
            font-weight: ${props => props.theme.headerSelectionFontWeight};
            color: ${props => props.theme.selectionColor};
        }

        .ant-select-selection-item {
            color: ${props => props.theme.selectionColor};
        }
    }
`;
