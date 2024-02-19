import React, {FunctionComponent, ReactElement, ReactNode, cloneElement, useMemo} from 'react';
import {KitTypography, KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {KitInput} from '@kit/DataEntry/';
import {IKitHeader} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitButton} from '@kit/General/Button/types';
import cn from 'classnames';

import styles from './styles.module.scss';

const _getActions = (actions?: IKitHeader['actions'], onPlusClick?: IKitHeader['onPlusClick']) => {
    if (!actions && !onPlusClick) {
        return null;
    }

    const cloneActions = actions
        ? actions.map<ReactNode>((action, index) => {
              switch (((action as ReactElement).type as FunctionComponent).displayName) {
                  case 'KitButton':
                      return React.cloneElement(
                          action as ReactElement<IKitButton>,
                          {
                              type: 'segmented',
                              key: index,
                              ...(action as ReactElement).props
                          } as IKitButton
                      );
                  default:
                      return null;
              }
          })
        : null;

    return (
        <div className="kit-header-actions">
            <KitSpace>
                {cloneActions}
                {onPlusClick && (
                    <KitButton
                        type="primary"
                        className="kit-header-plus-button"
                        onClick={onPlusClick}
                        icon={<FontAwesomeIcon icon={faPlus} />}
                    />
                )}
            </KitSpace>
        </div>
    );
};

export const KitHeader: FunctionComponent<IKitHeader> = ({
    title,
    search,
    breadcrumb,
    actions,
    onPlusClick,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();

    const breadcrumbToDisplay = breadcrumb
        ? cloneElement(breadcrumb, {
              className: 'kit-header-breadcrumb'
          })
        : null;

    const actionsToDisplay = useMemo(() => {
        return _getActions(actions, onPlusClick);
    }, [actions, onPlusClick]);

    const clx = cn(appId, styles['kit-header'], className);

    return (
        <div {...props} className={clx}>
            {title && (
                <KitTypography.Title level="h2" className="kit-header-title">
                    {title}
                </KitTypography.Title>
            )}
            {search && (
                <div className="kit-header-search">
                    <KitInput {...search} prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                </div>
            )}
            {breadcrumbToDisplay}
            {actionsToDisplay}
        </div>
    );
};

KitHeader.displayName = 'KitHeader';
