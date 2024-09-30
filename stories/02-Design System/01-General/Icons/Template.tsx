import {ChangeEvent, useEffect, useMemo, useState} from 'react';
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
import {KitPagination} from '@kit/Navigation';
import {IKitIcon} from '@kit/General/Icon/types';
import type {IconDefinition} from '@fortawesome/fontawesome-common-types';

const getIcon = ({icon}) => {
    switch (icon) {
        case 'faUser':
            return <FontAwesomeIcon icon={FaSolidIcons.faUser} />;
        case 'faCar':
            return <FontAwesomeIcon icon={FaSolidIcons.faCar} />;
        case 'faFile':
        default:
            return <FontAwesomeIcon icon={FaSolidIcons.faFile} />;
    }
};

const options = [
    {label: 'Solid', value: 'solid'},
    {label: 'Regular', value: 'regular'}
];

export const Template = (args: IKitIcon) => {
    const Icon = getIcon(args);
    return <KitIcon {...args} icon={Icon} />;
};

const convertToFontAwesomeIconName = (inputString: string): string => {
    const camelCase = inputString.replace(/-([a-z])/g, (_, group: string) => group.toUpperCase());
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const filterIcons = (key: string) => key !== 'fas' && key !== 'prefix';
const sortIconByAlphabetically = (a: IconDefinition, b: IconDefinition) => a.iconName.localeCompare(b.iconName);

const removeDuplicateIcons = (icons: IconDefinition[]) =>
    icons.reduce<IconDefinition[]>((accumulator, current) => {
        if (!accumulator.some(icon => icon.iconName === current.iconName)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

const getRegularIcons = () => {
    const filteredFaRegularIconsKeys = Object.keys(FaRegularIcons).filter(filterIcons);
    const lastKeys: string | undefined = filteredFaRegularIconsKeys.pop();
    let filteredLastKeys: string[] = [];
    if (lastKeys !== undefined) {
        filteredLastKeys = Object.keys(FaRegularIcons[lastKeys] as string[]).filter(filterIcons);
    }
    const fullFaRegularIconsKeys = filteredFaRegularIconsKeys.concat(filteredLastKeys);
    const fullFaRegularIcons = fullFaRegularIconsKeys.map(icon => FaRegularIcons[icon] as IconDefinition);
    const faRegularIcons = removeDuplicateIcons(fullFaRegularIcons);

    return faRegularIcons.sort(sortIconByAlphabetically);
};

const getSolidIcons = (): IconDefinition[] => {
    const filteredFaSolidIconsKeys = Object.keys(FaSolidIcons).filter(filterIcons);
    const filteredFaSolidIcons = filteredFaSolidIconsKeys.map(icon => FaSolidIcons[icon] as IconDefinition);
    return removeDuplicateIcons(filteredFaSolidIcons).sort(sortIconByAlphabetically);
};

const DEFAULT_TOOLTIP_TITLE = 'Click to copy import';

const Gallery = () => {
    const SolidIcons = useMemo(getSolidIcons, [FaSolidIcons]);
    const RegularIcons = useMemo(getRegularIcons, [FaRegularIcons]);

    const [type, setType] = useState('solid');
    const [tooltipTitle, setTooltipTitle] = useState(DEFAULT_TOOLTIP_TITLE);
    const [searchIconName, setSearchIconName] = useState('');
    const [icons, setIcons] = useState<IconDefinition[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        setCurrentPage(1);
    }, [type, searchIconName]);

    const _handleChangeIconType = ({target: {value}}: RadioChangeEvent) => {
        setType(value as string);
    };

    const _handleCopyIcon = (icon: IconDefinition) => {
        setTooltipTitle('Copied successfully ✅');
        const iconImportName = convertToFontAwesomeIconName(icon.iconName);
        void navigator.clipboard.writeText(`<FontAwesomeIcon icon={fa${iconImportName}} />`);
    };

    const _handleSearchIconName = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchIconName(value);
    };

    const _handleCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage);
    };

    const iconsToDisplay: IconDefinition[] = useMemo(() => {
        const startIndex = (currentPage - 1) * 50;
        const endIndex = startIndex + 50;
        return icons.slice(startIndex, endIndex);
    }, [icons, currentPage]);

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
            <KitSpace
                wrap
                size="s"
                style={{
                    width: '100%',
                    maxHeight: '580px',
                    overflowY: 'auto',
                    alignItems: 'flex-start',
                    padding: '10px 0'
                }}
            >
                {iconsToDisplay?.map((icon, index) => (
                    <KitTooltip title={tooltipTitle} key={`${icon.prefix}-${icon.iconName}-${index}`}>
                        <Card className="card" bordered={false} onClick={() => _handleCopyIcon(icon)}>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                            <div className="icon-name">{icon.iconName}</div>
                        </Card>
                    </KitTooltip>
                ))}
            </KitSpace>
            {icons.length === 0 && <Empty style={{margin: '50px auto'}} />}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <KitPagination
                    defaultCurrent={1}
                    current={currentPage}
                    pageSize={50}
                    total={icons.length}
                    showSizeChanger={false}
                    onChange={_handleCurrentPage}
                    hideOnSinglePage
                />
            </div>
        </div>
    );
};

export default Gallery;

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace>
        <KitIcon icon={<FontAwesomeIcon icon={FaSolidIcons.faDownload} />} />
        <KitIcon icon={<FontAwesomeIcon icon={FaSolidIcons.faDownload} />} on />
    </KitSpace>
);
EditorTemplate.path = 'components.Icon';
EditorTemplate.title = 'Icon';
