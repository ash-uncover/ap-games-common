/// <reference types="react" />
import './MenuStepInput.css';
export interface MenuStepInputProperties {
    label: string;
    min: number;
    max: number;
    value: number;
    onChange: (arg: number) => void;
}
export declare const MenuStepInput: ({ label, min, max, value, onChange, }: MenuStepInputProperties) => JSX.Element;
