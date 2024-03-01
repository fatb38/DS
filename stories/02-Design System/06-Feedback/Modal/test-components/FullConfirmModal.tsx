import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {getParentSelector, ModalContainer, modalProps} from './commons.ts';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog.tsx';
import {KitApp} from '@kit/App';

export const FullConfirmModalTest: FunctionComponent = () => {
    return (
        <KitApp>
            <div>
                <KitTypography.Title level="h3">Full confirm modal</KitTypography.Title>
                <div style={{display: 'flex'}}>
                    <ModalContainer id="modal-test-info-full"></ModalContainer>
                    <ConfirmDialog
                        isOpen
                        shouldFocusAfterRender={false}
                        ariaHideApp={false}
                        parentSelector={getParentSelector('#modal-test-info-full')}
                        {...modalProps}
                        image="public/images/portrait.png"
                        type="info"
                        title=" info dialog"
                        okCancel={modalProps.showSecondaryCta}
                    />
                </div>
            </div>
        </KitApp>
    );
};
