import React, {ReactNode} from 'react';
import {ConfigProvider} from 'antd';
import {KitAppProps} from './types';
import GlobalStyles from './style';
import theme from '@theme/index';
import KitSnackBarProvider from '@kit/Feedback/SnackBar/SnackBarProvider';
import {KitNotificationProvider} from '@kit/Feedback/Notification/useKitNotification';
import {DropDownStyle} from '@kit/Navigation/DropDown/style';
import {SelectDropDownStyle} from '@kit/DataEntry/Select/style';
import {DatePickerDropDownStyle} from '@kit/DataEntry/DatePicker/style';
import {NotificationStyle} from '@kit/Feedback/Notification/style';
import {KitThemeProvider, useKitTheme} from '@theme/theme-context';
import {merge} from 'lodash';

export const KitApp: React.FunctionComponent = ({children, customTheme}: {children?: ReactNode; customTheme?: any}) => {
    return (
        <KitThemeProvider>
            <KitAppConfig customTheme={customTheme}>{children}</KitAppConfig>
        </KitThemeProvider>
    );
};

const KitAppConfig = ({children, customTheme}: {children?: ReactNode; customTheme?: any}) => {
    //TODO: rename contextTheme -> theme
    const {theme: contextTheme, overrideTheme} = useKitTheme();

    if (customTheme !== undefined) {
        overrideTheme(customTheme);
    }

    // Temporary -------

    console.log('contextTheme : ', contextTheme);
    // const tmpMergedTheme = {...theme, ...contextTheme};

    const tmpMergedTheme = merge(theme, contextTheme);

    console.log('tmpMergedTheme : ', tmpMergedTheme);
    // Temporary -------

    // TODO: Give to all the providers contextTheme

    return (
        <ConfigProvider theme={tmpMergedTheme}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <DropDownStyle />
                <SelectDropDownStyle />
                <DatePickerDropDownStyle />
                <NotificationStyle />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
