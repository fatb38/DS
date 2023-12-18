import React, {useRef, useState} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';

const defaultPanes = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return {label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id};
});

const App = () => {
    const [activeKey, setActiveKey] = useState<string>(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);
    const newTabIndex = useRef(0);

    const onChange = (key: string) => {
        setActiveKey(key);
    };

    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, {label: 'New Tab', children: 'New Tab Pane', key: newActiveKey}]);
        setActiveKey(newActiveKey);
    };

    const remove = targetKey => {
        const targetIndex = items.findIndex(pane => pane.key === targetKey);
        const newPanes = items.filter(pane => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
            const {key} = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
            setActiveKey(key);
        }
        setItems(newPanes);
    };

    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <>
            <div style={{marginBottom: 16}}>
                <KitButton onClick={add}>ADD</KitButton>
            </div>
            <KitTabs
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}
                items={items}
            />
        </>
    );
};

export default App;
