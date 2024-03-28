import {colorsPalette} from '@theme/aristid/general/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import KitAvatar from '@kit/DataDisplay/Avatar/Avatar';

export const colorOptions = [
    {
        value: 'not-allowed',
        color: colorsPalette.secondary.red.red400,
        label: 'Not allowed'
    },
    {
        value: 'denied',
        color: colorsPalette.secondary.yellow.yellow400,
        label: 'Denied'
    },
    {
        value: 'todo',
        color: colorsPalette.primary.primary400,
        label: 'Todo by agency'
    },
    {
        value: 'ok',
        color: colorsPalette.secondary.green.green400,
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
        color: colorsPalette.secondary.red.red400,
        label: 'Not allowed',
        disabled: true
    },
    {
        value: 'denied',
        color: colorsPalette.secondary.yellow.yellow400,
        label: 'Denied',
        disabled: true
    },
    {
        value: 'todo',
        color: colorsPalette.primary.primary400,
        label: 'Todo by agency'
    },
    {
        value: 'ok',
        color: colorsPalette.secondary.green.green400,
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

export const idCardOptions = [
    {
        value: 'cha-yellow',
        label: 'Chartreuse Jaune',
        idCard: {
            title: 'Chartreuse Jaune',
            avatar: (
                <KitAvatar
                    size={'small'}
                    shape={'square'}
                    imageFit={'contain'}
                    src={'public/images/chartreuse-jaune.png'}
                    label={'Chartreuse Jaune'}
                />
            )
        }
    },
    {
        value: 'cha-vep',
        label: 'Chartreuse VEP',
        idCard: {
            title: 'Chartreuse VEP',
            avatar: (
                <KitAvatar
                    size={'small'}
                    shape={'square'}
                    imageFit={'contain'}
                    src={'public/images/chartreuse-vep.png'}
                    label={'Chartreuse VEP'}
                />
            )
        }
    },
    {
        value: 'cha-verte',
        label: 'Chartreuse Verte',
        idCard: {
            title: 'Chartreuse Verte',
            avatar: (
                <KitAvatar
                    size={'small'}
                    shape={'square'}
                    imageFit={'contain'}
                    src={'public/images/chartreuse-verte.png'}
                    label={'Chartreuse Verte'}
                />
            )
        }
    }
];
