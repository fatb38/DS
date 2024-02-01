import React, {useState} from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {RadioChangeEvent} from 'antd';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';

const App = () => {
    const [value, setValue] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

    const onChange = (index: number) => (event: RadioChangeEvent) => {
        console.log('radio checked', event.target.value);
        const values = [...value];
        values[index] = event.target.value as number;
        setValue(values);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace wrap size={24}>
                <KitRadio.Group onChange={onChange(0)} value={value[0]} label="Label" helper="helper">
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group onChange={onChange(1)} value={value[1]} label="Label" helper="helper" status="error">
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group onChange={onChange(2)} value={value[2]} label="Label" helper="helper" status="warning">
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group
                    onChange={onChange(3)}
                    value={value[3]}
                    label="Label"
                    helper="helper"
                    status="error"
                    disabled
                >
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
            </KitSpace>
            <KitTypography.Title level="h4">Bordered groups</KitTypography.Title>
            <KitSpace wrap size={24}>
                <KitRadio.Group onChange={onChange(4)} value={value[4]} label="Label" helper="helper" bordered>
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group
                    onChange={onChange(5)}
                    value={value[5]}
                    label="Label"
                    helper="helper"
                    status="error"
                    bordered
                >
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group
                    onChange={onChange(6)}
                    value={value[6]}
                    label="Label"
                    helper="helper"
                    status="warning"
                    bordered
                >
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
                <KitRadio.Group
                    onChange={onChange(7)}
                    value={value[7]}
                    label="Label"
                    helper="helper"
                    status="error"
                    bordered
                    disabled
                >
                    <KitSpace direction="vertical">
                        <KitRadio value={1}>A</KitRadio>
                        <KitRadio value={2}>B</KitRadio>
                        <KitRadio value={3}>C</KitRadio>
                        <KitRadio value={4}>D</KitRadio>
                    </KitSpace>
                </KitRadio.Group>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
