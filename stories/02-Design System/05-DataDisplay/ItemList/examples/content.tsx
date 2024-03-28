import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitAvatar, KitItemList} from '@kit/DataDisplay';

const App = () => {
    const idCardProps = {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        avatar: <KitAvatar label={'TG'} />
    };

    const baseStyle = {
        color: 'var(--general-colors-secondary-mediumGrey-mediumGrey400)',
        backgroundColor: 'var(--general-colors-secondary-mediumGrey-mediumGrey100)',
        borderRadius: '8px',
        border: '2px dashed var(--general-colors-secondary-mediumGrey-mediumGrey200)',
        fontSize: 'var(--general-typography-fontSize7)',
        margin: '8px'
    };

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList
                    idCardProps={idCardProps}
                    content={
                        <div
                            style={{
                                ...baseStyle,
                                padding: '8px 8px'
                            }}
                        >
                            Replace this empty component by your component (eg. a progress)
                        </div>
                    }
                />
                <KitItemList
                    idCardProps={idCardProps}
                    content={
                        <div
                            style={{
                                ...baseStyle,
                                width: '300px',
                                padding: '16px 8px'
                            }}
                        >
                            Replace this empty component by your component (eg. a progress)
                        </div>
                    }
                />
                <KitItemList
                    idCardProps={idCardProps}
                    content={
                        <div
                            style={{
                                ...baseStyle,
                                width: '200px',
                                padding: '16px 8px'
                            }}
                        >
                            Small content
                        </div>
                    }
                />
            </div>
        </KitSpace>
    );
};

export default App;
