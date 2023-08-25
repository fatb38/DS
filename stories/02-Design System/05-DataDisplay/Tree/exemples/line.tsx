import React, {useState} from 'react';
import {KitTree} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';
import {KitSelect, KitSwitch} from '@kit/DataEntry';
import {CarryOutOutlined, CheckOutlined, FormOutlined} from '@ant-design/icons';

const options = [
    {
        value: 'true',
        label: 'True'
    },
    {
        value: 'false',
        label: 'False'
    },
    {
        value: 'custom',
        label: 'Custom icon'
    }
];

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <CarryOutOutlined />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <CarryOutOutlined />
                    },
                    {
                        title: (
                            <>
                                <div>multiple line title</div>
                                <div>multiple line title</div>
                            </>
                        ),
                        key: '0-0-0-1',
                        icon: <CarryOutOutlined />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                        icon: <CarryOutOutlined />
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0',
                        icon: <CarryOutOutlined />
                    }
                ]
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                        icon: <CarryOutOutlined />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <CarryOutOutlined />,
                        switcherIcon: <FormOutlined />
                    }
                ]
            }
        ]
    },
    {
        title: 'parent 2',
        key: '0-1',
        icon: <CarryOutOutlined />,
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-1-0-0',
                        icon: <CarryOutOutlined />
                    },
                    {
                        title: 'leaf',
                        key: '0-1-0-1',
                        icon: <CarryOutOutlined />
                    }
                ]
            }
        ]
    }
];

const App = () => {
    const [showLine, setShowLine] = useState(true);
    const [showLeafIcon, setShowLeafIcon] = useState<any>(false);

    const handleLeafIconChange = value => {
        if (value === 'custom') {
            return setShowLeafIcon(<CheckOutlined />);
        }

        if (value === 'true') {
            return setShowLeafIcon(true);
        }

        return setShowLeafIcon(false);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTypography.Text>showLine :</KitTypography.Text>
                <KitSwitch defaultChecked onChange={setShowLine} />
            </KitSpace>
            <KitSpace>
                <KitTypography.Text>showLeafIcon :</KitTypography.Text>
                <KitSelect
                    labelOnly
                    style={{width: '150px'}}
                    defaultValue="false"
                    options={options}
                    onChange={handleLeafIconChange}
                />
            </KitSpace>
            <br />
            <div style={{width: '300px'}}>
                <KitTree showLine={showLine ? {showLeafIcon} : false} defaultExpandAll treeData={treeData} />
            </div>
        </KitSpace>
    );
};

export default App;
