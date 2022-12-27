/// <reference types="react" />
import './Select.css';
export interface SelectProperties {
    className?: string;
    disabled?: boolean;
    value: string;
    values: SelectValue[];
    onChange: (value: string) => void;
}
export interface SelectValue {
    id: string;
    text: string;
}
export declare const Select: ({ className, disabled, value, values, onChange, }: SelectProperties) => JSX.Element;
