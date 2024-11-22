import React from 'react';
import './ImageSlider.css';
export interface ImageSliderProperties {
    image: string;
    onChangePrevious: () => void;
    onChangeNext: () => void;
}
export declare const ImageSlider: ({ image, onChangePrevious, onChangeNext, }: ImageSliderProperties) => React.JSX.Element;
