/// <reference types="react" />
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import './GameFooterAction.css';
export interface GameFooterActionProperties {
    icon?: [IconPrefix, IconName];
    selected?: boolean;
    title: string;
    onClick: () => void;
}
export declare const GameFooterAction: ({ icon, selected, title, onClick }: GameFooterActionProperties) => JSX.Element;
