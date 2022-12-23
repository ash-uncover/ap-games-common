import { ReactNode } from 'react';
import './GridTiles.css';
export interface GridTilesProperties {
    className?: string;
    height: number;
    width: number;
    children: ReactNode[];
}
export declare const GridTiles: ({ className, height, width, children, }: GridTilesProperties) => JSX.Element;
