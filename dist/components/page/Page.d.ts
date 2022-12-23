import { ReactNode } from 'react';
import './Page.css';
export interface PageProperties {
    menu: ReactNode;
    content: ReactNode;
}
export declare const Page: ({ menu, content }: PageProperties) => JSX.Element;
