import {FunctionComponent} from 'react';
import {IKitRedirectCardActions} from './types';
import {KitButton} from '@kit/General';
import {KitTooltip} from '../Tooltip';

export const RedirectCardActions: FunctionComponent<IKitRedirectCardActions> = ({actions, disabled = false}) => (
    <div className="kit-redirect-card-actions">
        {actions?.map(action => (
            <KitTooltip title={action.label} key={action.key}>
                <KitButton
                    type="secondary"
                    icon={action.icon}
                    onClick={action.onClick}
                    disabled={action.disabled || disabled}
                />
            </KitTooltip>
        ))}
    </div>
);
