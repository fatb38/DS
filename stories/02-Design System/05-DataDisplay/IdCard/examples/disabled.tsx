import {KitIdCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';

const basicAvatarProps: IKitAvatar = {
    shape: 'square',
    label: 'John Doe'
};

const imageAvatarProps: IKitAvatar = {
    shape: 'square',
    src: 'https://xsgames.co/randomusers/avatarProps.php?g=pixel&key=1'
};

const iconAvatarProps: IKitAvatar = {
    shape: 'square',
    icon: <FontAwesomeIcon icon={faUser} />
};

const App = () => (
    <KitSpace size={24}>
        <KitIdCard
            disabled={true}
            avatarProps={basicAvatarProps}
            title="John Doe"
            description="A talented software developer."
        />
        <KitIdCard
            disabled={true}
            avatarProps={imageAvatarProps}
            title="John Doe"
            description="A talented software developer."
        />
        <KitIdCard
            disabled={true}
            avatarProps={iconAvatarProps}
            title="John Doe"
            description="A talented software developer."
        />
    </KitSpace>
);

export default App;
