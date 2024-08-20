import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter, faMagnifyingGlass, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace wrap>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>Search</KitButton>
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />} />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />}>
                Filter
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                4 resultats
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} />
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Gérer mes produits
            </KitButton>
        </KitSpace>
    </KitSpace>
);

export default App;
