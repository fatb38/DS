import React from 'react';
import {KitUpload} from '@kit/DataEntry';

const UploadArgTypes = {
    accept: {
        name: 'accept',
        description: 'File types that can be accepted.',
        control: {type: 'string'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Upload'
        }
    },
    action: {
        name: 'action',
        description: 'Uploading URL',
        table: {
            type: {
                summary: 'string | (file) => Promise<string>'
            },
            category: 'Upload'
        }
    },
    beforeUpload: {
        name: 'beforeUpload',
        description:
            'Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. When returned value is `KitUpload.LIST_IGNORE`, the list of files that have been uploaded will ignore it. Warning：this function is not supported in IE9',
        table: {
            type: {
                summary: '(file, fileList) => boolean | Promise<File> | `KitUpload.LIST_IGNORE`'
            },
            category: 'Upload'
        }
    },
    customRequest: {
        name: 'customRequest',
        description:
            'Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Upload'
        }
    },
    data: {
        name: 'data',
        description: 'Uploading extra params or function which can return uploading extra params',
        table: {
            type: {
                summary: 'object | (file) => object | Promise<object>'
            },
            category: 'Upload'
        }
    },
    defaultFileList: {
        name: 'defaultFileList',
        description: 'Default list of files that have been uploaded',
        control: {type: 'object[]'},
        table: {
            type: {
                summary: 'object[]'
            },
            category: 'Upload'
        }
    },
    directory: {
        name: 'directory',
        description: 'Support upload whole directory',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Upload'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        description: 'Disable upload button',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Upload'
        },
        defaultValue: false
    },
    fileList: {
        name: 'fileList',
        description: 'List of files that have been uploaded (controlled).',
        control: {type: 'UploadFile[]'},
        table: {
            type: {
                summary: 'UploadFile[]'
            },
            category: 'Upload'
        }
    },
    headers: {
        name: 'headers',
        description: 'Set request headers, valid above IE10',
        control: {type: 'object'},
        table: {
            type: {
                summary: 'object'
            },
            category: 'Upload'
        }
    },
    iconRender: {
        name: 'iconRender',
        description: 'Custom show icon',
        table: {
            type: {
                summary: '(file: UploadFile, listType?: UploadListType) => ReactNode'
            },
            category: 'Upload'
        }
    },
    isImageUrl: {
        name: 'isImageUrl',
        description: 'Customize if render <img /> in thumbnail',
        table: {
            type: {
                summary: '(file: UploadFile) => boolean'
            },
            category: 'Upload'
        }
    },
    listType: {
        name: 'listType',
        description: 'Built-in stylesheets, support for four types: `text`, `picture` or `picture-card`',
        options: ['text', 'picture', 'picture-card'],
        control: {
            type: 'select',
            defaultValue: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Upload',
            defaultValue: {summary: 'text'}
        },
        defaultValue: 'text'
    },
    maxCount: {
        name: 'maxCount',
        description: 'Limit the number of uploaded files. Will replace current one when `maxCount` is `1`',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Upload'
        }
    },
    method: {
        name: 'method',
        description: 'The http method of upload request',
        control: {type: 'string'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'post'},
            category: 'Upload'
        },
        defaultValue: 'post'
    },
    multiple: {
        name: 'multiple',
        description:
            'Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Upload'
        },
        defaultValue: false
    },
    name: {
        name: 'name',
        description: 'The name of uploading file',
        control: {type: 'string'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'file'},
            category: 'Upload'
        },
        defaultValue: 'file'
    },
    previewFile: {
        name: 'previewFile',
        description: 'Customize preview file logic',
        table: {
            type: {
                summary: '(file: File | Blob) => Promise<dataURL: string>'
            },
            category: 'Upload'
        }
    },
    progress: {
        name: 'progress',
        description: 'Custom progress bar',
        table: {
            type: {
                summary: 'ProgressProps (support type="line" only)'
            },
            category: 'Upload'
        }
    },
    showUploadList: {
        name: 'showUploadList',
        description:
            'Whether to show default upload list, could be an object to specify `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` and `downloadIcon` individually',
        table: {
            type: {
                summary:
                    'boolean | { showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean, previewIcon?: ReactNode | (file: UploadFile) => ReactNode, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, downloadIcon?: ReactNode | (file: UploadFile) => ReactNode }'
            },
            defaultValue: {
                summary: true
            },
            category: 'Upload'
        },
        defaultValue: true
    },
    withCredentials: {
        name: 'withCredentials',
        description: 'The ajax upload with cookie sent',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Upload'
        },
        defaultValue: false
    },
    onChange: {
        name: 'onChange',
        description: 'A callback function, can be executed when uploading state is changing',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Upload'
        }
    },
    onDrop: {
        name: 'onDrop',
        description: 'A callback function executed when files are dragged and dropped into the upload area',
        table: {
            type: {
                summary: '(event: React.DragEvent) => void'
            },
            category: 'Upload'
        }
    },
    onDownload: {
        name: 'onDownload',
        description:
            'Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB',
        table: {
            type: {
                summary: 'function(file): void'
            },
            category: 'Upload'
        }
    },
    onPreview: {
        name: 'onPreview',
        description: 'A callback function, will be executed when the file link or preview icon is clicked',
        table: {
            type: {
                summary: 'function(file)'
            },
            category: 'Upload'
        }
    },
    onRemove: {
        name: 'onRemove',
        description:
            'A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject',
        table: {
            type: {
                summary: 'function(file): boolean | Promise'
            },
            category: 'Upload'
        }
    }
};

export const argTypes = {
    ...UploadArgTypes
};

export const Template = ({listType, ...args}) => {
    return <KitUpload listType={listType} {...args}></KitUpload>;
};
