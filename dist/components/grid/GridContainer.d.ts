import { CSSProperties, ReactNode } from 'react';
import './GridContainer.css';
export interface GridContainerProperties {
    className?: string;
    style?: CSSProperties;
    width: number;
    height: number;
    children: ReactNode;
}
export declare const GridContainer: ({ className, style, width, height, children, }: GridContainerProperties) => JSX.Element;
