import { ReactNode } from 'react';
import './PanelButton.css';
export interface PanelButtonProperties {
    className?: string;
    title?: string;
    children: ReactNode;
    onClick: () => void;
}
export declare const PanelButton: ({ className, title, children, onClick }: PanelButtonProperties) => JSX.Element;
