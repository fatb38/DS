import {CSSProperties} from 'react';
import {KitButton, KitSelect, KitSpace, KitTypography} from '@kit/index';
import {FlagIcon} from 'react-flag-kit';
import {KitHeader} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMasksTheater, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const flagWidth = 20;

export const toggleOptions = {
    Show: 'show',
    Hide: 'hide'
};

export const logoOptions = {
    none: null,
    Omnipublish: 'omnipublish-logo.svg',
    PIM: 'pim-logo.svg',
    DAM: 'dam-logo.svg'
};

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

export const menuContentExample = (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <img src="public/images/omnipublish-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/pim-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/dam-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
    </div>
);

export const profileMenuContentExemple = {
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
};

export const logoExample = <img src="public/images/omnipublish-logo.svg" alt="" />;

export const userProfileExample = (
    <KitHeader.Profile
        data-testid="profile"
        logo="/public/images/logo.png"
        alt="Logo ARiSTiD"
        tagProps={{type: 'primary', idCardProps: {description: 'Grenoble Centre'}}}
        menu={profileMenuContentExemple}
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
    />
);

export const userProfileComplementExample = (
    <KitHeader.Profile
        logo="/public/images/logo.png"
        alt="Logo ARiSTiD"
        tagProps={{type: 'primary', idCardProps: {description: 'Grenoble Centre'}}}
        menu={profileMenuContentExemple}
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

export const langSwitcherExample = (
    <KitSelect
        style={{width: '120px', '--components-Icon-colors-background-on': 'transparent'} as CSSProperties}
        options={languageOptions}
        allowClear={false}
        defaultValue="en"
    />
);
