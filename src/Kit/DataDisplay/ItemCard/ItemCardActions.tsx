import {FunctionComponent} from 'react';
import {IKitItemCardActions} from './types';
import {KitButton} from '@kit/General';
import {KitTooltip} from '../Tooltip';

export const ItemCardActions: FunctionComponent<IKitItemCardActions> = ({
    display = 'card',
    disabled = false,
    actions
}) => (
    <div className="kit-item-card-actions">
        {actions?.map(action => (
            <KitTooltip title={action.label} key={action.key}>
                <KitButton
                    type={display === 'list' ? 'tertiary' : 'secondary'}
                    icon={action.icon}
                    onClick={action.onClick}
                    disabled={action.disabled || disabled}
                />
            </KitTooltip>
        ))}
    </div>
);
