import React from 'react';
import {KitModal, KitButton, KitSpace} from '@kit/index';

const App = () => {
    const handleShowConfirm = () => {
        KitModal.confirm({
            image: 'public/images/portrait.png',
            title: 'confirm action',
            firstLine: 'Do you confirm this action ?',
            secondLine: 'you can also show some complementary text',
            icon: true,
            showSecondaryCta: true,
            type: 'confirm'
        });
    };

    return (
        <KitSpace direction="vertical">
            <KitButton type="primary" onClick={handleShowConfirm}>
                Open Modal
            </KitButton>
        </KitSpace>
    );
};

export default App;
