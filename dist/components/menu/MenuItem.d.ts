import { ReactElement } from 'react';
import './MenuItem.css';
export interface MenuItemProperties {
    className?: string;
    collapsed?: boolean;
    icon?: ReactElement;
    selected?: boolean;
    text: string;
    onClick: () => void;
}
export declare const MenuItem: ({ className, collapsed, icon, selected, text, onClick, }: MenuItemProperties) => JSX.Element;
