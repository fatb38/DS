import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const App = () => (
        <KitSpace>
            <KitSpace direction="vertical" align="start">
                <KitInput placeholder="Prefix & default" prefix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Prefix & disabled" prefix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput placeholder="Suffix & default" suffix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Suffix & disabled" suffix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput
                    placeholder="Prefix & Suffix & default"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                />
                <KitInput
                    placeholder="Prefix & Suffix & disabled"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                    disabled={true}
                />
            </KitSpace>
        </KitSpace>
    );

export default App;
