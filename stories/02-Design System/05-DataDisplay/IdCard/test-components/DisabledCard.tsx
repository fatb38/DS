import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitIdCard} from '@kit/DataDisplay';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const avatar1: IKitAvatar = {
    shape: 'square',
    label: 'John Doe'
};

const avatar2: IKitAvatar = {
    shape: 'square',
    src: 'public/images/portrait.png'
};

const avatar3: IKitAvatar = {
    shape: 'square',
    icon: <FontAwesomeIcon icon={faUser} />
};

export const DisabledIdCardTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <KitTypography.Title level="h3">Disabled IdCard</KitTypography.Title>
        <KitIdCard
            disabled={true}
            avatarProps={avatar1}
            title="John Doe"
            description="A talented software developer."
        />
        <KitIdCard
            disabled={true}
            avatarProps={avatar2}
            title="John Doe"
            description="A talented software developer."
        />
        <KitIdCard
            disabled={true}
            avatarProps={avatar3}
            title="John Doe"
            description="A talented software developer."
        />
    </div>
);
