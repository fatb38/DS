import styled from 'styled-components';

export const getParentSelector = (selector: string) => () => {
    return document.querySelector<HTMLElement>(selector) || document.querySelector<HTMLElement>('body');
};

export const ModalContainer = styled.div`
    padding-top: 1rem;

    .kit-modal-overlay {
        position: relative;
        background: none;
    }
`;

export const modalProps = {
    type: 'confirm',
    image: undefined,
    firstLine: 'Do you confirm this action ?',
    secondLine: 'You can also show some complementary text',
    icon: true,
    showSecondaryCta: false
};