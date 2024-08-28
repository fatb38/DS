import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {KitIcon} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    return (
        <KitSpace size="s">
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={0} showZero>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge
                count={
                    <KitIcon icon={<FontAwesomeIcon icon={faClock} />} style={{color: theme.utilities.error.dark}} />
                }
            >
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
