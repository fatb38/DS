import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {KitDropDown} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {disabledAndDividerDropdownItems, groupDropdownItems} from '../commons.tsx';

export const GroupAndDisabledDropdownTest: FunctionComponent = () => {
    const customRender = (menu: React.ReactNode) => {
        return (
            <>
                {menu}
                <KitButton type="primary" block style={{marginTop: '15px'}}>
                    CTA Action
                </KitButton>
            </>
        );
    };

    return (
        <div>
            <KitTypography.Title level="h3" style={{marginBottom: '16px'}}>
                Group and disabled dropdown
            </KitTypography.Title>
            <div style={{display: 'flex', gap: '100px'}}>
                <KitDropDown
                    open
                    menu={{
                        items: disabledAndDividerDropdownItems
                    }}
                >
                    <KitTypography.Link>
                        Divider and disabled <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitTypography.Link>
                </KitDropDown>
                <KitDropDown
                    open
                    menu={{
                        items: groupDropdownItems
                    }}
                >
                    <KitTypography.Link>
                        Groups <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitTypography.Link>
                </KitDropDown>
                <KitDropDown open menu={{items: disabledAndDividerDropdownItems}} dropdownRender={customRender}>
                    <a onClick={e => e.preventDefault()}>
                        <KitTypography.Link>
                            Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                        </KitTypography.Link>
                    </a>
                </KitDropDown>
            </div>
        </div>
    );
};
