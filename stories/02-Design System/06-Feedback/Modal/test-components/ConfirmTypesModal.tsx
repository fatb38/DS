import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {getParentSelector, ModalContainer, modalProps} from './commons.ts';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog.tsx';
import {KitApp} from '@kit/App';

export const ConfirmTypesModalTest: FunctionComponent = () => (
    <KitApp>
        <KitTypography.Title level="h3">Confirm types modal</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div style={{display: 'flex', gap: '16px'}}>
                <ModalContainer id="modal-test-info"></ModalContainer>
                <ModalContainer id="modal-test-success"></ModalContainer>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <ModalContainer id="modal-test-error"></ModalContainer>
                <ModalContainer id="modal-test-warning"></ModalContainer>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <ModalContainer id="modal-test-confirm"></ModalContainer>
                <ModalContainer id="modal-test-confirm-danger"></ModalContainer>
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
        />
        <ConfirmDialog
            isOpen
            shouldFocusAfterRender={false}
            ariaHideApp={false}
            parentSelector={getParentSelector('#modal-test-success')}
            {...modalProps}
            type="success"
            title="Success dialog"
            okCancel={modalProps.showSecondaryCta}
        />
        <ConfirmDialog
            isOpen
            shouldFocusAfterRender={false}
            ariaHideApp={false}
            parentSelector={getParentSelector('#modal-test-error')}
            {...modalProps}
            type="error"
            title="Error dialog"
            okCancel={modalProps.showSecondaryCta}
        />
        <ConfirmDialog
            isOpen
            shouldFocusAfterRender={false}
            ariaHideApp={false}
            parentSelector={getParentSelector('#modal-test-warning')}
            {...modalProps}
            type="warning"
            title="Warning dialog"
            okCancel={modalProps.showSecondaryCta}
        />
        <ConfirmDialog
            isOpen
            shouldFocusAfterRender={false}
            ariaHideApp={false}
            parentSelector={getParentSelector('#modal-test-confirm')}
            {...modalProps}
            type="confirm"
            title=" Confirm dialog"
            okCancel={modalProps.showSecondaryCta}
        />
        <ConfirmDialog
            isOpen
            shouldFocusAfterRender={false}
            dangerConfirm={true}
            ariaHideApp={false}
            parentSelector={getParentSelector('#modal-test-confirm-danger')}
            {...modalProps}
            type="confirm"
            title=" Confirm dialog danger"
            okCancel={modalProps.showSecondaryCta}
        />
    </KitApp>
);
