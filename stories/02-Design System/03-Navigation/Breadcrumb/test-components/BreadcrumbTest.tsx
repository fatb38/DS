import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {KitBreadcrumb} from '@kit/Navigation';
import {KitTypography} from '@kit/General';

export const BreadcrumbTest: FC = () => {
    const textAndIconBreadcrumbItems = [
        {
            title: <FontAwesomeIcon icon={faHouse} />,
            href: ''
        },
        {
            title: 'Application Center',
            href: ''
        },
        {
            title: 'Application List',
            href: ''
        },
        {
            title: 'An Application'
        }
    ];

    const dropdownMenuItems = [
        {
            key: '1',
            label: (
                <KitTypography.Link target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                    General
                </KitTypography.Link>
            )
        },
        {
            key: '2',
            label: (
                <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                    Layout
                </KitTypography.Link>
            )
        },
        {
            key: '3',
            label: (
                <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                    Navigation
                </KitTypography.Link>
            )
        }
    ];

    const dropdownBreadcrumbItems = [
        {
            title: 'Aristid Design'
        },
        {
            title: <a href="">Component</a>
        },
        {
            title: <a href="">General</a>,
            menu: {items: dropdownMenuItems, open: true},
        },
        {
            title: 'Button'
        }
    ];

    return (
        <>
            <KitTypography.Title level="h3">Breadcrumb</KitTypography.Title>
            <div style={{marginBlock: '24px'}}>
                <KitBreadcrumb separator=">" items={textAndIconBreadcrumbItems} />
            </div>
            <KitBreadcrumb separator=">" items={dropdownBreadcrumbItems} />
        </>
    );
};
