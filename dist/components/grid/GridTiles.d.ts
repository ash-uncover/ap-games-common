import { CSSProperties, ReactNode } from 'react';
import './GridTiles.css';
export interface GridTilesProperties {
    className?: string;
    style?: CSSProperties;
    height: number;
    width: number;
    children: ReactNode[];
}
export declare const GridTiles: ({ className, style, height, width, children, }: GridTilesProperties) => JSX.Element;
