import styled from 'styled-components';

export const getParentSelector = (selector: string) => () =>
    document.querySelector<HTMLElement>(selector) || document.querySelector<HTMLElement>('body');

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
    content: 'Do you confirm this action ?',
    showCloseIcon: true,
    icon: true,
    showSecondaryCta: false
};
