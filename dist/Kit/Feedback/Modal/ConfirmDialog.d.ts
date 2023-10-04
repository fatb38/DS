import React from 'react';
import { IKitConfirmDialog } from './types';
declare const ConfirmDialog: ({ icon, title, firstLine, secondLine, image, type, isOpen, width, portalClassName, okCancel, onCancel, cancelText, onOk, okText, close, ...props }: IKitConfirmDialog) => React.JSX.Element;
export default ConfirmDialog;
