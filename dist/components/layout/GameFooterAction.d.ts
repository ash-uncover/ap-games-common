import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import './GameFooterAction.css';
export interface GameFooterActionProperties {
    icon?: [IconPrefix, IconName];
    selected?: boolean;
    title: string;
    onClick: () => void;
}
export declare const GameFooterAction: ({ icon, selected, title, onClick }: GameFooterActionProperties) => React.JSX.Element;
