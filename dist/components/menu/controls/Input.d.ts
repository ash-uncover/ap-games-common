import React from 'react';
import './Input.css';
export interface InputProperties {
    className?: string;
    disabled?: boolean;
    value: string;
    onChange: (value: string) => void;
}
export declare const Input: ({ className, disabled, value, onChange, }: InputProperties) => React.JSX.Element;
