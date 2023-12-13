import React, {FunctionComponent} from 'react';
import {Alert as AntdAlert} from 'antd';
import {IKitAlert} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faCircleInfo,
    faCircleCheck,
    faCircleXmark,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import {kitAlertCssTokens} from '@theme/aristid/components/Feedback/Alert';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledAntdAlert = styled(AntdAlert)`
    &.ant-alert-with-description {
        padding-inline: 0px;
        padding-block: 0px;
        padding: 8px 16px;

        .ant-alert-message {
            margin-bottom: 6px;
        }
    }

    &:not(.ant-alert-banner) {
        border-radius: calc(var(${kitAlertCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
    }

    padding: 8px 16px;

    .ant-alert-message {
        font-size: calc(
            var(${kitAlertCssTokens.typography.fontSize.message}, var(${typographyCssTokens.fontSize5})) * 1px
        );
    }

    .ant-alert-description {
        font-size: calc(
            var(${kitAlertCssTokens.typography.fontSize.description}, var(${typographyCssTokens.fontSize7})) * 1px
        );
    }

    .fa-icon {
        font-size: calc(var(${kitAlertCssTokens.icon.alert.size}, var(${typographyCssTokens.fontSize4})) * 1px);
        margin-inline-end: 8px;
    }

    &.ant-alert-with-description .fa-icon {
        margin-top: 3px;
    }

    &.ant-alert-success {
        svg {
            color: var(
                ${kitAlertCssTokens.colors.icon.alert.success},
                var(${kitColorsPaletteCssTokens.secondary.green.green400})
            );
        }
    }

    &.ant-alert-info {
        svg {
            color: var(
                ${kitAlertCssTokens.colors.icon.alert.info},
                var(${kitColorsPaletteCssTokens.secondary.blue.blue400})
            );
        }
    }

    &.ant-alert-warning {
        svg {
            color: var(
                ${kitAlertCssTokens.colors.icon.alert.warning},
                var(${kitColorsPaletteCssTokens.secondary.yellow.yellow400})
            );
        }
    }

    &.ant-alert-error {
        svg {
            color: var(
                ${kitAlertCssTokens.colors.icon.alert.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }
`;

export const KitAlert: FunctionComponent<IKitAlert> = ({type, className, ...alertProps}) => {
    const {appId} = useKitTheme();

    const _getIcon = () => {
        switch (type) {
            case 'info':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleInfo} />;
            case 'success':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />;
            case 'warning':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleExclamation} />;
            case 'error':
                return <FontAwesomeIcon className="fa-icon" icon={faCircleXmark} />;
        }
    };

    return (
        <StyledAntdAlert
            {...alertProps}
            closeIcon={<FontAwesomeIcon icon={faXmark} />}
            icon={_getIcon()}
            type={type}
            className={`${appId} ${className ?? ''}`}
        />
    );
};

KitAlert.displayName = 'KitAlert';
