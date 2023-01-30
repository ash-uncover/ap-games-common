/// <reference types="react" />
import './Loader.css';
export interface LoaderProperties {
    text?: string;
    value: number;
    onClick?: () => void;
}
export declare const Loader: ({ text, value, onClick }: LoaderProperties) => JSX.Element;
