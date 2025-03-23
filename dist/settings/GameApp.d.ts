import React, { PropsWithChildren } from 'react';
import './GameApp.css';
export interface GameAppProperties extends PropsWithChildren {
    className: string;
    name: string;
}
export declare const GameApp: ({ className, name, children }: GameAppProperties) => React.JSX.Element;
