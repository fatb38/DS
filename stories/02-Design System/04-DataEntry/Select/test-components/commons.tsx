import React from 'react';
import {colorsPalette} from '@theme/aristid/general/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {IKitSelect} from '@kit/DataEntry/Select/types';

export const colorOptions = [
    {
        value: 'not-allowed',
        color: colorsPalette.secondary.error['400'],
        label: 'Not allowed'
    },
    {
        value: 'denied',
        color: colorsPalette.tertiary.yellow['400'],
        label: 'Denied'
    },
    {
        value: 'todo',
        color: colorsPalette.primary['400'],
        label: 'Todo by agency'
    },
    {
        value: 'ok',
        color: colorsPalette.secondary.success['400'],
        label: 'Ok done by agency'
    }
];

export const iconOptions = [
    {
        value: 'file-1',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 1'
    },
    {
        value: 'file-2',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 2'
    },
    {
        value: 'file-3-1',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 3.1'
    },
    {
        value: 'file-3-2',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 3.2'
    }
];

export const colorDisabledOptions = [
    {
        value: 'not-allowed',
        color: colorsPalette.secondary.error['400'],
        label: 'Not allowed',
        disabled: true
    },
    {
        value: 'denied',
        color: colorsPalette.tertiary.yellow['400'],
        label: 'Denied',
        disabled: true
    },
    {
        value: 'todo',
        color: colorsPalette.primary['400'],
        label: 'Todo by agency'
    },
    {
        value: 'ok',
        color: colorsPalette.secondary.success['400'],
        label: 'Ok done by agency'
    }
];

export const groupOptions = [
    {
        label: 'Folder 3',
        options: [
            {
                value: 'file-3-1',
                icon: <FontAwesomeIcon icon={faFile} />,
                label: 'File 3.1'
            },
            {
                value: 'file-3-2',
                icon: <FontAwesomeIcon icon={faFile} />,
                label: 'File 3.2'
            }
        ]
    },
    {
        label: 'Folder 4',
        options: [
            {
                value: 'file-4-1',
                icon: <FontAwesomeIcon icon={faFile} />,
                label: 'File 4.1'
            },
            {
                value: 'file-4-2',
                icon: <FontAwesomeIcon icon={faFile} />,
                label: 'File 4.2'
            },
            {
                value: 'file-4-3',
                icon: <FontAwesomeIcon icon={faFile} />,
                label: 'File 4.3'
            }
        ]
    }
];

export const idCardOptions: IKitSelect['options'] = [
    {
        value: 'cha-yellow',
        label: 'Chartreuse Jaune',
        idCard: {
            description: 'Chartreuse Jaune',
            avatarProps: {
                size: 'small',
                shape: 'square',
                imageFit: 'contain',
                src: 'public/images/chartreuse-jaune.png',
                label: 'Chartreuse Jaune'
            }
        }
    },
    {
        value: 'cha-vep',
        label: 'Chartreuse VEP',
        idCard: {
            description: 'Chartreuse VEP',
            avatarProps: {
                size: 'small',
                shape: 'square',
                imageFit: 'contain',
                src: 'public/images/chartreuse-vep.png',
                label: 'Chartreuse VEP'
            }
        }
    },
    {
        value: 'cha-verte',
        label: 'Chartreuse Verte',
        idCard: {
            description: 'Chartreuse Verte',
            avatarProps: {
                size: 'small',
                shape: 'square',
                imageFit: 'contain',
                src: 'public/images/chartreuse-verte.png',
                label: 'Chartreuse Verte'
            }
        }
    }
];
