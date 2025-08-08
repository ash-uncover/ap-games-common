import React from 'react';
import './Hexagon.css';
export interface HexagonProperties extends React.PropsWithChildren {
    className?: string;
}
export declare const Hexagon: ({ className, children, }: HexagonProperties) => React.JSX.Element;
