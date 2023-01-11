/// <reference types="react" />
import './Loader.css';
export interface LoaderProperties {
    text?: string;
    value: number;
}
export declare const Loader: ({ text, value, }: LoaderProperties) => JSX.Element;
