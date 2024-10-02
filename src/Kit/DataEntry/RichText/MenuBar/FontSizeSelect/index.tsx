import {KitTypography} from '@kit/General';
import {KitDropDown} from '@kit/Navigation';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {FunctionComponent, useState} from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import {FontSizeHeadingKey, FontSizeNormalKey, IKitFontSizeSelect} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {TitleLevelKeys} from '@kit/General/Typography/types';
import {useKitLocale} from '@translation/useKitLocale';

export const KitFontSizeSelect: FunctionComponent<IKitFontSizeSelect> = ({editor}) => {
    const {locale} = useKitLocale();

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const headingSizeKeys: Record<string, FontSizeHeadingKey> = {
        h1: {
            key: 'h1',
            editorLevel: 1,
            label: locale.RichText?.heading1
        },
        h2: {
            key: 'h2',
            editorLevel: 2,
            label: locale.RichText?.heading2
        },
        h3: {
            key: 'h3',
            editorLevel: 3,
            label: locale.RichText?.heading3
        },
        h4: {
            key: 'h4',
            editorLevel: 4,
            label: locale.RichText?.heading4
        }
    };

    const otherFontSizeKeys: Record<string, FontSizeNormalKey> = {
        normal: {
            key: 'normal',
            label: locale.RichText?.normal
        }
    };

    const _onFontSizeSelect: IKitDropdownMenu['onSelect'] = fontSize => {
        if (headingSizeKeys[fontSize.key]) {
            editor.chain().focus().toggleHeading({level: headingSizeKeys[fontSize.key].editorLevel}).run();
            return;
        }

        editor.chain().focus().setParagraph().run();
    };

    const _getActiveFontSizeKey = () => {
        if (editor.isActive('heading', {level: 1})) {
            return headingSizeKeys.h1;
        }

        if (editor.isActive('heading', {level: 2})) {
            return headingSizeKeys.h2;
        }

        if (editor.isActive('heading', {level: 3})) {
            return headingSizeKeys.h3;
        }

        if (editor.isActive('heading', {level: 4})) {
            return headingSizeKeys.h4;
        }

        return otherFontSizeKeys.normal;
    };

    const fontSizeItems: IKitDropdownMenu['items'] = Object.values(headingSizeKeys)
        .map(({key, label}) => ({
            key: key,
            label: <KitTypography.Title level={key as TitleLevelKeys}>{label}</KitTypography.Title>
        }))
        .concat({
            key: otherFontSizeKeys.normal.key,
            label: <KitTypography.Text>{otherFontSizeKeys.normal.label}</KitTypography.Text>
        });

    const selectFontSizeClassNames = cn(styles['kit-rich-text-select-font-size'], {
        [`${_getActiveFontSizeKey().key}-selected-font-size`]: _getActiveFontSizeKey,
        'dropdown-visible': isDropdownVisible
    });

    const dropdownOverlayClassNames = cn(styles['kit-rich-text-select-font-size-dropdown'], 'select-font-size');

    return (
        <>
            <KitDropDown
                overlayClassName={dropdownOverlayClassNames}
                menu={{
                    items: fontSizeItems,
                    selectable: true,
                    selectedKeys: [_getActiveFontSizeKey().key],
                    onSelect: _onFontSizeSelect
                }}
                onOpenChange={setIsDropdownVisible}
            >
                <div className={selectFontSizeClassNames}>
                    <div className="selected-font-size-label">{_getActiveFontSizeKey().label}</div>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </KitDropDown>
        </>
    );
};
