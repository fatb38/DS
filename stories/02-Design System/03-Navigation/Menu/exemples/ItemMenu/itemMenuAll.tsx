import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {HomeOutlined, MinusOutlined, PercentageOutlined, PlusOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '350px'}}>
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    value="Valeur"
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
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemMenu')}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    value="Valeur"
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
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemMenu')}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    value="Valeur"
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
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemMenu')}
                    isSelected
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    value="Valeur"
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
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemMenu')}
                />
            </div>
        </div>
    );
};

export default App;
