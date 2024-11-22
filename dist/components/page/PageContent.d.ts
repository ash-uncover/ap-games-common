import React, { ReactNode } from 'react';
import './PageContent.css';
export interface PageContentProperties {
    children: ReactNode;
}
export declare const PageContent: ({ children }: PageContentProperties) => React.JSX.Element;
