import React, { ReactElement } from 'react';
import './MenuItem.css';
export interface MenuItemProperties {
    className?: string;
    collapsed?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    selected?: boolean;
    text: string;
    onClick: () => void;
}
export declare const MenuItem: ({ className, collapsed, disabled, icon, selected, text, onClick, }: MenuItemProperties) => React.JSX.Element;
