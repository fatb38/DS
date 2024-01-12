import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components';
import {IKitMenuInfo, IKitHeaderExtra} from './types';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitButton} from '@kit/General/';
import {KitDropDown} from '@kit/Navigation/';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {convertToPixel} from '@theme/utils/convert';
import {spacingCssTokens} from '@theme/aristid/general/spacing';

const StyledHeaderExtra = styled.div`
    display: grid;
    grid-template: 'checkbox actions';

    .kit-collapse-header-extra-checkbox {
        grid-area: checkbox;
        align-self: center;
    }

    .kit-collapse-header-extra-actions {
        padding-left: ${convertToPixel(spacingCssTokens.s)};
        grid-area: actions;
        display: grid;
        grid-template-columns: auto auto;

        > div:nth-child(2) {
            margin-left: ${convertToPixel(spacingCssTokens.s)};
        }
    }
`;

export const KitHeaderExtra: FunctionComponent<IKitHeaderExtra> = ({actions}) => {
    const [showMoreTooltip, setShowMoreTooltip] = useState(false);

    const _getMoreActionsDropDownItems = (): MenuItemType[] | undefined => {
        if (actions === undefined || actions.length === 0) {
            return undefined;
        }

        const newActions = [...actions];

        // Remove first action because we don't want it to be duplicated
        newActions.splice(0, 1);

        const dropDownActions = newActions.map((item, index) => ({
            key: index,
            icon: item.icon,
            label: item.label,
            onClick: (e: IKitMenuInfo) => item.onClick && item.onClick(e)
        }));

        return dropDownActions;
    };

    const _getActions = () => {
        if (actions !== undefined) {
            const firstAction = actions[0] ? actions[0] : null;
            const secondAction = actions.length <= 2 && actions[1] ? actions[1] : null;

            return (
                actions?.length && (
                    <div className="kit-collapse-header-extra-actions">
                        {firstAction && (
                            <KitTooltip title={firstAction.label}>
                                <KitButton
                                    icon={firstAction.icon}
                                    onClick={e => {
                                        e.stopPropagation();
                                        firstAction.onClick && firstAction.onClick(e);
                                    }}
                                />
                            </KitTooltip>
                        )}
                        {secondAction && (
                            <KitTooltip title={secondAction.label}>
                                <KitButton
                                    icon={secondAction.icon}
                                    onClick={e => {
                                        e.stopPropagation();
                                        secondAction.onClick !== undefined && secondAction.onClick(e);
                                    }}
                                />
                            </KitTooltip>
                        )}
                        {actions.length > 2 && (
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                }}
                            >
                                <KitDropDown
                                    menu={{
                                        items: _getMoreActionsDropDownItems()
                                    }}
                                    trigger={['click']}
                                    onOpenChange={() => setShowMoreTooltip(false)}
                                >
                                    <KitTooltip title="More" open={showMoreTooltip} onOpenChange={setShowMoreTooltip}>
                                        <KitButton icon={<FontAwesomeIcon icon={faEllipsisVertical} />} />
                                    </KitTooltip>
                                </KitDropDown>
                            </div>
                        )}
                    </div>
                )
            );
        }
    };

    return <StyledHeaderExtra>{_getActions()}</StyledHeaderExtra>;
};

KitHeaderExtra.displayName = 'KitHeaderExtra';

export default KitHeaderExtra;
