import React from 'react';
import {KitItemCard, KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen} from '@fortawesome/free-regular-svg-icons';

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
                        <FontAwesomeIcon icon={faDownload} />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                    </KitButton>
                ]}
            />
            <KitItemCard
                vertical
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
                        <FontAwesomeIcon icon={faDownload} />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                    </KitButton>
                ]}
            />
        </KitSpace>
    );
};

export default App;
