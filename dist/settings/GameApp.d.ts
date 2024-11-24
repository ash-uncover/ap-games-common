import React, { ReactNode } from 'react';
export interface GameAppProperties {
    className: string;
    children: ReactNode;
}
export declare const GameApp: ({ className, children }: GameAppProperties) => React.JSX.Element;
