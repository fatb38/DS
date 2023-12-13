import React, {FunctionComponent, ReactElement, ReactNode, cloneElement, useMemo} from 'react';
import styled from 'styled-components';
import {KitTypography, KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {KitInput} from '@kit/DataEntry/';
import {IKitHeader} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {kitHeaderCssTokens} from '@theme/aristid/components/Navigation/Header';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {IKitButton} from '@kit/General/Button/types';

const StyledHeaderWrapper = styled.div`
    padding: 16px 32px;
    background: var(${kitHeaderCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}));
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
            color: var(
                ${kitHeaderCssTokens.colors.typography.input.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
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

const _getActions = (actions?: IKitHeader['actions'], onPlusClick?: IKitHeader['onPlusClick']) => {
    if (!actions && !onPlusClick) {
        return null;
    }

    const cloneActions = actions
        ? actions.map<ReactNode>((action, index) => {
              switch (((action as ReactElement).type as FunctionComponent).displayName) {
                  case 'KitButton':
                      return React.cloneElement(
                          action as ReactElement<IKitButton>,
                          {
                              type: 'segmented',
                              key: index,
                              ...(action as ReactElement).props
                          } as IKitButton
                      );
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
                        onClick={onPlusClick}
                        icon={<FontAwesomeIcon icon={faPlus} />}
                    />
                )}
            </KitSpace>
        </div>
    );
};

export const KitHeader: FunctionComponent<IKitHeader> = ({
    title,
    search,
    breadcrumb,
    actions,
    onPlusClick,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();

    const breadcrumbToDisplay = breadcrumb
        ? cloneElement(breadcrumb, {
              className: 'kit-header-breadcrumb'
          })
        : null;

    const actionsToDisplay = useMemo(() => {
        return _getActions(actions, onPlusClick);
    }, [actions, onPlusClick]);

    return (
        <StyledHeaderWrapper {...props} className={`${appId} ${className ?? ''} `}>
            {title && (
                <KitTypography.Title level="h2" className="kit-header-title">
                    {title}
                </KitTypography.Title>
            )}
            {search && (
                <div className="kit-header-search">
                    <KitInput {...search} prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                </div>
            )}
            {breadcrumbToDisplay}
            {actionsToDisplay}
        </StyledHeaderWrapper>
    );
};

KitHeader.displayName = 'KitHeader';
