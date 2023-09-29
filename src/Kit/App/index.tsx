import React from 'react';
import {ConfigProvider} from 'antd';
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
import {KitCustomTheme} from '@theme/types';

export const KitApp: React.FunctionComponent<React.PropsWithChildren<{customTheme?: KitCustomTheme}>> = ({
    children,
    customTheme
}) => {
    return (
        <KitThemeProvider>
            <KitAppConfig customTheme={customTheme}>{children}</KitAppConfig>
        </KitThemeProvider>
    );
};

const KitAppConfig: React.FunctionComponent<React.PropsWithChildren<{customTheme?: KitCustomTheme}>> = ({
    children,
    customTheme
}) => {
    //TODO: rename contextTheme -> theme
    const {theme: contextTheme, overrideTheme} = useKitTheme();

    // Temporary -------
    const tmpMergedTheme = merge(theme, contextTheme);
    // Temporary -------

    if (customTheme !== undefined) {
        overrideTheme(customTheme);
    }

    // Temporary -------
    const tmpBigMergeTheme = merge(tmpMergedTheme, customTheme);
    // Temporary -------

    // TODO: Give to all the providers contextTheme

    return (
        <ConfigProvider theme={tmpBigMergeTheme}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <DropDownStyle $theme={tmpBigMergeTheme.components.DropDown} />
                <SelectDropDownStyle $theme={tmpBigMergeTheme.components.Select.DropDown} />
                <DatePickerDropDownStyle $theme={tmpBigMergeTheme.components.DatePicker.DropDown} />
                <NotificationStyle />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
