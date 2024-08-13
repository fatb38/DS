import {KitHeader} from '@kit/Navigation';
import {KitInput, KitSelect} from '@kit/DataEntry';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FlagIcon} from 'react-flag-kit';
import {CSSProperties} from 'react';

const flagWidth = 20;

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
    <KitHeader langSwitcher={langSwitcherExample}>
        <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitHeader>
);

export default App;
