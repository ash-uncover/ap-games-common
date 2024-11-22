import React, { ReactNode } from 'react';
import './Hexagon.css';
interface HexagonProperties {
    children: ReactNode;
}
declare const Hexagon: ({ children }: HexagonProperties) => React.JSX.Element;
export default Hexagon;
