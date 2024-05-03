import React, {FunctionComponent, ReactNode, useEffect, PropsWithChildren} from 'react';
import {ConfigProvider} from 'antd';
import KitSnackBarProvider from '@kit/Feedback/SnackBar/SnackBarProvider';
import {KitThemeProvider} from '@theme/theme-context';
import {IKitCustomTheme} from '@theme/types';
import {antdThemeConfig} from '@theme/utils/tokens-mapper';
import {IKitLocale} from '@translation/types';
import {KitLocaleProvider} from '@translation/locale-context';
import {mapKitLocaleToAntdLocale} from '@translation/utils';
import {useKitLocale} from '@translation/useKitLocale';
import {KitNotificationProvider} from '@kit/Feedback/Notification/notification-provider';

import './styles.scss';
import {KitEmpty} from '@kit/DataDisplay';

export const KitApp: FunctionComponent<{
    customTheme?: IKitCustomTheme;
    locale?: IKitLocale;
    children?: ReactNode;
    id?: string;
}> = ({children, locale, customTheme, id}) => (
        <KitThemeProvider customTheme={customTheme} id={id}>
            <KitLocaleProvider>
                <KitAppConfig locale={locale}>{children}</KitAppConfig>
            </KitLocaleProvider>
        </KitThemeProvider>
    );

const KitAppConfig: FunctionComponent<PropsWithChildren<{locale?: IKitLocale}>> = ({children, locale}) => {
    const {locale: kitLocal, setKitLocale} = useKitLocale();
    useEffect(() => {
        if (locale !== undefined) {
            setKitLocale(locale);
        }
    }, [locale, setKitLocale]);

    return (
        <ConfigProvider
            theme={antdThemeConfig}
            locale={mapKitLocaleToAntdLocale(locale)}
            renderEmpty={() => (
                <KitEmpty
                    className="default-render"
                    image={KitEmpty.ASSET_LIST}
                    description={kitLocal.Empty?.noData}
                />
            )}
        >
            <KitNotificationProvider>
                <KitSnackBarProvider />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
