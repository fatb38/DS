import {FunctionComponent} from 'react';
import {useKitTheme} from '@theme/useKitTheme.ts';
import {KitIcon, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

export const IconsTest: FunctionComponent = () => {
    const {theme} = useKitTheme();
    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <>
            <div>
                <KitTypography.Text weight="bold">Icons basic colors</KitTypography.Text>
            </div>
            <div style={{display: 'inline-flex', gap: '8px', margin: '8px 0 16px'}}>
                <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} />
                <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on />
            </div>
            <div>
                <KitTypography.Text weight="bold">Icons secondary colors</KitTypography.Text>
            </div>
            <div style={{display: 'flex', gap: '8px', margin: '8px 0 16px'}}>
                {secondaryColors.map((color: string) => (
                    <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}} key={color}>
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </div>
                ))}
            </div>
            <div>
                <KitTypography.Text weight="bold">Icons tertiary colors</KitTypography.Text>
            </div>
            <div style={{display: 'flex', gap: '8px', margin: '8px 0 16px'}}>
                {tertiaryColors.map((color: string) => (
                    <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}} key={color}>
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </div>
                ))}
            </div>
        </>
    );
};
