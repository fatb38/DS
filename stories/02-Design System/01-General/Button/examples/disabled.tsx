import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitButton type="primary">Primary</KitButton>
            <KitButton type="primary" disabled>
                Primary(disabled)
            </KitButton>
            <KitButton danger type="primary">
                Primary Danger Text
            </KitButton>
            <KitButton danger type="primary" disabled>
                Primary Danger Text(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton>Default</KitButton>
            <KitButton disabled>Default(disabled)</KitButton>
            <KitButton danger>Danger Default</KitButton>
            <KitButton danger disabled>
                Danger Default(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="tertiary">Tertiary</KitButton>
            <KitButton type="tertiary" disabled>
                Tertiary(disabled)
            </KitButton>
            <KitButton danger type="tertiary">
                Tertiary Danger Text
            </KitButton>
            <KitButton danger type="tertiary" disabled>
                Tertiary Danger Text(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="text">Text</KitButton>
            <KitButton type="text" disabled>
                Text(disabled)
            </KitButton>
            <KitButton type="text" danger>
                Text danger
            </KitButton>
            <KitButton type="text" danger disabled>
                Text danger(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} disabled>
                Link(disabled)
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                Link danger
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger disabled>
                Link danger(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} disabled>
                Redirect(disabled)
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} danger>
                Redirect danger
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} danger disabled>
                Redirect danger(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} disabled />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger disabled />
        </KitSpace>
    </KitSpace>
);

export default App;
