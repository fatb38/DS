import React from 'react';
import classNames from 'classnames';
import {Image} from 'antd';
import toArray from 'rc-util/lib/Children/toArray';

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
        'preview-image-boxes-with-carousel': hasCarousel
    });

    return (
        <div className={previewClassName}>
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
        </div>
    );
};

export default ImagePreview;
