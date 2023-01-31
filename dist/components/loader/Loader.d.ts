import { CSSProperties, ReactNode } from 'react';
import './Loader.css';
export interface LoaderProperties {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    value: number;
    onClick?: () => void;
}
export declare const Loader: ({ className, style, children, value, onClick }: LoaderProperties) => JSX.Element;
