import React, { ReactNode } from 'react';
import './Panel.css';
export interface PanelProperties {
    className?: string;
    title?: string;
    children?: ReactNode;
}
export declare const Panel: ({ className, title, children, }: PanelProperties) => React.JSX.Element;
