import { ReactNode } from 'react';
import './GridContainer.css';
export interface GridContainerProperties {
    className?: string;
    width: number;
    height: number;
    children: ReactNode;
}
export declare const GridContainer: ({ className, width, height, children, }: GridContainerProperties) => JSX.Element;
