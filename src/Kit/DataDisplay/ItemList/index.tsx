import React, {MouseEvent, useState, KeyboardEvent, forwardRef} from 'react';
import {IKitItemList} from './types';
import {KitCheckbox} from '@kit/DataEntry';
import {KitIdCard} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';
import {KitDropDown} from '@kit/Navigation';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitItemList = forwardRef<HTMLDivElement, IKitItemList>(
    (
        {idCardProps, draggableHandler, actions, content, onSelect, onClick, className, disabled = false, ...props},
        ref
    ) => {
        const {appId} = useKitTheme();

        const [isChecked, setIsChecked] = useState(false);

        const isSelectable = onSelect !== undefined;
        const isLessThanThreeActions = (actions ?? []).length <= 2;

        const _getCheckbox = () => {
            if (!isSelectable) return null;

            const onChange = () => {
                const newIsCheckedValue = !isChecked;
                setIsChecked(newIsCheckedValue);
                return onSelect(newIsCheckedValue);
            };

            return (
                <KitCheckbox
                    disabled={disabled}
                    checked={isChecked}
                    onClick={e => e.stopPropagation()}
                    onChange={onChange}
                    aria-label={idCardProps.title ?? idCardProps.description}
                />
            );
        };

        const _getActionButtons = () =>
            actions &&
            actions.length !== 0 && (
                <div className={styles['kit-item-list-buttons']} onClick={e => e.stopPropagation()}>
                    {isLessThanThreeActions ? (
                        <>
                            {actions.map(action => (
                                <KitButton
                                    disabled={action.disabled || disabled}
                                    key={action.key}
                                    type="tertiary"
                                    icon={action.icon}
                                    onClick={action.onClick}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <KitButton
                                disabled={disabled}
                                type="tertiary"
                                icon={actions[0].icon}
                                onClick={actions[0].onClick}
                            />
                            <KitDropDown disabled={disabled} menu={{items: actions.slice(1)}}>
                                <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faEllipsis} />} />
                            </KitDropDown>
                        </>
                    )}
                </div>
            );

        const _getContent = () => content && <div className={styles['kit-item-list-content']}>{content}</div>;

        const _handleClickItemList = (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
            e.stopPropagation();
            if (disabled) return;

            const isKeyUpEvent = (
                e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
            ): e is KeyboardEvent<HTMLDivElement> => 'key' in e;
            const enterKey = 'Enter';
            const spaceKey = ' ';

            if (e.type === 'click' || (isKeyUpEvent(e) && [enterKey, spaceKey].includes(e.key))) {
                if (onClick != null) {
                    return onClick();
                }
                if (onSelect != null) {
                    const newIsCheckedValue = !isChecked;
                    setIsChecked(newIsCheckedValue);
                    return onSelect(newIsCheckedValue);
                }
            }
        };

        const clx = cn(appId, styles['kit-item-list'], className, {
            [styles['kit-item-list-clickable']]: isSelectable || onClick != null,
            [styles['kit-item-list-selected']]: isChecked,
            'kit-item-list-disabled': disabled
        });

        return (
            <div
                aria-disabled={disabled}
                ref={ref}
                tabIndex={disabled ? -1 : 0}
                className={clx}
                onClick={_handleClickItemList}
                onKeyUp={_handleClickItemList}
                {...props}
            >
                {draggableHandler}
                {_getCheckbox()}
                <div className={styles['kit-item-list-id-card']}>
                    <KitIdCard {...idCardProps} disabled={disabled} />
                </div>
                {_getContent()}
                {_getActionButtons()}
            </div>
        );
    }
);

KitItemList.displayName = 'KitItemList';
