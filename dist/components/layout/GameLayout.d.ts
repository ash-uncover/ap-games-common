import React, { ReactNode } from 'react';
import './GameLayout.css';
export interface GameLayoutProperties {
    className?: string;
    header?: ReactNode;
    content: ReactNode;
    footer?: ReactNode;
}
export declare const GameLayout: ({ className, header, content, footer, }: GameLayoutProperties) => React.JSX.Element;
