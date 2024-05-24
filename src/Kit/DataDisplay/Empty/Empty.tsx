import React, {FunctionComponent} from 'react';
import {Empty as AntdEmpty} from 'antd';
import {IKitEmpty} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '../../General/Typography';
import {KitSpace} from '../../Layout/Space';
import cn from 'classnames';

import {emptyResult} from '../../../assets/empty/empty-result.tsx';

import styles from './styles.module.scss';

const _setLayoutForAntDescription = (
    title: IKitEmpty['title'],
    description: IKitEmpty['description'],
    button: IKitEmpty['button']
) => {
    const _title =
        typeof title === 'string' || typeof title === 'number' ? (
            <KitTypography.Title className="empty-title" level="h4">
                {title}
            </KitTypography.Title>
        ) : (
            title
        );

    const _description =
        typeof description === 'string' || typeof description === 'number' ? (
            <KitTypography.Text>{description}</KitTypography.Text>
        ) : (
            description
        );

    return (
        <KitSpace direction="vertical" size="s">
            {_title}
            {_description}
            {button}
        </KitSpace>
    );
};

const _getEmptyImage = (image: IKitEmpty['image']) => {
    if (image !== undefined) {
        return image;
    }

    return emptyResult;
};

const KitEmpty: FunctionComponent<IKitEmpty> = ({className, image, title, description, button, ...emptyProps}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-empty'], className);

    return (
        <AntdEmpty
            {...emptyProps}
            description={_setLayoutForAntDescription(title, description, button)}
            image={_getEmptyImage(image)}
            className={clx}
        />
    );
};

KitEmpty.displayName = 'KitEmpty';

export default KitEmpty;
