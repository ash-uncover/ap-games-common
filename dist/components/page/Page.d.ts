import React, { ReactNode } from 'react';
import './Page.css';
export type PageProperties = {
    children: ReactNode;
};
export declare const Page: ({ children }: PageProperties) => React.JSX.Element;
