import React, {useState} from 'react';
import {KitModal} from '@kit/Feedback/';
import {KitButton} from '@kit/General/';
import {IEditorTemplate} from '../../../types';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog';
import {styled} from 'styled-components';
import {KitSpace} from '@kit/Layout';
import {IKitModal} from '@kit/Feedback/Modal/types';

export const Template = (args: IKitModal) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <KitButton type="primary" onClick={showModal}>
                Open Modal
            </KitButton>
            <KitModal
                {...args}
                isOpen={isModalOpen}
                close={handleCancel}
                appElement={document.getElementById('storybook-docs')}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <KitButton type="primary" onClick={handleCancel}>
                    Close Modal
                </KitButton>
            </KitModal>
        </>
    );
};

const StyleContainer = styled.div`
    width: fit-content;
    height: fit-content;

    .kit-modal-overlay {
        position: relative;
        background: none;
    }
`;

export const EditorTemplate: IEditorTemplate = () => (
        <KitSpace direction="vertical">
            <StyleContainer id="modal-test-container-1">
                <ConfirmDialog
                    isOpen
                    type="info"
                    icon
                    title="Confirm action"
                    secondLine="You can also show some complementary text"
                    showSecondaryCta
                    parentSelector={() => document.querySelector('#modal-test-container-1')}
                    appElement={document.getElementById('storybook-docs')}
                />
            </StyleContainer>
            <StyleContainer id="modal-test-container-2">
                <ConfirmDialog
                    isOpen
                    type="success"
                    icon
                    title="Confirm action"
                    secondLine="You can also show some complementary text"
                    showSecondaryCta
                    parentSelector={() => document.querySelector('#modal-test-container-2')}
                    appElement={document.getElementById('storybook-docs')}
                />
            </StyleContainer>
            <StyleContainer id="modal-test-container-3">
                <ConfirmDialog
                    isOpen
                    type="warning"
                    icon
                    title="Confirm action"
                    secondLine="You can also show some complementary text"
                    showSecondaryCta
                    parentSelector={() => document.querySelector('#modal-test-container-3')}
                    appElement={document.getElementById('storybook-docs')}
                />
            </StyleContainer>
            <StyleContainer id="modal-test-container-4">
                <ConfirmDialog
                    isOpen
                    type="error"
                    icon
                    title="Confirm action"
                    secondLine="You can also show some complementary text"
                    showSecondaryCta
                    parentSelector={() => document.querySelector('#modal-test-container-4')}
                    appElement={document.getElementById('storybook-docs')}
                />
            </StyleContainer>
        </KitSpace>
    );
EditorTemplate.path = 'components.Modal';
EditorTemplate.title = 'Modal';
