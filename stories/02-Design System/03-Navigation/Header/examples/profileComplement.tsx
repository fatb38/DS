import {KitHeader} from '@kit/Navigation';
import {KitInput} from '@kit/DataEntry';
import {faMagnifyingGlass, faMasksTheater, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitSpace} from '@kit/Layout';
import {KitButton, KitTypography} from '@kit/General';

const userProfileComplementExample = (
    <KitHeader.Profile
        logo="/public/images/logo.png"
        alt="Logo ARiSTiD"
        tagProps={{type: 'primary', idCardProps: {description: 'Grenoble Centre'}}}
        menu={{
            items: [
                {
                    key: '1',
                    label: (
                        <KitSpace size={16}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <KitTypography.Text>Deconnexion</KitTypography.Text>
                        </KitSpace>
                    )
                }
            ]
        }}
        profileMenuCardProps={{
            avatarProps: {
                src: 'public/images/portrait.png'
            },
            title: 'Nina',
            description: 'Responsable Marketing',
            onClick: () => console.log('profile menu card clicked')
        }}
        profileCardProps={{
            avatarProps: {
                src: 'public/images/portrait.png'
            }
        }}
        complement={<KitButton icon={<FontAwesomeIcon icon={faMasksTheater} />} />}
    />
);

const App = () => (
    <KitHeader profile={userProfileComplementExample}>
        <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitHeader>
);

export default App;
