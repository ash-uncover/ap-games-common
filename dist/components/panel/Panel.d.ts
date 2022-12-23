import { ReactNode } from 'react';
import './Panel.css';
interface PanelProperties {
    children: ReactNode;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    width?: string;
    height?: string;
}
declare const Panel: ({ children, top, left, bottom, right, width, height, }: PanelProperties) => JSX.Element;
export default Panel;
