import React, {FC} from 'react';
import {KitModal} from '@kit/Feedback';
import {KitButton, KitTypography} from '@kit/General';
import {getParentSelector, ModalContainer} from './commons.ts';

export const BasicModalTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic modal</KitTypography.Title>
        <div style={{display: 'flex'}}>
            <ModalContainer id="modal-test-container"></ModalContainer>
            <KitModal
                title="Basic Modal"
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
        </div>
    </div>
);
