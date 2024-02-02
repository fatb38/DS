import React, {useState} from 'react';
import {KitModal, KitButton} from '@kit/index';

const App = () => {
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
                title="Fullscreen Modal"
                closable
                fullscreen
                close={handleCancel}
                isOpen={isModalOpen}
                footer={<KitButton onClick={handleCancel}>Close</KitButton>}
                appElement={document.getElementById('storybook-docs')}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </KitModal>
        </>
    );
};

export default App;
