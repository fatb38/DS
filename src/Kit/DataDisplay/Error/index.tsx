import {FunctionComponent, ReactElement, Suspense} from 'react';
import {Empty as AntdEmpty} from 'antd';
import {IKitError} from './types';
import {useKitLocale} from '@translation/useKitLocale.ts';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import cn from 'classnames';
import styles from './styles.module.scss';
import {KitLoader} from '@kit/Feedback/index.ts';
import Error401 from '../../../assets/error/error-401.tsx';
import Error403 from '../../../assets/error/error-403.tsx';
import Error404 from '../../../assets/error/error-404.tsx';
import Error500 from '../../../assets/error/error-500.tsx';
import Error502 from '../../../assets/error/error-502.tsx';
import Error503 from '../../../assets/error/error-503.tsx';
import CommonError from '../../../assets/error/common-error.tsx';

export const KitError: FunctionComponent<IKitError> = ({
    className,
    title,
    description,
    httpErrorCode,
    ...errorProps
}) => {
    const {appId} = useKitTheme();
    const {locale} = useKitLocale();

    const clx = cn(appId, styles['kit-error'], className);
    const errorImageAlt = `${locale.Error?.error_type}${httpErrorCode}`;

    const _getImageElement = (): ReactElement => {
        switch (httpErrorCode) {
            case '401':
                return <Error401 alt={errorImageAlt} />;
            case '403':
                return <Error403 alt={errorImageAlt} />;
            case '404':
                return <Error404 alt={errorImageAlt} />;
            case '500':
                return <Error500 alt={errorImageAlt} />;
            case '502':
                return <Error502 alt={errorImageAlt} />;
            case '503':
                return <Error503 alt={errorImageAlt} />;
            default:
                return <CommonError />;
        }
    };

    return (
        <AntdEmpty
            {...errorProps}
            description={
                <KitSpace direction="vertical" size="l">
                    <KitTypography.Title className="error-title" level="h1">
                        {title}
                    </KitTypography.Title>
                    {description}
                </KitSpace>
            }
            image={<Suspense fallback={<KitLoader style={{height: '300px'}} />}>{_getImageElement()}</Suspense>}
            className={clx}
        />
    );
};

KitError.displayName = 'KitError';
