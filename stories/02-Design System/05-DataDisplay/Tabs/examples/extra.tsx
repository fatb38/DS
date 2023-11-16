import React, {useMemo, useState} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitCheckbox} from '@kit/DataEntry';
import {KitButton} from '@kit/General';
import {KitDivider} from '@kit/Layout';

const CheckboxGroup = KitCheckbox.Group;

const operations = <KitButton>Extra Action</KitButton>;

const OperationsSlot = {
    left: (
        <KitButton type="segmented" className="tabs-extra-demo-button">
            Left Extra Action
        </KitButton>
    ),
    right: <KitButton>Right Extra Action</KitButton>
};

const options = ['left', 'right'];

const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of tab ${id}`
    };
});

const App = () => {
    const [position, setPosition] = useState(['left', 'right']);

    const slot = useMemo(() => {
        if (position.length === 0) return null;

        return position.reduce((acc, direction) => ({...acc, [direction]: OperationsSlot[direction]}), {});
    }, [position]);

    return (
        <>
            <KitTabs tabBarExtraContent={operations} items={items} />
            <br />
            <br />
            <br />
            <div>You can also specify its direction or both side</div>
            <KitDivider />
            <CheckboxGroup
                options={options}
                value={position}
                onChange={value => {
                    setPosition(value as string[]);
                }}
            />
            <br />
            <br />
            <KitTabs tabBarExtraContent={slot} items={items} />
        </>
    );
};

export default App;
