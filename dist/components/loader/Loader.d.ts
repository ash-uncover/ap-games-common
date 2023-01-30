/// <reference types="react" />
import './Loader.css';
export interface LoaderProperties {
    className?: string;
    text?: string;
    value: number;
    onClick?: () => void;
}
export declare const Loader: ({ className, text, value, onClick }: LoaderProperties) => JSX.Element;
