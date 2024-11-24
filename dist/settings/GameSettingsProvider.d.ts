import React, { ReactNode } from 'react';
import { GameSettingsModel } from './GameSettingsModel';
export declare const GameSettingsContext: React.Context<GameSettingsModel>;
export declare const GameSettingsDispatchContext: React.Context<React.Dispatch<any>>;
export interface GameSettingsProviderProperties {
    name: string;
    children: ReactNode;
}
export declare const GameSettingsProvider: ({ name, children }: GameSettingsProviderProperties) => React.JSX.Element;
declare function setBrightness(brightness: number): {
    type: string;
    brightness: number;
};
declare function setContrast(contrast: number): {
    type: string;
    contrast: number;
};
export declare const GameSettingsActions: {
    setBrightness: typeof setBrightness;
    setContrast: typeof setContrast;
};
export {};
