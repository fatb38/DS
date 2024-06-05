import {FunctionComponent} from 'react';
import {IKitSideMenuItemComponent} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import useSecureClick from '@hooks/useSecureClick';
import cn from 'classnames';

import styles from './styles.module.scss';
import {KitTypography} from '@kit/General';
import {KitTooltip} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons';

const KitSideMenuItem: FunctionComponent<IKitSideMenuItemComponent> = ({
    type = 'default',
    itemKey = '',
    title,
    icon,
    disabled,
    large,
    active,
    onClick,
    disabledSecureClick,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();

    const _handleClickItem = (e: MouseEvent) => {
        e.stopPropagation();
        onClick && onClick(itemKey);
    };

    const _handleClickItemSecured = useSecureClick(_handleClickItem);

    const _getContent = () => {
        const clx = cn(
            appId,
            styles['kit-side-menu-item'],
            {
                large: large,
                active: active,
                clickable: onClick && !disabled,
                disabled: disabled
            },
            className
        );

        return (
            <li
                {...props}
                data-role="menuitem"
                onClick={disabledSecureClick ? _handleClickItem : _handleClickItemSecured}
                className={clx}
            >
                <div className="icon">{icon ?? <FontAwesomeIcon icon={faFile} />}</div>
                {large && (
                    <div className="title">
                        <KitTypography.Text size="large" weight="medium" ellipsis>
                            {title}
                        </KitTypography.Text>
                    </div>
                )}
            </li>
        );
    };

    if (type === 'separator') {
        return <li className={`${appId} ${styles['kit-side-menu-separator']}`} />;
    }

    return large ? _getContent() : <KitTooltip title={title}>{_getContent()}</KitTooltip>;
};

export default KitSideMenuItem;
