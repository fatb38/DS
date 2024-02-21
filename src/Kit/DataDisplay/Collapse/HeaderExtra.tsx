import React, {FunctionComponent, useState} from 'react';
import type {MouseEvent} from 'react';
import {IKitMenuInfo, IKitHeaderExtra, IKitHeaderExtraActions, IKitHeaderExtraMoreActions} from './types';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitButton} from '@kit/General/';
import {KitDropDown} from '@kit/Navigation/';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {useKitLocale} from '@translation/useKitLocale';

import styles from './styles.module.scss';

const HeaderExtraActions: FunctionComponent<IKitHeaderExtraActions> = ({actions, disabled}) => {
    const [showMoreTooltip, setShowMoreTooltip] = useState(false);
    const {locale} = useKitLocale();

    const firstAction = actions[0] ? actions[0] : null;
    const secondAction = actions.length <= 2 && actions[1] ? actions[1] : null;

    return (
        <div className="kit-collapse-header-extra-actions">
            {firstAction && (
                <KitTooltip title={firstAction.label} open={disabled ? false : undefined}>
                    <KitButton
                        icon={firstAction.icon}
                        disabled={disabled}
                        onClick={(e: MouseEvent<HTMLElement>) => {
                            e.stopPropagation();
                            firstAction.onClick && firstAction.onClick(e);
                        }}
                    />
                </KitTooltip>
            )}
            {secondAction && (
                <KitTooltip title={secondAction.label} open={disabled ? false : undefined}>
                    <KitButton
                        icon={secondAction.icon}
                        disabled={disabled}
                        onClick={(e: MouseEvent<HTMLElement>) => {
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
                            items: _getMoreActionsDropDownItems({actions})
                        }}
                        trigger={['click']}
                        onOpenChange={() => setShowMoreTooltip(false)}
                    >
                        <KitTooltip
                            title={locale.Collapse?.more}
                            open={disabled ? false : showMoreTooltip}
                            onOpenChange={setShowMoreTooltip}
                        >
                            <KitButton icon={<FontAwesomeIcon icon={faEllipsisVertical} />} disabled={disabled} />
                        </KitTooltip>
                    </KitDropDown>
                </div>
            )}
        </div>
    );
};

const _getMoreActionsDropDownItems = ({actions}: IKitHeaderExtraMoreActions): MenuItemType[] | undefined => {
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

export const KitHeaderExtra: FunctionComponent<IKitHeaderExtra> = ({actions, disabled = false}) => {
    return (
        <div className={`${styles['kit-collapse-header-extra']}`}>
            {actions !== undefined && <HeaderExtraActions actions={actions} disabled={disabled} />}
        </div>
    );
};

KitHeaderExtra.displayName = 'KitHeaderExtra';

export default KitHeaderExtra;
