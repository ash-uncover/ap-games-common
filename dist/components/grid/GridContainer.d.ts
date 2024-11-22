import React, { CSSProperties, ReactNode } from 'react';
import './GridContainer.css';
export interface GridContainerProperties {
    className?: string;
    style?: CSSProperties;
    width: number;
    height: number;
    children?: ReactNode;
    onSizeInvert?: (invert: boolean) => void;
}
export declare const GridContainer: ({ className, style, width, height, children, onSizeInvert, }: GridContainerProperties) => React.JSX.Element;
