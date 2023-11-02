import React, {useEffect, useRef, useState} from 'react';
import {KitModal} from '@kit/Feedback/';
import {KitButton} from '@kit/General/';
import {IEditorTemplate} from '../../../types';
import ConfirmDialog from '@kit/Feedback/Modal/ConfirmDialog';
import {styled} from 'styled-components';
import {KitSpace} from '@kit/Layout';

export const argTypes = {
    isOpen: {
        name: 'isOpen',
        description: 'Boolean describing if the modal should be shown or not.',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Modal'
        }
    },
    style: {
        name: 'style',
        description:
            '`{content: {}, oberlay: {}}`. Object indicating styles to be used for the modal. It has two keys, `overlay` and `content`.',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Modal'
        }
    },
    width: {
        name: 'width',
        description: 'Width of the modal',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '520px'
            },
            category: 'Modal'
        }
    },
    height: {
        name: 'height',
        description: 'Height of the modal',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'initial'
            },
            category: 'Modal'
        }
    },
    showCloseIcon: {
        name: 'showCloseIcon',
        description: 'Whether to show the close icon on top right of the modal',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Modal'
        }
    },
    close: {
        name: 'close',
        description:
            'Function that will be run when clicking close icon, clicking overlay (if enabled) or pressing esc key',
        table: {
            type: {
                summary: '(args: any[]) => void'
            },
            category: 'Modal'
        }
    },
    title: {
        name: 'title',
        description: 'Title of the modal',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Modal'
        }
    },
    footer: {
        name: 'footer',
        description: 'Footer content',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Modal'
        }
    },
    onAfterOpen: {
        name: 'onAfterOpen',
        description: 'Function that will be run after the modal has opened',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Modal'
        }
    },
    onAfterClose: {
        name: 'onAfterClose',
        description: 'Function that will be run after the modal has closed',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Modal'
        }
    },
    onRequestClose: {
        name: 'onRequestClose',
        description:
            'Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC). Note: It is not called if isOpen is changed by other means.',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Modal'
        }
    },
    contentLabel: {
        name: 'contentLabel',
        description: 'String indicating how the content container should be announced to screenreaders',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'Cancel'
            },
            category: 'Modal'
        }
    },
    portalClassName: {
        name: 'portalClassName',
        description: 'String className to be applied to the portal. See the `Styles` section for more details.',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'ReactModalPortal'
            },
            category: 'Modal'
        }
    },
    overlayClassName: {
        name: 'overlayClassName',
        description: 'String className to be applied to the overlay. See the `Styles` section for more details.',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'kit-modal-overlay'
            },
            category: 'Modal'
        }
    },
    className: {
        name: 'className',
        description: 'String className to be applied to the modal content. See the `Styles` section for more details.',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'kit-modal-overlay'
            },
            category: 'Modal'
        }
    },
    id: {
        name: 'id',
        description: 'String id to be applied to the content div.',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'kit-modal-overlay'
            },
            category: 'Modal'
        }
    },
    ariaHideApp: {
        name: 'ariaHideApp',
        description: 'Boolean indicating if the appElement should be hidden',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Modal'
        }
    },
    shouldFocusAfterRender: {
        name: 'shouldFocusAfterRender',
        description: 'Boolean indicating if the modal should be focused after render.',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Modal'
        }
    },
    shouldCloseOnEsc: {
        name: 'shouldCloseOnEsc',
        description:
            'Boolean indicating if pressing the esc key should close the modal. Note: By disabling the esc key from closing the modal you may introduce an accessibility issue.',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Modal'
        }
    },
    shouldReturnFocusAfterClose: {
        name: 'shouldReturnFocusAfterClose',
        description:
            'Boolean indicating if the modal should restore focus to the element that had focus prior to its display.',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Modal'
        }
    },
    role: {
        name: 'role',
        description:
            "String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. This attribute is `dialog` by default.",
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'dialog'
            },
            category: 'Modal'
        }
    },
    preventScroll: {
        name: 'preventScroll',
        description:
            'Boolean indicating if the modal should use the preventScroll flag when restoring focus to the element that had focus prior to its display.',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Modal'
        }
    },
    parentSelector: {
        name: 'parentSelector',
        description: 'Function that will be called to get the parent element that the modal will be attached to.',
        table: {
            type: {
                summary: '() => document.body'
            },
            category: 'Modal'
        }
    },
    aria: {
        name: 'aria',
        description:
            'Additional aria attributes (optional).`[{labelledBy: "heading", describedBy: "full_description"}]`',
        table: {
            type: {
                summary: '-'
            },
            category: 'Modal'
        }
    },
    data: {
        name: 'data',
        description: 'Additional data attributes (optional). `{name: value]`. expmple : `{background: "green"}`',
        table: {
            type: {
                summary: '-'
            },
            category: 'Modal'
        }
    },
    testId: {
        name: 'testId',
        description: 'String testId that renders a data-testid attribute in the DOM, useful for testing',
        table: {
            type: {
                summary: '-'
            },
            category: 'Modal'
        }
    }
};

export const Template = args => {
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

export const EditorTemplate: IEditorTemplate = () => {
    return (
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
};
EditorTemplate.path = 'components.Modal';
EditorTemplate.title = 'Modal';
