import {FunctionComponent} from 'react';
import {Steps as AntdSteps} from 'antd';
import {IKitStep, IKitSteps} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import styles from './styles.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const _addCheckIconToItems = (items: IKitStep[] | undefined, current: number | undefined): IKitStep[] | undefined => {
    if (items === undefined) {
        return;
    }

    const itemsWithCheckIcon = items.map((item, index) => {
        if (item.status) {
            if (item.status !== 'finish') {
                return item;
            }
        } else {
            if (!current || index >= current) {
                return item;
            }
        }

        return {
            ...item,
            icon: (
                <span role="img" aria-label="check" className="anticon anticon-check ant-steps-finish-icon">
                    <FontAwesomeIcon className="ant-steps-check" icon={faCheck} />
                </span>
            )
        };
    });

    return itemsWithCheckIcon;
};

export const KitSteps: FunctionComponent<IKitSteps> = ({className, items, current, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-steps'], className);

    const stepsWithCheckIcons = _addCheckIconToItems(items, current);

    return (
        <AntdSteps
            {...props}
            items={stepsWithCheckIcons}
            current={current}
            size="small"
            labelPlacement="vertical"
            className={clx}
        />
    );
};

KitSteps.displayName = 'KitSteps';
