import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {KitInput} from '@kit/DataEntry';
import {KitButton} from '@kit/General';
import {
    CopyOutlined,
    DeleteOutlined,
    FilterOutlined,
    GroupOutlined,
    HomeOutlined,
    LayoutOutlined,
    SaveOutlined,
    SearchOutlined,
    UndoOutlined
} from '@ant-design/icons';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '400px'}}>
                <KitMenu
                    title="View options"
                    onCloseClick={() => console.log('on click close')}
                    segmentedButton={<KitButton type="primary" icon={<HomeOutlined />} />}
                    primaryInput={<KitInput placeholder="Opération #1" />}
                    secondaryInput={<KitInput placeholder="Description" />}
                >
                    <KitDivider noMargin color="lightGrey" />
                    <KitMenu.Item
                        title="Layout"
                        icon={<LayoutOutlined />}
                        value="List"
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '8px 0 2px 0'}}
                    />
                    <KitMenu.Item title="Search" icon={<SearchOutlined />} style={{margin: '2px 0'}} />
                    <KitMenu.Item
                        title="Quick Filters"
                        icon={<FilterOutlined />}
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Filters"
                        icon={<FilterOutlined />}
                        value="0"
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Group by"
                        icon={<GroupOutlined />}
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0 8px 0'}}
                    />
                    <KitDivider noMargin color="lightGrey" />
                    <KitMenu.Item
                        title="Save view"
                        icon={<SaveOutlined />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '16px 0 2px 0'}}
                    />
                    <KitMenu.Item
                        title="Duplicate"
                        icon={<CopyOutlined />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Restore view"
                        icon={<UndoOutlined />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '2px 0 0 0'}}
                    />
                    <KitMenu.Item
                        style={{marginTop: '16px'}}
                        title="Delete view"
                        icon={<DeleteOutlined />}
                        onClick={() => console.log('on click itemMenu')}
                        type="ctaDanger"
                    />
                </KitMenu>
            </div>
        </div>
    );
};

export default App;
