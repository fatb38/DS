import React, {useState} from 'react';
import {KitSpace, KitSelect, KitCheckbox} from '@kit/index';
import styled from 'styled-components';
import {IKitConfirmDialog} from '@kit/Feedback/Modal/types';
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
    const [modalProps, setModalProps] = useState<IKitConfirmDialog>({
        type: 'confirm',
        image: undefined,
        title: undefined,
        content: 'Do you confirm this action ?',
        showCloseIcon: false,
        dangerConfirm: false,
        icon: false,
        showSecondaryCta: false
    });

    const handleTypeChange = (type: IKitConfirmDialog['type']) => setModalProps({...modalProps, type});

    const handleShowImage = () =>
        setModalProps({
            ...modalProps,
            image: !modalProps.image ? 'public/images/portrait.png' : undefined
        });

    const handleShowIcon = () =>
        setModalProps({
            ...modalProps,
            icon: !modalProps.icon
        });

    const handleShowCloseIcon = () =>
        setModalProps({
            ...modalProps,
            showCloseIcon: !modalProps.showCloseIcon
        });

    const handleShowTitle = () =>
        setModalProps({
            ...modalProps,
            title: !modalProps.title ? 'confirm action' : undefined
        });

    const handleshowSecondCta = () =>
        setModalProps({
            ...modalProps,
            showSecondaryCta: !modalProps.showSecondaryCta
        });

    const handleDangerCta = () =>
        setModalProps({
            ...modalProps,
            dangerConfirm: !modalProps.dangerConfirm
        });

    const getContainer = () => document.querySelector('#modal-test-container');

    return (
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitSelect options={options} labelOnly defaultValue="confirm" onChange={handleTypeChange} />
                <KitSpace>
                    <KitCheckbox onChange={handleShowImage}>Show Image</KitCheckbox>
                    <KitCheckbox onChange={handleShowIcon}>Show Icon</KitCheckbox>
                    <KitCheckbox onChange={handleShowTitle}>Show Title</KitCheckbox>
                    <KitCheckbox onChange={handleShowCloseIcon}>Show Close Icon</KitCheckbox>
                    <KitCheckbox onChange={handleshowSecondCta}>Show Secondary Cta</KitCheckbox>
                    <KitCheckbox onChange={handleDangerCta}>Danger Cta</KitCheckbox>
                </KitSpace>
            </KitSpace>
            <StyleContainer id="modal-test-container">
                <ConfirmDialog
                    isOpen
                    parentSelector={getContainer}
                    {...modalProps}
                    okCancel={modalProps.showSecondaryCta as boolean}
                    appElement={document.getElementById('storybook-docs')}
                />
            </StyleContainer>
        </KitSpace>
    );
};

export default App;
