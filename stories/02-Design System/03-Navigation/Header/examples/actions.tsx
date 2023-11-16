import React, {ReactNode} from 'react';
import {KitHeader} from '@kit/Navigation';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpZA, faFilter, faSliders} from '@fortawesome/free-solid-svg-icons';
import {faObjectUngroup} from '@fortawesome/free-regular-svg-icons';

const actions: ReactNode[] = [
    <KitButton icon={<FontAwesomeIcon icon={faFilter} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faObjectUngroup} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faArrowUpZA} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faSliders} />}>Vue</KitButton>
];

const App = () => {
    return <KitHeader actions={actions} />;
};

export default App;
