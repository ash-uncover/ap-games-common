import React from 'react';
import { MenuItemProperties } from './MenuItem';
import './Menu.css';
export interface MenuProperties {
    collapsed?: boolean;
    title?: string;
    items: MenuItemProperties[];
    onMenuToggle?: () => void;
}
export declare const Menu: ({ collapsed, title, items, }: MenuProperties) => React.JSX.Element;
