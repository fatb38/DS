import {KitIdCard} from '@kit/DataDisplay';
import {CSSProperties} from 'react';
import {KitAvatar, KitSelect, KitSpace, KitTypography} from '@kit/index';
import {FlagIcon} from 'react-flag-kit';
import {KitHeader} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

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
        <img src="public/images/omnipublish-logo.svg" style={{width: '100px', height: '100px'}} />
        <img src="public/images/pim-logo.svg" style={{width: '100px', height: '100px'}} />
        <img src="public/images/dam-logo.svg" style={{width: '100px', height: '100px'}} />
    </div>
);

export const profileMenuContentExemple = {
    items: [
        {
            key: '1',
            label: (
                <KitSpace size={16}>
                    <FontAwesomeIcon icon={faUser} /> Mon compte
                    <KitTypography.Text></KitTypography.Text>
                </KitSpace>
            )
        },
        {
            key: '2',
            label: (
                <KitSpace size={16}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <KitTypography.Text>Deconnexion</KitTypography.Text>
                </KitSpace>
            )
        }
    ]
};

export const logoExample = <img src="public/images/omnipublish-logo.svg" />;

export const userProfileExample = (
    <KitHeader.Profile
        logo="/public/images/logo.png"
        alt="Logo ARiSTiD"
        tag="Grenoble Centre"
        menu={profileMenuContentExemple}
        userCard={<KitIdCard avatar={<KitAvatar src="public/images/portrait.png" />} />}
    ></KitHeader.Profile>
);

export const langSwitcherExample = (
    <KitSelect
        style={{width: '120px', '--components-Icon-colors-background-on': 'transparent'} as CSSProperties}
        options={languageOptions}
        allowClear={false}
        defaultValue="en"
    />
);
