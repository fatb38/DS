import cn from 'classnames';
import styles from './styles.module.scss';
import {forwardRef} from 'react';
import {Tag} from 'antd';
import {IKitTag} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {KitIdCard} from '../IdCard';

export const InternalTag = forwardRef<HTMLElement, IKitTag>(
    ({className, closeIcon, type = 'neutral', disabled, onClick, idCardProps, ...tagProps}, ref) => {
        const {appId} = useKitTheme();

        const clx = cn(appId, styles['kit-tag'], className, {
            [`kit-tag-${type}`]: type,
            [`kit-tag-disabled`]: disabled,
            [`kit-tag-clickable`]: onClick
        });

        return (
            <Tag
                tabIndex={disabled ? -1 : 0}
                ref={ref}
                {...tagProps}
                className={clx}
                closeIcon={closeIcon ?? <FontAwesomeIcon icon={faXmark} />}
                onClick={onClick}
                closable={!!tagProps.onClose}
            >
                <KitIdCard
                    disabled={disabled}
                    avatarProps={idCardProps?.avatarProps ? {...idCardProps?.avatarProps, size: 'small'} : undefined}
                    description={idCardProps?.description}
                />
            </Tag>
        );
    }
);
