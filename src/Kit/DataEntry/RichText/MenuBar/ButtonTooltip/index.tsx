import {FunctionComponent, PropsWithChildren} from 'react';
import {KitTooltip} from '@kit/DataDisplay';
import {IKitButtonTooltip} from './types';

export const KitButtonTooltip: FunctionComponent<PropsWithChildren<IKitButtonTooltip>> = ({title, children}) => (
    <KitTooltip title={title} placement="top" mouseEnterDelay={0.8}>
        {children}
    </KitTooltip>
);
