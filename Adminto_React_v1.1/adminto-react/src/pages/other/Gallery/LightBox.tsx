import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// types
import { Image } from './types';

type LightBoxProps = {
    images: Image[];
    photoIndex: number;
    closeLightbox: () => void;
    moveNext: () => void;
    movePrev: () => void;
};

const LightBox = ({ images, photoIndex, closeLightbox, moveNext, movePrev }: LightBoxProps) => {
    const slides = images.map(image => ({
        src: image.src,
        title: image.caption,
    }));

    return (
        <Lightbox
            open={true}
            close={closeLightbox}
            index={photoIndex}
            slides={slides}
            navigation={{
                on: () => {
                    moveNext();
                    movePrev();
                }
            }}
        />
    );
};

export default LightBox;
