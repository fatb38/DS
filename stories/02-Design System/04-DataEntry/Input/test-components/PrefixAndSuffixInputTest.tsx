import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const PrefixAndSuffixInputTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Prefix / Suffix input</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Prefix & default" prefix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Prefix & disabled" prefix={<FontAwesomeIcon icon={faUser} />} disabled />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Suffix & default" suffix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Suffix & disabled" suffix={<FontAwesomeIcon icon={faUser} />} disabled />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput
                    placeholder="Prefix & Suffix & default"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                />
                <KitInput
                    placeholder="Prefix & Suffix & disabled"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                    disabled
                />
            </div>
        </div>
    </div>
);
