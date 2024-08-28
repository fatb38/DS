import {KitHeader} from '@kit/Navigation';
import {KitInput, KitSelect} from '@kit/DataEntry';
import {faMagnifyingGlass, faMasksTheater, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CSSProperties} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {FlagIcon} from 'react-flag-kit';

const flagWidth = 20;

const menuContentExample = (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <img src="public/images/omnipublish-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/pim-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/dam-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
    </div>
);

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
const languageOptions = [
    {
        value: 'en',
        icon: <FlagIcon code="GB" size={flagWidth} className="flagIcon" />,
        label: 'EN'
    },
    {
        value: 'fr',
        icon: <FlagIcon code="FR" size={flagWidth} className="flagIcon" />,
        label: 'FR'
    }
];

const langSwitcherExample = (
    <KitSelect
        style={{width: '120px', '--components-Icon-colors-background-on': 'transparent'} as CSSProperties}
        options={languageOptions}
        allowClear={false}
        defaultValue="en"
    />
);

const App = () => (
    <KitHeader
        menu={menuContentExample}
        logo={<img src="public/images/omnipublish-logo.svg" alt="" />}
        profile={userProfileComplementExample}
        langSwitcher={langSwitcherExample}
    >
        <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitHeader>
);

export default App;
