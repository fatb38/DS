import React from 'react';
import styled from 'styled-components';
import type {Meta, StoryObj} from '@storybook/react';
import {KitModal} from '@kit/Feedback';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog';
import {KitButton} from '@kit/General';
import {Template} from './Template';
import {argTypes} from './data';
import {IKitModal} from '@kit/Feedback/Modal/types';
import {KitApp} from '@kit/App';

const meta: Meta<typeof KitModal> = {
    component: KitModal,
    title: 'Design System/Feedback/Modal',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitModal>;

const StyleContainer = styled.div`
    padding-top: 1rem;

    .kit-modal-overlay {
        position: relative;
        background: none;
    }
`;

const getParentSelector = (selector: string) => () =>
    document.querySelector<HTMLElement>(selector) || document.querySelector<HTMLElement>('body');

const modalProps = {
    type: 'confirm',
    image: undefined,
    firstLine: 'Do you confirm this action ?',
    secondLine: 'you can also show some complementary text',
    icon: true,
    showSecondaryCta: false
};

export const Api: Story = {
    render: Template as IKitModal,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <>
            <StyleContainer id="modal-test-container"></StyleContainer>
            <KitModal
                title="Basic Modal"
                closable
                close={() => {}}
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-container')}
                footer={<KitButton onClick={() => {}}>Close</KitButton>}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </KitModal>
        </>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const FullConfirm: Story = {
    render: () => (
        <KitApp>
            <StyleContainer id="modal-test-info"></StyleContainer>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-info')}
                {...modalProps}
                image="public/images/portrait.png"
                type="info"
                title=" info dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
        </KitApp>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const ConfirmTypes: Story = {
    render: () => (
        <KitApp>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div style={{display: 'flex', gap: '16px'}}>
                    <StyleContainer id="modal-test-info"></StyleContainer>
                    <StyleContainer id="modal-test-success"></StyleContainer>
                </div>
                <div style={{display: 'flex', gap: '16px'}}>
                    <StyleContainer id="modal-test-error"></StyleContainer>
                    <StyleContainer id="modal-test-warning"></StyleContainer>
                </div>
                <div style={{display: 'flex', gap: '16px'}}>
                    <StyleContainer id="modal-test-confirm"></StyleContainer>
                </div>
            </div>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-info')}
                {...modalProps}
                type="info"
                title="Info dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-success')}
                {...modalProps}
                type="success"
                title="Success dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-error')}
                {...modalProps}
                type="error"
                title="Error dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-warning')}
                {...modalProps}
                type="warning"
                title="Warning dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
            <ConfirmDialog
                isOpen
                shouldFocusAfterRender={false}
                ariaHideApp={false}
                parentSelector={getParentSelector('#modal-test-confirm')}
                {...modalProps}
                type="confirm"
                title=" Confirm dialog"
                okCancel={modalProps.showSecondaryCta}
            ></ConfirmDialog>
        </KitApp>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
