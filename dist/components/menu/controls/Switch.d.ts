import React from 'react';
import './Switch.css';
export interface SwitchProperties {
    checked: boolean;
    label: string;
    onChange: (arg: boolean) => void;
}
export declare const Switch: ({ checked, label, onChange, }: SwitchProperties) => React.JSX.Element;
