import React from 'react';
import './GameApp.css';
export interface GameAppProperties extends React.PropsWithChildren {
    className?: string;
    lang?: string;
    name: string;
}
export declare const GameApp: ({ className, lang, name, children }: GameAppProperties) => React.JSX.Element;
