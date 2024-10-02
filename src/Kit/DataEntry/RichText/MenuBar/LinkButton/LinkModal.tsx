import {faCheck, faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInput} from '@kit/DataEntry/Input';
import {KitModal} from '@kit/Feedback';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import styles from './styles.module.scss';
import cn from 'classnames';
import {FunctionComponent, useEffect, useState} from 'react';
import {IKitLinkFormValues, IKitLinkModal} from './types';
import {getLinkMarkAtCursor} from './getLinkMarkAtCursor';
import {useKitLocale} from '@translation/useKitLocale';
import {Form} from 'antd';
import {useForm, useWatch} from 'antd/es/form/Form';

const modalWidth = '733px';

export const KitLinkModal: FunctionComponent<IKitLinkModal> = ({editor, isOpen, onClose}) => {
    const {locale} = useKitLocale();
    const [canSubmit, setSubmit] = useState(false);
    const [form] = useForm<IKitLinkFormValues>();
    const values = useWatch([], form);

    const currentLinkMark = getLinkMarkAtCursor(editor);
    const currentLinkMarkTextToDisplay = currentLinkMark?.textToDisplay ?? '';
    const currentLinkMarkLinkUrl = currentLinkMark?.linkUrl ?? '';

    const linkModalClassNames = cn(styles['kit-rich-text-link-modal'], 'link-modal');

    useEffect(() => {
        form.validateFields({validateOnly: true})
            .then(() => setSubmit(true))
            .catch(() => setSubmit(false));
    }, [form, values]);

    const _insertOrReplaceLink = () => {
        const textToDisplay = form.getFieldValue('text-to-display') as string;
        const linkUrl = form.getFieldValue('link-url') as string;

        if (currentLinkMark) {
            editor
                .chain()
                .focus()
                .insertContentAt({from: currentLinkMark.from, to: currentLinkMark.to}, '')
                .setLink({href: linkUrl})
                .insertContent(textToDisplay)
                .run();
        } else {
            editor.chain().focus().setLink({href: linkUrl}).insertContent(textToDisplay).run();
        }

        onClose();
    };

    return (
        <KitModal
            className={linkModalClassNames}
            title={locale.RichText?.insertLink}
            isOpen={isOpen}
            width={modalWidth}
            closable
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{'text-to-display': currentLinkMarkTextToDisplay, 'link-url': currentLinkMarkLinkUrl}}
                onFinish={_insertOrReplaceLink}
            >
                <Form.Item
                    name="text-to-display"
                    rules={[
                        {
                            required: true,
                            message: locale.RichText?.textToDisplayCannotBeEmpty
                        }
                    ]}
                >
                    <KitInput
                        title=""
                        htmlFor="text-to-display"
                        label={locale.RichText?.textToDisplay}
                        placeholder={locale.RichText?.textToDisplay}
                        required
                    />
                </Form.Item>
                <Form.Item
                    name="link-url"
                    rules={[
                        {
                            required: true,
                            message: locale.RichText?.urlCannotBeEmpty
                        },
                        {
                            type: 'url',
                            message: locale.RichText?.invalidUrl
                        }
                    ]}
                >
                    <KitInput
                        title=""
                        htmlFor="link-url"
                        label={locale.RichText?.url}
                        placeholder={locale.RichText?.linkToDocumentOrWebPage}
                        required
                    />
                </Form.Item>
                <KitSpace className="link-modal-footer" size="xs">
                    <KitButton onClick={onClose} icon={<FontAwesomeIcon icon={faClose} />}>
                        {locale.General?.cancel}
                    </KitButton>
                    <Form.Item>
                        <KitButton
                            type="primary"
                            htmlType="submit"
                            icon={<FontAwesomeIcon icon={faCheck} />}
                            disabled={!canSubmit}
                        >
                            {locale.General?.confirm}
                        </KitButton>
                    </Form.Item>
                </KitSpace>
            </Form>
        </KitModal>
    );
};
