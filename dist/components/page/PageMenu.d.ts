import React, { ReactNode } from 'react';
import './PageMenu.css';
export interface PageMenuProperties {
    children: ReactNode;
}
export declare const PageMenu: ({ children }: PageMenuProperties) => React.JSX.Element;
