import React, {FunctionComponent} from 'react';
import {Empty as AntdEmpty} from 'antd';
import {IKitError} from './types';
import {useKitLocale} from '@translation/useKitLocale.ts';
import {IKitLocale} from '@translation/types';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import cn from 'classnames';

import {error404} from '../../../assets/error/error-404.tsx';

import styles from './styles.module.scss';

const _setLayoutForAntDescription = (
    {title, description}: Pick<IKitError, 'title' | 'description'>,
    locale: IKitLocale
) => {
    const _description =
        typeof description === 'string' || typeof description === 'number' ? (
            <KitTypography.Paragraph>{description}</KitTypography.Paragraph>
        ) : (
            description
        );

    const _errorType = <KitTypography.Paragraph>{locale.Error?.error404}</KitTypography.Paragraph>;

    return (
        <KitSpace direction="vertical" size="l">
            <KitTypography.Title className="error-title" level="h1">
                {title}
            </KitTypography.Title>
            {_description}
            {_errorType}
        </KitSpace>
    );
};

export const KitError: FunctionComponent<IKitError> = ({className, title, description, ...errorProps}) => {
    const {appId} = useKitTheme();
    const {locale} = useKitLocale();

    const clx = cn(appId, styles['kit-error'], className);

    return (
        <AntdEmpty
            {...errorProps}
            description={_setLayoutForAntDescription({title, description}, locale)}
            image={error404}
            className={clx}
        />
    );
};

KitError.displayName = 'KitError';
