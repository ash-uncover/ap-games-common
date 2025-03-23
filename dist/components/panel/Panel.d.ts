import React, { PropsWithChildren } from 'react';
import './Panel.css';
export interface PanelProperties extends PropsWithChildren {
    className?: string;
    title?: string;
}
export declare const Panel: ({ className, title, children, }: PanelProperties) => React.JSX.Element;
