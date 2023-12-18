import React, {useState} from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {CheckboxValueType} from 'antd/es/checkbox/Group';
import {CheckboxChangeEvent} from 'antd/es/checkbox';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const App = () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
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
