import React, {Key, createContext} from 'react';
import {KitIcon} from '@kit/General/Icon';
import notification from 'antd/lib/notification';
import {NotificationInstance} from 'antd/lib/notification/interface';
import {IKitNotification, IKitNotificationArgs, IKitNotificationContext} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';

export const KitNotificationContext = createContext<IKitNotificationContext | undefined>(undefined);

const _getErrorStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.error}, var(${kitColorsPaletteCssTokens.secondary.red.red100}))`
    };
};

const _getWarningStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.warning}, var(${kitColorsPaletteCssTokens.secondary.orange.orange100}))`
    };
};

const _getSuccessStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.success}, var(${kitColorsPaletteCssTokens.secondary.green.green100}))`
    };
};

const _getInfoStyle = () => {
    return {
        color: `var(${kitNotificationCssTokens.colors.icon.info}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
        backgroundColor: `var(${kitNotificationCssTokens.colors.icon.background.info}, var(${kitColorsPaletteCssTokens.primary.primary100}))`
    };
};

export const KitNotificationProvider = ({children}) => {
    const [api, contextHolder] = notification.useNotification();
    const value = useKitNotificationProvider(api);

    return (
        <KitNotificationContext.Provider value={value}>
            {children}
            {contextHolder}
        </KitNotificationContext.Provider>
    );
};

const useKitNotificationProvider = (api: NotificationInstance) => {
    const {appId} = useKitTheme();

    const error = (args: IKitNotificationArgs) => {
        api.error({
            ...args,
            icon: <KitIcon style={_getErrorStyle()} icon={<FontAwesomeIcon icon={faCircleXmark} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const warning = (args: IKitNotificationArgs) => {
        api.warning({
            ...args,
            icon: <KitIcon style={_getWarningStyle()} icon={<FontAwesomeIcon icon={faTriangleExclamation} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const success = (args: IKitNotificationArgs) => {
        api.success({
            ...args,
            icon: <KitIcon style={_getSuccessStyle()} icon={<FontAwesomeIcon icon={faCircleCheck} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };
    const info = (args: IKitNotificationArgs) => {
        api.info({
            ...args,
            icon: <KitIcon style={_getInfoStyle()} icon={<FontAwesomeIcon icon={faExclamation} />} on />,
            className: `${appId} ${args.className ?? ''}`
        });
    };

    const open = (args: IKitNotificationArgs) => {
        api.open({...args, className: `${appId} ${args.className ?? ''}`});
    };

    const destroy = (key?: Key) => {
        api.destroy(key);
    };

    const kitNotification: IKitNotification = {error, warning, success, info, open, destroy};
    return {kitNotification};
};
