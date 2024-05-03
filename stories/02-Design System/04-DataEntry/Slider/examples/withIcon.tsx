import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassMinus, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitSlider endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />} />
            <KitSlider startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />} />
            <KitSlider
                startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />}
                endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />}
            />
        </KitSpace>
    );

export default App;
