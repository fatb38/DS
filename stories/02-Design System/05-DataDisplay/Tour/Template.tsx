import {faCircleXmark, faRectangleXmark} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTour} from '@kit/DataDisplay';
import {IKitTour} from '@kit/DataDisplay/Tour/types';
import {KitButton, KitIcon} from '@kit/General';
import {KitDivider, KitSpace} from '@kit/Layout';
import React, {useRef, useState} from 'react';
import {IEditorTemplate} from 'stories/types';

const getCloseIcon = (icon?: string) => {
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

export const Template = (args: IKitTour) => {
    const {closeIcon, ...tourArgs} = args;
    const refUpload = useRef(null);
    const refSave = useRef(null);
    const refMore = useRef(null);

    const customSteps: IKitTour['steps'] = [
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
                closeIcon={getCloseIcon(closeIcon as string)}
            />
        </>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const refUpload = useRef(null);

    const [_open, setOpen] = useState(false);

    const customSteps: IKitTour['steps'] = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            target: () => refUpload.current
        }
    ];

    return (
        <>
            <KitButton type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </KitButton>

            <KitDivider />

            <KitButton ref={refUpload}> Upload</KitButton>
            <KitTour open={_open} steps={customSteps} onClose={() => setOpen(false)} />
        </>
    );
};
EditorTemplate.path = 'components.Tour';
EditorTemplate.title = 'Tour';
