import React, {useState} from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const App = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <KitSpace direction="vertical">
            <KitCheckbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </KitCheckbox>
            <KitDivider />
            <KitCheckbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
        </KitSpace>
    );
};

export default App;
