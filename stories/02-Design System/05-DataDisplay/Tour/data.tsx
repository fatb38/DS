import {faCircleXmark, faRectangleXmark} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTour} from '@kit/DataDisplay';
import {KitButton, KitIcon} from '@kit/General';
import {KitDivider, KitSpace} from '@kit/Layout';
import {TourProps} from 'antd';
import React, {useRef, useState} from 'react';
import {IEditorTemplate} from 'stories/types';

const placement = [
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
];

const getCloseIcon = (icon: string) => {
    switch (icon) {
        case 'faCircleXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faCircleXmark} />} />;
        case 'faXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faXmark} />} />;
        case 'faRectangleXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faRectangleXmark} />} />;
        case '-':
        default:
            return null;
    }
};

export const argTypes = {
    arrow: {
        name: 'arrow',
        description:
            'Whether to show the arrow, including the configuration whether to point to the center of the element',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { pointAtCenter: boolean}'
            },
            category: 'Tour'
        }
    },
    closeIcon: {
        name: 'closeIcon',
        description: 'Customize close icon',
        options: ['-', 'faCircleXmark', 'faXmark', 'faRectangleXmark'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            category: 'Tour'
        }
    },
    placement: {
        name: 'placement',
        description: 'Position of the guide card relative to the target element',
        options: placement,
        control: {
            type: 'select',
            defaultValue: '-'
        },
        table: {
            type: {
                summary:
                    'center | left | leftTop | leftBottom | right | rightTop | rightBottom | top | topLeft | topRight | bottom | bottomLeft | bottomRight'
            },
            category: 'Tour'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback function on shutdown',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'Tour'
        }
    },
    mask: {
        name: 'mask',
        description: 'Whether to enable masking, change mask style and fill color by pass custom props',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { style?: React.CSSProperties; color?: string; }'
            },
            defaultValue: {
                summary: true
            },
            category: 'Tour'
        }
    },
    type: {
        name: 'type',
        description: 'Type, affects the background color and text color',
        table: {
            type: {
                summary: 'default primary'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'Tour'
        }
    },
    open: {
        name: 'open',
        description: 'Open tour',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tour'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when the step changes. Current is the previous step',
        table: {
            type: {
                summary: '(current: number) => void'
            },
            category: 'Tour'
        }
    },
    current: {
        name: 'current',
        description: 'What is the current step',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tour'
        }
    },
    scrollIntoViewOptions: {
        name: 'scrollIntoViewOptions',
        description: 'support pass custom scrollIntoView options',
        table: {
            type: {
                summary: 'boolean | ScrollIntoViewOptions'
            },
            defaultValue: {summary: true},
            category: 'Tour'
        }
    },
    indicatorsRender: {
        name: 'indicatorsRender',
        description: 'custom indicator',
        table: {
            type: {
                summary: '(current: number, total: number) => ReactNode'
            },
            category: 'Tour'
        }
    },
    zIndex: {
        name: 'zIndex',
        description: `Tour's zIndex`,
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: '1001'
            },
            category: 'Tour'
        }
    },
    target: {
        name: 'target',
        description: 'Get the element the guide card points to. Empty makes it show in center of screen',
        table: {
            type: {
                summary: '() => HTMLElement HTMLElement'
            },
            category: 'TourStep'
        }
    },
    arrowStep: {
        name: 'arrow',
        description:
            'Whether to show the arrow, including the configuration whether to point to the center of the element',
        table: {
            type: {
                summary: 'boolean { pointAtCenter: boolean}'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    closeIconStep: {
        name: 'closeIcon',
        description: 'Customize close icon',
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    cover: {
        name: 'cover',
        description: 'Displayed pictures or videos',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    title: {
        name: 'title',
        description: 'title',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    description: {
        name: 'description',
        description: 'description',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    placementStep: {
        name: 'placement',
        description: 'Position of the guide card relative to the target element',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    onCloseStep: {
        name: 'onClose',
        description: 'Callback function on shutdown',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'TourStep'
        }
    },
    maskStep: {
        name: 'mask',
        description:
            'Whether to enable masking, change mask style and fill color by pass custom props, the default follows the mask property of Tour',
        table: {
            type: {
                summary: 'boolean | { style?: React.CSSProperties; color?: string; }'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    typeStep: {
        name: 'type',
        description: 'Type, affects the background color and text color',
        table: {
            type: {
                summary: 'default primary'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'TourStep'
        }
    },
    nextButtonProps: {
        name: 'nextButtonProps',
        description: 'Properties of the Next button',
        table: {
            type: {
                summary: '{ children: ReactNode; onClick: Function }'
            },
            category: 'TourStep'
        }
    },
    prevButtonProps: {
        name: 'prevButtonProps',
        description: 'Properties of the previous button',
        table: {
            type: {
                summary: '{ children: ReactNode; onClick: Function }'
            },
            category: 'TourStep'
        }
    },
    scrollIntoViewOptionsStep: {
        name: 'scrollIntoViewOptions',
        description:
            'support pass custom scrollIntoView options, the default follows the `scrollIntoViewOptions` property of Tour',
        table: {
            type: {
                summary: 'boolean | ScrollIntoViewOptions'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    }
};

export const Template = args => {
    const {steps, open, closeIcon, ...tourArgs} = args;
    const refUpload = useRef(null);
    const refSave = useRef(null);
    const refMore = useRef(null);

    const customSteps: TourProps['steps'] = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            target: () => refUpload.current
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => refSave.current
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => refMore.current
        }
    ];

    const [_open, setOpen] = useState(false);

    return (
        <>
            <KitButton type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </KitButton>

            <KitDivider />

            <KitSpace>
                <KitButton ref={refUpload}> Upload</KitButton>
                <KitButton ref={refSave} type="primary">
                    Save
                </KitButton>
                <KitButton ref={refMore} icon={<FontAwesomeIcon icon={faEllipsis} />} />
            </KitSpace>

            <KitTour
                {...tourArgs}
                open={_open}
                onClose={() => setOpen(false)}
                steps={customSteps}
                closeIcon={getCloseIcon(closeIcon)}
            />
        </>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return <div />;
};
EditorTemplate.path = 'components.Tour';
EditorTemplate.title = 'Tour';
