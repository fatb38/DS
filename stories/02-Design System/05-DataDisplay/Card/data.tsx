import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitCard} from '@kit/DataDisplay';
import {KitSwitch} from '@kit/DataEntry';
import {KitIcon, KitTypography} from '@kit/General';
import KitLink from '@kit/General/Typography/Link';
import {KitSpace} from '@kit/Layout';
import React, {useState} from 'react';
import {IEditorTemplate} from '../../../types';

const CardArgTypes = {
    actions: {
        name: 'actions',
        description: 'The action list, shows at the bottom of the Card',
        table: {
            type: {
                summary: 'Array<ReactNode>'
            },
            category: 'Card'
        }
    },
    bodyStyle: {
        name: 'bodyStyle',
        description: 'Inline style to apply to the card content',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Card'
        }
    },
    cover: {
        name: 'cover',
        description: 'Card cover',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    contentTitle: {
        name: 'contentTitle',
        control: {type: 'text'},
        description: 'Title of the Card content',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    contentDescription: {
        name: 'contentDescription',
        control: {type: 'text'},
        description: 'Description of the Card',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled card and actions',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Card'
        }
    },
    extra: {
        name: 'extra',
        description: 'Content to render in the top-right corner of the card',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    headStyle: {
        name: 'headStyle',
        description: 'Inline style to apply to the card head',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Card'
        }
    },
    onContentTitleClick: {
        name: 'onContentTitleClick',
        description: 'Action on content title click (link icon is display when this props is fullfill)',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'Card'
        }
    },
    title: {
        name: 'title',
        description: 'Card title',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    separator: {
        name: 'separator',
        description: 'Display separator between title and content',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'Boolean'
            },
            defaultValue: {summary: false},
            category: 'Card'
        }
    },
    sideSpacing: {
        name: 'sideSpacing',
        description: 'Space around Card image',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'Boolean'
            },
            defaultValue: {summary: true},
            category: 'Card'
        }
    }
};

export const argTypes = {
    ...CardArgTypes
};

export const Template = args => {
    const [isCover, setCover] = useState(true);
    const [isActions, setActions] = useState(true);
    const [isExtra, setExtra] = useState(true);

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTypography.Text>
                    Cover: <KitSwitch defaultChecked onChange={setCover} />
                </KitTypography.Text>
                <KitTypography.Text>
                    Actions: <KitSwitch defaultChecked onChange={setActions} />
                </KitTypography.Text>
                <KitTypography.Text>
                    Extra: <KitSwitch defaultChecked onChange={setExtra} />
                </KitTypography.Text>
            </KitSpace>
            <KitCard
                {...args}
                cover={isCover && <img alt="example" src="public/images/free-copyright.jpeg" />}
                extra={isExtra && <KitLink href="#">More</KitLink>}
                actions={
                    isActions && [
                        <KitIcon
                            icon={<FontAwesomeIcon icon={faGear} />}
                            key="setting"
                            onClick={() => console.log('click button settings')}
                        />,
                        <KitIcon
                            icon={<FontAwesomeIcon icon={faPencil} />}
                            key="edit"
                            onClick={() => console.log('click button edit')}
                        />,
                        <KitIcon
                            icon={<FontAwesomeIcon icon={faEllipsis} />}
                            key="ellipsis"
                            onClick={() => console.log('click button ellipsis')}
                        />
                    ]
                }
            />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                title="Card Title"
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
            />
            <KitCard
                title="Card Title"
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
                disabled
            />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Card';
EditorTemplate.title = 'Card';
