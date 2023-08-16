import React from 'react';
import {KitSpace, KitDivider, KitButton} from '@kit/index';
import {PoweroffOutlined, SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Green (Ex: use in Navigation/Menu)</KitDivider>
            <KitSpace>
                <KitButton type="segmented" subtypeSegmented="green" icon={<PoweroffOutlined />} />
                <KitButton type="segmented" subtypeSegmented="green" icon={<PoweroffOutlined />} isActiveSegmented />
                <KitButton type="segmented" subtypeSegmented="green" icon={<PoweroffOutlined />} disabled />
                <KitSpace.Compact block>
                    <KitButton
                        type="segmented"
                        subtypeSegmented="green"
                        icon={<PoweroffOutlined />}
                        isActiveSegmented
                        isCheckedSegmented
                    />
                    <KitButton type="segmented" subtypeSegmented="green" icon={<SearchOutlined />} />
                </KitSpace.Compact>
            </KitSpace>
            <br />
            <KitDivider orientation="left">Gray (Ex: use in Navigation/Header)</KitDivider>
            <KitSpace>
                <KitButton type="segmented" subtypeSegmented="gray" icon={<PoweroffOutlined />} />
                <KitButton type="segmented" subtypeSegmented="gray" icon={<PoweroffOutlined />} isActiveSegmented />
                <KitButton type="segmented" subtypeSegmented="gray" icon={<PoweroffOutlined />} disabled />
                <KitSpace.Compact block>
                    <KitButton
                        type="segmented"
                        subtypeSegmented="gray"
                        icon={<PoweroffOutlined />}
                        isActiveSegmented
                        isCheckedSegmented
                    />
                    <KitButton type="segmented" subtypeSegmented="gray" icon={<SearchOutlined />} />
                </KitSpace.Compact>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
