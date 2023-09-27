import React from 'react';
import {KitItemCard, KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {DownloadOutlined, FolderOpenOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
                onEdit={() => {
                    console.log('onEdit');
                }}
                actions={[
                    <KitButton onClick={() => console.log('download action')}>
                        <DownloadOutlined />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FolderOpenOutlined />
                    </KitButton>
                ]}
            />
            <KitItemCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
                onEdit={() => {
                    console.log('onEdit');
                }}
                actions={[
                    <KitButton onClick={() => console.log('download action')}>
                        <DownloadOutlined />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FolderOpenOutlined />
                    </KitButton>
                ]}
            />
        </KitSpace>
    );
};

export default App;
