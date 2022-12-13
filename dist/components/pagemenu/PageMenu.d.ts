import { ReactElement } from 'react';
import './PageMenu.css';
export interface PageMenuProperties {
    page: PageMenuPageProperties;
}
export interface PageMenuPageProperties {
    id: string;
    icon?: ReactElement;
    title: string;
    content: ReactElement | null;
    pages?: PageMenuPageProperties[];
}
export declare const PageMenu: ({ page, }: PageMenuProperties) => JSX.Element;
