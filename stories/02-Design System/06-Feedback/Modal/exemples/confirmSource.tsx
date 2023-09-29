import React, {useState} from 'react';
import {KitModal, KitButton, KitSpace, KitSelect, KitCheckbox} from '@kit/index';

const options = [
    {
        label: 'info',
        value: 'info'
    },
    {
        label: 'success',
        value: 'success'
    },
    {
        label: 'error',
        value: 'error'
    },
    {
        label: 'warning',
        value: 'warning'
    },
    {
        label: 'confirm',
        value: 'confirm'
    }
];

const App = () => {
    const handleShowConfirm = () => {
        KitModal.confirm({
            image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'confirm action',
            firstLine: 'Do you confirm this action ?',
            secondLine: 'you can also show some complementary text',
            icon: true,
            showSecondaryCta: true
        })
    }

    return (
        <KitSpace direction="vertical">
            <KitButton type="primary" onClick={handleShowConfirm}>
                Open Modal
            </KitButton>
        </KitSpace>
    );
};

export default App;
