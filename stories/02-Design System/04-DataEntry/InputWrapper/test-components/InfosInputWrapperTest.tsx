import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const onInfoClick = () => {};

export const InfosInputWrapperTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Infos icon component</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper bordered label="label" helper="helper" onInfoClick={onInfoClick}>
                <KitTypography.Text>Component to wrap with info icon</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered disabled label="label" helper="helper" onInfoClick={onInfoClick}>
                <KitTypography.Text>Disabled Component to wrap with info icon</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered helper="helper" onInfoClick={onInfoClick}>
                <KitTypography.Text>Component to wrap with info icon</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper
                bordered
                disabled
                label="label"
                helper="helper"
                onInfoClick={onInfoClick}
                infoIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            >
                <KitTypography.Text>Disabled Component to wrap with custom info icon</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
