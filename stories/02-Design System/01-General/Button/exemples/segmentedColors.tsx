import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {PoweroffOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="blue" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="blue" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="blue"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="green" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="green" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="green"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="mediumGrey" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="mediumGrey" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="mediumGrey"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="orange" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="orange" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="orange"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="pink" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="pink" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="pink"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="red" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="red" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="red"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="yellow" />
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="yellow" segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<PoweroffOutlined />}
                    segmentedColor="yellow"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
