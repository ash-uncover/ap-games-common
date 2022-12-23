import { ReactNode } from 'react';
import './PageContent.css';
export interface PageContentProperties {
    children: ReactNode;
}
export declare const PageContent: ({ children }: PageContentProperties) => JSX.Element;
