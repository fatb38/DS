import React from 'react';
import classNames from 'classnames';
import {Image} from 'antd';
import toArray from 'rc-util/lib/Children/toArray';
import styled from 'styled-components';

function isGood(className) {
    return /\bgood\b/i.test(className);
}

function isBad(className) {
    return /\bbad\b/i.test(className);
}

function isInline(className) {
    return /\binline\b/i.test(className);
}

function isGoodBadImg(imgMeta) {
    return imgMeta.isGood || imgMeta.isBad;
}

function isCompareImg(imgMeta) {
    return isGoodBadImg(imgMeta) || imgMeta.inline;
}

export const StyledImagePreview = styled.div`
    display: flex;
    width: 496px;
    margin: 0 0 70px 64px;
    clear: both;

    &.right {
        float: right;
    }

    &.left {
        float: left;
    }

    & + & {
        margin-top: -35px;
    }

    &.small {
        width: 248px;
    }

    &.inline {
        display: inline-flex;
    }

    &.preview-image-boxes-with-carousel {
        width: 420px;

        .preview-image-box img {
            padding: 0;
        }

        img {
            padding: 0;
            box-shadow:
                0 1px 0 0 #ddd,
                0 3px 0 0 #ffffff,
                0 4px 0 0 #ddd,
                0 6px 0 0 #ffffff,
                0 7px 0 0 #ddd;
        }
    }

    .preview-image-box {
        float: left;
        width: 100%;

        + .preview-image-box {
            margin-left: 24px;
        }

        img {
            box-sizing: border-box;
            max-width: 100%;
            padding: 12px;
            background: #ffffff;
            border-radius: 6px;
            cursor: pointer;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }

        img.no-padding {
            padding: 0;
            background: none;
        }

        img:hover {
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }
    }

    .ant-row-rtl .preview-image-box + .preview-image-box {
        margin-right: 24px;
        margin-left: 0;
    }

    .preview-image-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 16px;
        text-align: center;
        background: #f2f4f5;
        box-sizing: border-box;

        &.good::after {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 3px;
            background: #1677ff;
            content: '';
        }

        &.bad::after {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 3px;
            background: #ff4d4f;
            content: '';
        }
    }

    .preview-image-title {
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.88);
        font-size: 12px;
    }

    .preview-image-description {
        margin-top: 2px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 12px;
        line-height: 1.5;
    }

    .preview-image-description hr {
        margin: 2px 0;
        background: none;
        border: 0;
    }
`;

const ImagePreview = props => {
    const {children} = props;
    const imgs = toArray(children);

    const imgsMeta = imgs.map(img => {
        const {alt, description, src, className} = img.props;

        return {
            className,
            alt,
            description,
            src,
            isGood: isGood(className),
            isBad: isBad(className),
            inline: isInline(className)
        };
    });

    const imagesList = imgsMeta.map((meta, index) => {
        const metaCopy = {...meta};
        delete metaCopy.description;
        delete metaCopy.isGood;
        delete metaCopy.isBad;
        return (
            <div key={index}>
                <div className="image-modal-container">
                    <img {...metaCopy} src={meta.src} alt={meta.alt} />
                </div>
            </div>
        );
    });

    const comparable =
        (imgs.length === 2 && imgsMeta.every(isCompareImg)) || (imgs.length >= 2 && imgsMeta.every(isGoodBadImg));

    const style = comparable ? {width: `${(100 / imgs.length).toFixed(3)}%`} : {};

    const hasCarousel = imgs.length > 1 && !comparable;
    const previewClassName = classNames({
        'preview-image-boxes': true,
        small: props.small,
        clearfix: true,
        'preview-image-boxes-compare': comparable,
        'preview-image-boxes-with-carousel': hasCarousel,
        right: props.right,
        left: props.left,
        inline: props.inline
    });

    return (
        <StyledImagePreview className={previewClassName}>
            {imagesList.map((_, index) => {
                if (!comparable && index !== 0) {
                    return null;
                }
                const coverMeta = imgsMeta[index];
                const imageWrapperClassName = classNames('preview-image-wrapper', {
                    good: coverMeta.isGood,
                    bad: coverMeta.isBad
                });

                return (
                    <div className="preview-image-box" style={style} key={index}>
                        <div className={imageWrapperClassName}>
                            <Image className={coverMeta.className} src={coverMeta.src} alt={coverMeta.alt} />
                        </div>
                        <div className="preview-image-title">{coverMeta.alt}</div>
                        <div
                            className="preview-image-description"
                            dangerouslySetInnerHTML={{__html: coverMeta.description}}
                        />
                    </div>
                );
            })}
        </StyledImagePreview>
    );
};

export default ImagePreview;
