import React, {useState} from 'react';
import {Card} from 'antd';
import * as Icons from '@ant-design/icons';
import * as AristidIcons from '@icons/index';
import {KitInput, KitRadio} from '@kit/DataEntry/';
import type {RadioChangeEvent} from '@kit/DataEntry/Radio';
import {KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';

export const argTypes = {
    on: {
        name: 'on',
        description: "Wether to set icon in 'on' state",
        control: {
            type: 'boolean',
            defaultValue: false
        },
        table: {
            type: {
                summary: 'boolean'
            }
        },
        defaultValue: '-'
    },
    hoverable: {
        name: 'hoverable',
        description: "Wether to set icon in 'on' state when hover",
        control: {
            type: 'boolean',
            defaultValue: false
        },
        table: {
            type: {
                summary: 'boolean'
            }
        },
        defaultValue: '-'
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle click event	',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            }
        },
        defaultValue: '-'
    },
    icon: {
        name: 'icon',
        description: 'Icon element of type ReactNode',
        options: ['SearchOutlined', 'DownloadOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'}
        },
        defaultValue: '-'
    }
};

export const getIcon = ({icon}) => {
    switch (icon) {
        case 'SearchOutlined':
            return Icons.SearchOutlined;
        case 'DownloadOutlined':
            return Icons.DownloadOutlined;
        case 'CheckCircleOutlined':
        default:
            return Icons.CheckCircleOutlined;
    }
};

const options = [
    {label: 'Outlined', value: 'outlined'},
    {label: 'Filled', value: 'filled'},
    {label: 'TwoTone', value: 'twotone'},
    {label: 'Aristid', value: 'aristid'}
];

const sorted = {
    outlined: Object.keys(Icons).filter(icon => icon.endsWith('Outlined')),
    filled: Object.keys(Icons).filter(icon => icon.endsWith('Filled')),
    twotone: Object.keys(Icons).filter(icon => icon.endsWith('TwoTone')),
    aristid: Object.keys(AristidIcons)
};

export const Template = args => {
    const Icon = getIcon(args);
    return (
        <>
            <KitIcon {...args} icon={<Icon />} />
            <span style={{marginLeft: '10px'}}>{args.icon}</span>
        </>
    );
};

const Gallery = () => {
    const [type, setType] = useState('outlined');
    const [color, setColor] = useState('');

    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setType(value);
    };

    const onChange2 = ({target: {value}}) => {
        if (value === '') {
            setColor('');
        } else {
            setColor(value);
        }
    };

    return (
        <div className="gallery">
            <KitSpace size="xs">
                <KitRadio.Group options={options} onChange={onChange} value={type} size="small" optionType="button" />
                <KitInput
                    prefix="TwoTone color"
                    placeholder="#eb2f96"
                    onChange={onChange2}
                    defaultValue={color}
                    allowClear
                />
            </KitSpace>
            <br />
            <br />
            <KitSpace wrap size="s">
                {sorted[type].map(IconName => {
                    const Component = type === 'aristid' ? AristidIcons[IconName] : Icons[IconName];
                    return (
                        <Card className="card" key={IconName} hoverable bordered={false}>
                            <div className="icon-item">
                                <Component twoToneColor={color} />
                            </div>
                            <div className="icon-name">{IconName}</div>
                        </Card>
                    );
                })}
            </KitSpace>
        </div>
    );
};

export default Gallery;
