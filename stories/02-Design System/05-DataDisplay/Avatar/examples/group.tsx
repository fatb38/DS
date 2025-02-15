import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace, KitDivider} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const url = 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1';

    return (
        <KitSpace direction="vertical" size={16}>
            <KitDivider orientation="left">Default KitAvatar.Group</KitDivider>
            <KitAvatar.Group>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit</KitDivider>
            <KitAvatar.Group maxCount={2}>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with max popover on click</KitDivider>
            <KitAvatar.Group maxCount={2} maxPopoverTrigger="click">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit and size large</KitDivider>
            <KitAvatar.Group maxCount={2} size="large">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
        </KitSpace>
    );
};

export default App;
