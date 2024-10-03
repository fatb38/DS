import cn from 'classnames';
import styles from './styles.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faCircleXmark,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import {IKitAlert} from './types';
import {FunctionComponent, useState} from 'react';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';
import {AlertDetails} from './AlertDetails';

const KitAlert: FunctionComponent<IKitAlert> = ({
    type,
    className,
    onClose,
    showIcon,
    message,
    description,
    closable,
    details,
    customContent,
    ...alertProps
}) => {
    const [isClosed, setIsClosed] = useState(false);
    const {appId} = useKitTheme();

    const _getIcon = () => {
        switch (type) {
            case 'info':
                return <FontAwesomeIcon className="icon" icon={faCircleInfo} />;
            case 'success':
                return <FontAwesomeIcon className="icon" icon={faCircleCheck} />;
            case 'warning':
                return <FontAwesomeIcon className="icon" icon={faCircleExclamation} />;
            case 'error':
                return <FontAwesomeIcon className="icon" icon={faCircleXmark} />;
        }
    };

    const _onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsClosed(true);
        onClose && onClose(e);
    };

    const clx = cn(
        appId,
        styles['kit-alert'],
        {
            ['info']: type === 'info',
            ['success']: type === 'success',
            ['warning']: type === 'warning',
            ['error']: type === 'error'
        },
        className
    );

    if (isClosed) {
        return null;
    }

    return (
        <div className={clx} {...alertProps}>
            <div className="kit-alert-main-content">
                {showIcon && _getIcon()}
                {message && (
                    <KitTypography.Paragraph weight="bold" size="fontSize5" ellipsis={true} className="message">
                        {message}
                    </KitTypography.Paragraph>
                )}
                {closable && (
                    <button className="close" onClick={_onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                {description && (
                    <div className="description">
                        <KitTypography.Paragraph
                            size="fontSize7"
                            ellipsis={{rows: 3, expandable: false, tooltip: {zIndex: 9999}}}
                        >
                            {description}
                        </KitTypography.Paragraph>
                    </div>
                )}
            </div>
            {details && <AlertDetails content={details} />}
            {customContent && <div className="custom-placeholder">{customContent}</div>}
        </div>
    );
};

export default KitAlert;
