import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    const recommendedColors = {
        label: 'Recommended',
        colors: [
            '#000000',
            '#000000E0',
            '#000000A6',
            '#00000073',
            '#00000040',
            '#00000026',
            '#0000001A',
            '#00000012',
            '#0000000A',
            '#00000005',
            '#F5222D',
            '#FA8C16',
            '#FADB14',
            '#8BBB11',
            '#52C41A',
            '#13A8A8',
            '#1677FF',
            '#2F54EB',
            '#722ED1',
            '#EB2F96',
            '#F5222D4D',
            '#FA8C164D',
            '#FADB144D',
            '#8BBB114D',
            '#52C41A4D',
            '#13A8A84D',
            '#1677FF4D',
            '#2F54EB4D',
            '#722ED14D',
            '#EB2F964D'
        ]
    };

    const recentColors = {
        label: 'Recent',
        colors: []
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTypography.Text>Title :</KitTypography.Text>
                <KitColorPicker
                    panelRender={panel => (
                        <div className="custom-panel">
                            <KitTypography.Title level="h4" style={{marginBlockStart: 0}}>
                                Color Picker
                            </KitTypography.Title>
                            {panel}
                        </div>
                    )}
                />
            </KitSpace>
            <KitSpace>
                <KitTypography.Text>Horizontal Layout :</KitTypography.Text>
                <KitColorPicker
                    styles={{
                        popupOverlayInner: {
                            width: 468
                        }
                    }}
                    presets={[recommendedColors, recentColors]}
                    panelRender={(_, {components: {Picker, Presets}}) => (
                        <div
                            className="custom-panel"
                            style={{
                                display: 'flex',
                                width: 468
                            }}
                        >
                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <Presets />
                            </div>
                            <KitDivider
                                color="lightGrey"
                                type="vertical"
                                style={{
                                    height: 'auto'
                                }}
                            />
                            <div
                                style={{
                                    width: 234
                                }}
                            >
                                <Picker />
                            </div>
                        </div>
                    )}
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
