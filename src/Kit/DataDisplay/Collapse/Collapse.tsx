import React, {FunctionComponent, ReactElement, cloneElement} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {IKitCollapse} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const _getDefaultExpandIcon: FunctionComponent = () => <FontAwesomeIcon icon={faChevronDown} />;

export const KitCollapse: FunctionComponent<IKitCollapse> = ({
    className,
    expandIcon,
    items,
    collapsible,
    ...collapseProps
}) => {
    const {appId} = useKitTheme();

    if (collapsible === 'disabled') {
        items?.forEach(item => {
            if (item.label !== undefined) {
                const headerElement = item.label as ReactElement;
                const extraHeaderElement = item.extra as ReactElement;

                if (
                    headerElement !== undefined &&
                    (headerElement.type as FunctionComponent)?.displayName === 'KitHeader'
                ) {
                    item.label = cloneElement(headerElement, {
                        disabled: true
                    });
                }

                if (
                    extraHeaderElement !== undefined &&
                    (extraHeaderElement.type as FunctionComponent)?.displayName === 'KitHeaderExtra'
                ) {
                    item.extra = cloneElement(extraHeaderElement, {
                        disabled: true
                    });
                }
            }
        });
    }

    const clx = cn(appId, styles['kit-collapse'], className);

    return (
        <AntdCollapse
            {...collapseProps}
            className={clx}
            expandIcon={expandIcon ?? _getDefaultExpandIcon}
            expandIconPosition="end"
            collapsible={collapsible}
            items={items}
        />
    );
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
