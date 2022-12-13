import { ReactElement } from 'react';
import './PageMenuSideItem.css';
export interface PageMenuSideItemProperties {
    collapsed: boolean;
    icon?: ReactElement;
    selected: boolean;
    text: string;
    onClick: () => void;
}
export declare const PageMenuSideItem: ({ collapsed, icon, selected, text, onClick, }: PageMenuSideItemProperties) => JSX.Element;
