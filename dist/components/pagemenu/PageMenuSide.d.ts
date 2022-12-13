import { ReactElement } from 'react';
import './PageMenuSide.css';
export interface PageMenuSideProperties {
    collapsed: boolean;
    title?: string;
    items: PageMenuSideItemsInfo[];
    onItemClick: (id: string) => void;
}
export interface PageMenuSideItemsInfo {
    id: string;
    icon?: ReactElement;
    selected: boolean;
    text: string;
}
export declare const PageMenuSide: ({ collapsed, title, items, onItemClick, }: PageMenuSideProperties) => JSX.Element;
