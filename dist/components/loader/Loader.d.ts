import { CSSProperties } from 'react';
import './Loader.css';
export interface LoaderProperties {
    className?: string;
    style?: CSSProperties;
    text?: string;
    value: number;
    onClick?: () => void;
}
export declare const Loader: ({ className, style, text, value, onClick }: LoaderProperties) => JSX.Element;
