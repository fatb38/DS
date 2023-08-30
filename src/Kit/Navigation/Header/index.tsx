import React, {useMemo} from 'react';
import styled from 'styled-components';
import theme from './theme';
import {PlusOutlined, SearchOutlined} from '@ant-design/icons';
import {KitTypography, KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {KitInput} from '@kit/DataEntry/';
import {HeaderProps} from './types';

const StyledHeaderWrapper = styled.div`
    padding: 16px 32px;
    background: ${theme.backgroundColor};
    display: grid;
    grid-template-areas:
        'breadcrumb breadcrumb breadcrumb'
        'title search actions';
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: 1fr min-content;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    min-height: 40px;

    .kit-header-title {
        grid-area: title;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        align-self: center;
        margin: 0;
        margin-right: 32px;
    }

    .kit-header-search {
        grid-area: search;
        max-width: 422px;

        input::placeholder {
            color: ${theme.inputColor};
        }
    }

    .kit-header-breadcrumb {
        grid-area: breadcrumb;
        padding-top: 8px;
    }

    .kit-header-actions {
        grid-area: actions;
        flex: 1 1 auto;
        align-items: center;
        justify-content: end;
        display: flex;
        padding-left: 8px;
    }

    .kit-header-plus-button {
        width: 40px;
    }

    .kit-header-action-select {
        min-width: 75px;
    }
`;

const getActions = (actions, onPlusClick) => {
    if (!actions && !onPlusClick) {
        return null;
    }

    const cloneActions = actions
        ? actions.map((action, index) => {
              switch (action.type.displayName) {
                  case 'KitButton':
                      return React.cloneElement(action, {
                          type: 'segmented',
                          subtypeSegmented: 'gray',
                          bigIcon: true,
                          key: index,
                          ...action.props
                      });
                  default:
                      return null;
              }
          })
        : null;

    return (
        <div className="kit-header-actions">
            <KitSpace>
                {cloneActions}
                {onPlusClick && (
                    <KitButton
                        type="primary"
                        className="kit-header-plus-button"
                        bigIcon={true}
                        onClick={onPlusClick}
                        icon={<PlusOutlined />}
                    />
                )}
            </KitSpace>
        </div>
    );
};

export const KitHeader: React.FunctionComponent<HeaderProps> = ({
    title,
    search,
    breadcrumb,
    actions,
    onPlusClick,
    ...props
}) => {
    const breadcrumbToDisplay = breadcrumb
        ? React.cloneElement(breadcrumb, {
              className: 'kit-header-breadcrumb'
          })
        : null;

    const actionsToDisplay = useMemo(() => {
        return getActions(actions, onPlusClick);
    }, [actions, onPlusClick]);

    return (
        <StyledHeaderWrapper {...props}>
            {title && (
                <KitTypography.Title level={2} className="kit-header-title">
                    {title}
                </KitTypography.Title>
            )}
            {search && (
                <div className="kit-header-search">
                    <KitInput {...search} prefix={<SearchOutlined rev="" />} />
                </div>
            )}
            {breadcrumbToDisplay}
            {actionsToDisplay}
        </StyledHeaderWrapper>
    );
};

KitHeader.displayName = 'KitHeader';
