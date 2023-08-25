import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {HomeOutlined, MinusOutlined, PercentageOutlined, PlusOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    actions={[
                        {
                            icon: <PlusOutlined />,
                            label: 'Add',
                            onClick: () => console.log('on click add')
                        }
                    ]}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    actions={[
                        {
                            icon: <PlusOutlined />,
                            label: 'Add',
                            onClick: () => console.log('on click add')
                        },
                        {
                            icon: <MinusOutlined />,
                            label: 'Subtract',
                            onClick: () => console.log('on click subtract')
                        }
                    ]}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    actions={[
                        {
                            icon: <PlusOutlined />,
                            label: 'Add',
                            onClick: () => console.log('on click add')
                        },
                        {
                            icon: <MinusOutlined />,
                            label: 'Subtract',
                            onClick: () => console.log('on click subtract')
                        },
                        {
                            icon: <PercentageOutlined />,
                            label: 'Percent',
                            onClick: () => console.log('on click percent')
                        }
                    ]}
                />
            </KitSpace>
        </div>
    );
};

export default App;
