import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitGrid, KitSpace} from '@kit/Layout/';

const App = () => {
    const onChange = checkedValues => {
        console.log('checked = ', checkedValues);
    };

    return (
        <KitSpace direction="vertical">
            <KitCheckbox.Group onChange={onChange}>
                <KitGrid.Row>
                    <KitGrid.Col span={8}>
                        <KitCheckbox value="A">A</KitCheckbox>
                    </KitGrid.Col>
                    <KitGrid.Col span={8}>
                        <KitCheckbox value="B">B</KitCheckbox>
                    </KitGrid.Col>
                    <KitGrid.Col span={8}>
                        <KitCheckbox value="C">C</KitCheckbox>
                    </KitGrid.Col>
                    <KitGrid.Col span={8}>
                        <KitCheckbox value="D">D</KitCheckbox>
                    </KitGrid.Col>
                    <KitGrid.Col span={8}>
                        <KitCheckbox value="E">E</KitCheckbox>
                    </KitGrid.Col>
                </KitGrid.Row>
            </KitCheckbox.Group>
        </KitSpace>
    );
};

export default App;
