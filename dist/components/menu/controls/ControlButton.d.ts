import { ReactNode } from 'react';
import './ControlButton.css';
export interface ControlButtonProperties {
    title?: string;
    children: ReactNode;
    onClick: () => void;
}
export declare const ControlButton: ({ title, children, onClick, }: ControlButtonProperties) => JSX.Element;
