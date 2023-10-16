import React, {useEffect, useMemo, useState} from 'react';
import {Card, Empty} from 'antd';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaRegularIcons from '@fortawesome/free-regular-svg-icons';
import {KitInput, KitRadio} from '@kit/DataEntry/';
import type {RadioChangeEvent} from '@kit/DataEntry/Radio';
import {KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTooltip} from '@kit/DataDisplay';
import {IEditorTemplate} from '../../../types';

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
        case 'Coffee':
            return <FontAwesomeIcon icon={FaSolidIcons.faCoffee} />;
        case 'Car':
            return <FontAwesomeIcon icon={FaSolidIcons.faCar} />;
        case 'File':
        default:
            return <FontAwesomeIcon icon={FaSolidIcons.faFile} />;
    }
};

const options = [
    {label: 'Solid', value: 'solid'},
    {label: 'Regular', value: 'regular'}
];

export const Template = args => {
    const Icon = getIcon(args);
    return (
        <>
            <KitIcon {...args} icon={Icon} />
            <span style={{marginLeft: '10px'}}>{args.icon}</span>
        </>
    );
};

const _convertToFontAwesomeIconName = (inputString: string): string => {
    const camelCase = inputString.replace(/-([a-z])/g, (_, group) => group.toUpperCase());
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const _filterIcons = (key: string) => key !== 'fas' && key !== 'prefix';

const _getRegularIcons = () => {
    const filteredFaRegularIconsKeys = Object.keys(FaRegularIcons).filter(_filterIcons);
    const lastKeys = filteredFaRegularIconsKeys.pop();
    let filteredLastKeys: string[] = [];
    if (lastKeys !== undefined) {
        filteredLastKeys = Object.keys(FaRegularIcons[lastKeys]).filter(_filterIcons);
    }
    const fullFaRegularIconsKeys = filteredFaRegularIconsKeys.concat(filteredLastKeys);
    return fullFaRegularIconsKeys.map(icon => FaRegularIcons[icon]);
};

const _getSolidIcons = () =>
    Object.keys(FaSolidIcons)
        .filter(_filterIcons)
        .map(icon => FaSolidIcons[icon]);

const DEFAULT_TOOLTIP_TITLE = 'Click to copy import';

const Gallery = () => {
    const SolidIcons = useMemo(_getSolidIcons, [FaSolidIcons]);
    const RegularIcons = useMemo(_getRegularIcons, [FaRegularIcons]);

    const [type, setType] = useState('solid');
    const [tooltipTitle, setTooltipTitle] = useState(DEFAULT_TOOLTIP_TITLE);
    const [searchIconName, setSearchIconName] = useState('');
    const [icons, setIcons] = useState<any[]>([]);

    useEffect(() => {
        const trimmedSearchName = searchIconName.trim();
        const isEmptySearch = trimmedSearchName === '';
        if (type === 'solid') {
            if (isEmptySearch) {
                setIcons(SolidIcons);
            } else {
                setIcons(SolidIcons.filter(icon => icon.iconName.includes(trimmedSearchName)));
            }
        } else {
            if (isEmptySearch) {
                setIcons(RegularIcons);
            } else {
                setIcons(RegularIcons.filter(icon => icon.iconName.includes(trimmedSearchName)));
            }
        }
    }, [searchIconName, type, SolidIcons, RegularIcons]);

    useEffect(() => {
        if (tooltipTitle !== DEFAULT_TOOLTIP_TITLE) {
            setTimeout(() => {
                setTooltipTitle(DEFAULT_TOOLTIP_TITLE);
            }, 1500);
        }
    }, [tooltipTitle]);

    const _handleChangeIconType = ({target: {value}}: RadioChangeEvent) => {
        setType(value);
    };

    const _handleCopyIcon = icon => {
        setTooltipTitle('Copied successfully ✅');
        const iconImportName = _convertToFontAwesomeIconName(icon.iconName);
        navigator.clipboard.writeText(`<FontAwesomeIcon icon={fa${iconImportName}}} />`);
    };

    const _handleSearchIconName = event => {
        const {value} = event?.target;
        setSearchIconName(value);
    };

    return (
        <div className="gallery">
            <KitSpace size="xs">
                <KitRadio.Group
                    options={options}
                    onChange={_handleChangeIconType}
                    value={type}
                    size="small"
                    optionType="button"
                />
                <KitInput onChange={_handleSearchIconName} value={searchIconName} placeholder="Search icon name" />
            </KitSpace>
            <br />
            <br />
            <KitSpace wrap size="s" style={{width: '100%'}}>
                {icons.map((icon, index) => (
                    <KitTooltip title={tooltipTitle} key={`${icon.prefix}-${icon.iconName}-${index}`}>
                        <Card className="card" hoverable bordered={false} onClick={() => _handleCopyIcon(icon)}>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                            <div className="icon-name">{icon.iconName}</div>
                        </Card>
                    </KitTooltip>
                ))}
            </KitSpace>
            {icons.length === 0 && <Empty style={{margin: '50px auto'}} />}
        </div>
    );
};

export default Gallery;

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitIcon icon={<DownloadOutlined />} />
            <KitIcon icon={<DownloadOutlined />} on />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Icon';
EditorTemplate.title = 'Icon';
