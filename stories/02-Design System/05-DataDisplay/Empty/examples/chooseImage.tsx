import React, {useState} from 'react';
import {KitEmpty} from '@kit/DataDisplay';
import {KitRadio} from '@kit/DataEntry';
import {AntFlex} from '@kit/Ant';
import {RadioChangeEvent} from 'antd';

const App = () => {
    const defaultEmptyImageValue = 'folder';
    const [emptyImage, setEmptyImage] = useState(KitEmpty.ASSET_FOLDER);

    const onChange = (event: RadioChangeEvent) => {
        switch (event.target.value) {
            case 'folder':
                setEmptyImage(KitEmpty.ASSET_FOLDER);
                break;
            case 'list':
                setEmptyImage(KitEmpty.ASSET_LIST);
                break;
            case 'modal':
                setEmptyImage(KitEmpty.ASSET_MODAL);
                break;
            case 'page':
                setEmptyImage(KitEmpty.ASSET_PAGE);
                break;
            case 'result':
            default:
                setEmptyImage(KitEmpty.ASSET_RESULT);
                break;
        }
    };

    const assetsOptions = [
        {
            label: 'Folder',
            value: 'folder'
        },
        {
            label: 'List',
            value: 'list'
        },
        {
            label: 'Modal',
            value: 'modal'
        },
        {
            label: 'Page',
            value: 'page'
        },
        {
            label: 'Result',
            value: 'result'
        }
    ];

    return (
        <AntFlex vertical={true} gap={50}>
            <KitRadio.Group
                label="Choose an asset"
                options={assetsOptions}
                defaultValue={defaultEmptyImageValue}
                onChange={onChange}
            />
            <KitEmpty image={emptyImage} />
        </AntFlex>
    );
};

export default App;
