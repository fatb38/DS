import React, {CSSProperties} from 'react';
import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

const App = () => {
    const idCardProps: IKitIdCard = {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        avatarProps: {label: 'TG'}
    };

    const baseStyle: CSSProperties = {
        color: 'var(--general-colors-neutral-grey-grey400)',
        backgroundColor: 'var(--general-colors-neutral-grey-grey100)',
        borderRadius: '8px',
        border: '2px dashed var(--general-colors-neutral-grey-grey200)',
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
