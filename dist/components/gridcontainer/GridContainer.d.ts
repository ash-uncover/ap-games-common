import { ReactNode } from 'react';
import './GridContainer.css';
export interface GridContainerProperties {
    width: number;
    height: number;
    children: ReactNode;
}
export declare const GridContainer: ({ width, height, children, }: GridContainerProperties) => JSX.Element;
