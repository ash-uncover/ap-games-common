/// <reference types="react" />
export interface MenuCheckboxProperties {
    checked: boolean;
    label: string;
    onChange: (arg: boolean) => void;
}
export declare const MenuCheckbox: ({ checked, label, onChange, }: MenuCheckboxProperties) => JSX.Element;
