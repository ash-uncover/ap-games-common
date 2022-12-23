import { ReactNode } from 'react';
import './SquareGrid.css';
export interface SquareGridProperties {
    children: ReactNode[];
}
export declare const SquareGrid: ({ children }: SquareGridProperties) => JSX.Element;
