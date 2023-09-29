import React, {useState} from 'react';
import {KitSpace, KitSelect, KitCheckbox} from '@kit/index';
import styled from 'styled-components';
import { confirmDialogProps } from '@kit/Feedback/Modal/types';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog';

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
const StyleContainer = styled.div`
    padding-top: 1rem;

    .kit-modal-overlay {
        position: relative;
        background: none;
    }
`;

const App = () => {
    const [modalProps, setModalProps] = useState<confirmDialogProps>({
        type: 'confirm',
        image: undefined,
        title: undefined,
        firstLine: 'Do you confirm this action ?',
        secondLine: null,
        icon: false,
        showSecondaryCta: false
    });

    const handleTypeChange = (type) => setModalProps({...modalProps, type});

    const handleShowImage = () => setModalProps({
        ...modalProps,
        image: !modalProps.image
            ? 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            : undefined
    });

    const handleShowIcon = () => setModalProps({
        ...modalProps,
        icon: !modalProps.icon
    });

    const handleShowTitle = () => setModalProps({
        ...modalProps,
        title: !modalProps.title ? 'confirm action' : undefined
    });

    const handleShowSecondLine = () => setModalProps({
        ...modalProps,
        secondLine: !modalProps.secondLine ? 'you can also show some complementary text' : undefined
    });

    const handleshowSecondCta = () => setModalProps({
        ...modalProps,
        showSecondaryCta: !modalProps.showSecondaryCta
    });

    const getContainer = () => document.querySelector("#modal-test-container");

    return (
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitSelect
                    options={options}
                    labelOnly
                    defaultValue="confirm"
                    onChange={handleTypeChange}
                />
                <KitSpace>
                    <KitCheckbox onChange={handleShowImage}>Show Image</KitCheckbox>
                    <KitCheckbox onChange={handleShowIcon}>Show Icon</KitCheckbox>
                    <KitCheckbox onChange={handleShowTitle}>Show Title</KitCheckbox>
                    <KitCheckbox onChange={handleShowSecondLine}>Show Second line</KitCheckbox>
                    <KitCheckbox onChange={handleshowSecondCta}>Show Secondary Cta</KitCheckbox>
                </KitSpace>
            </KitSpace>
            <StyleContainer id="modal-test-container"></StyleContainer>
            <ConfirmDialog isOpen parentSelector={getContainer} {...modalProps} okCancel={modalProps.showSecondaryCta}></ConfirmDialog>
        </KitSpace>
    );
};

export default App;